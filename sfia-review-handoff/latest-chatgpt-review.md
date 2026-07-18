# Review pack FULL — SFIA Studio — Final post-merge sync versionné + draft PR #213

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-18 22:07:28 CEST |
| **Repository** | `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`) |
| **Branche** | `project/sfia-studio-functional-architecture` |
| **Base** | `origin/main` @ `cb87054423ed80905f633e86d907eee1709611b2` |
| **HEAD initial** | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
| **HEAD après commit** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
| **SHA distant branche** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
| **Match local/distant** | **Oui** |
| **Cycle** | 13 — PR readiness (après cycle 14 post-merge final) |
| **Profil** | **Critical** |
| **Nouvelle PR** | [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **OPEN draft** |
| **PR #211** | **MERGED** — merge `84e48636bb78808774b51f67329167f8e9749a6b` |
| **Acceptation #211** | **VALIDÉE** — Morris — 2026-07-18 |
| **PR #212** | **MERGED** — merge `cb87054423ed80905f633e86d907eee1709611b2` |
| **Statut documentaire** | `functional-architecture-post-merge-integrated` |

---

## 1. Décision Morris

### Autorisé

- Contrôle final du diff local
- Staging strictement borné
- Commit projet unique
- Push branche projet
- Draft PR vers `main`
- Review Handoff Git

### Non autorisé

- Ready-for-review / merge
- Clôture formelle architecture
- AF-CAND-11B
- UX/UI / tech / backlog / POC / MVP
- D-VAL-12
- Suppression de branche
- Modification fonctionnelle / hors périmètre

---

## 2. Justification Critical

- Cinq documents structurants
- Décision Morris de régularisation #211
- Distinction intégration / synchronisation / clôture
- Risque promotion AF-CAND-11B ou D-VAL-12
- Working tree hors périmètre (Campus360, `.sfia`)
- Nouvelle PR après deux merges successifs

---

## 3. Sources

- Template + routing + operating model (+ guardrails)
- Working tree : README, `07`, `11`, `12`, `13`
- Baseline protégée `01`–`06`, `08`–`10`
- Handoff validé : `06b0a23b44e27f9476c356813c809371064e8c3f`

---

## 4. État post-merge final versionné

- Statut `functional-architecture-post-merge-integrated`
- PR #211 MERGED + **acceptée/régularisée** (2026-07-18)
- Aucune réécriture rétroactive des autorisations pré-merge
- Aucune D-VAL-12
- PR #212 MERGED (`cb870544…`)
- Architecture **VALIDÉE** et **INTÉGRÉE**
- Sync post-merge **INTÉGRÉE**
- Clôture formelle **NON PRONONCÉE**
- AF-CAND-11B **NON DÉCIDÉE**
- Branches **conservées**
- Aucun cycle suivant lancé

### Métadonnées README (extrait)

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `functional-architecture-post-merge-integrated` — Architecture **VALIDÉE** et **INTÉGRÉE** ; sync post-merge **intégrée** (PR #212) ; clôture formelle **non prononcée** ; conception **intégrée** |
| **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — post-merge final / régularisation (DOC, Critical) — sync locale |
| **Typologie cycle** | DOC — post-merge / régularisation et synchronisation finale |
| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE** + **INTÉGRÉE**) ; sync post-merge **intégrée** ; clôture formelle **ouverte** |
| **Profil SFIA** | Critical |
| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `33d61e3…`) |
| **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
| **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
| **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
| **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
| **Acceptation Morris #211** | **OUI** — 2026-07-18 (régularisation documentaire ; sans D-VAL-12) |
| **PR sync post-merge** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) — **MERGED** |
| **Commit sync** | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
| **Merge sync** | `cb87054423ed80905f633e86d907eee1709611b2` |
| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **Base canonique** | `origin/main` @ `cb87054423ed80905f633e86d907eee1709611b2` |
| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
| **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
| **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
| **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) |
| **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |

---

## 0. État post-merge (observation) et conception

| Élément | Valeur |
```

---

## 5. Décisions préservées

| Élément | État |
|---------|------|
| AF-Option C | **VALIDÉE** |
| AF-CAND-01…10 | **VALIDÉES** |
| AF-CAND-11A | **VALIDÉE** (recommandation) |
| AF-CAND-11B | **NON DÉCIDÉE** |
| AF-CAND-12 | **VALIDÉE** |
| D10 | Préservé |
| D-VAL-12 | **Absente** |
| Architecture technique | **Absente** |
| Cycle suivant | **Non lancé** |
| Clôture | **NON PRONONCÉE** |
| Branches | **Conservées** |

---

## 6. Staging / commit / push

### Fichiers (exactement 5)

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/11-functional-architecture.md
M	projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
M	projects/sfia-studio/13-functional-architecture-decision-pack.md
M	projects/sfia-studio/README.md

```

### Commit

- Message : `docs: finalize SFIA Studio functional architecture post-merge state`
- SHA : `0b61d72874a7075bdb174490dc9aa739e79e7024`
- Parent : `33d61e39511f7302aa8073bef30ebe939f8eb9a2`

```
commit 0b61d72874a7075bdb174490dc9aa739e79e7024
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Jul 18 22:06:59 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Jul 18 22:06:59 2026 +0200

    docs: finalize SFIA Studio functional architecture post-merge state
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/11-functional-architecture.md
M	projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
M	projects/sfia-studio/13-functional-architecture-decision-pack.md
M	projects/sfia-studio/README.md

```

### Diff stat

```
 .../07-product-trajectory-and-decision-pack.md     | 67 ++++++++++++----------
 projects/sfia-studio/11-functional-architecture.md | 18 +++---
 ...functional-architecture-flows-and-boundaries.md |  8 +--
 .../13-functional-architecture-decision-pack.md    | 39 +++++++------
 projects/sfia-studio/README.md                     | 46 ++++++++-------
 5 files changed, 99 insertions(+), 79 deletions(-)

```

### Diff check

```
EXIT:0
```

### Push

- Cible : `origin/project/sfia-studio-functional-architecture`
- Force push : **NON**
- Match local/distant : **Oui**

### Commits vs main

```
0b61d72 docs: finalize SFIA Studio functional architecture post-merge state

```

---

## 7. Draft PR #213

| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/213 |
| État | OPEN |
| Draft | **true** |
| Base | `main` |
| Head | `project/sfia-studio-functional-architecture` |
| Head OID | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
| Fichiers | 5 |
| +/− | +99 / −79 |
| Checks | aucun check reporté |
| Ready-for-review | **NON** |
| Merge | **NON** |

---

## 8. Diff complet

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index db4431b..1caaf46 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -7,12 +7,12 @@
 | **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
 | **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `functional-architecture-integrated-post-merge-review` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
-| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** |
+| **Statut** | `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
+| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; acceptation #211 **VALIDÉE** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `84e48636bb78808774b51f67329167f8e9749a6b` — cadrage + conception + architecture **intégrés** |
+| **Source de vérité** | Git `main` @ `cb87054423ed80905f633e86d907eee1709611b2` — cadrage + conception + architecture + sync post-merge **intégrés** |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync en revue — **pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`). Acceptation/régularisation #211 **VALIDÉE** (Morris — 2026-07-18). Clôture formelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
 
 ---
 
@@ -33,19 +33,20 @@
 | Intégration Git conception | **Réalisée** — PR #209 / merge `fdade59…` / commit `99eaeaa…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 ; sans réécriture rétroactive du GO draft |
-| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-integrated-post-merge-review` |
+| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
 | AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
-| Versionnement architecture | Commit `2153258…` / head `72cab80…` |
+| Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
-| Trace merge #211 | **Fait Git** — aucun GO formel ChatGPT retrouvé ; pas de réinterprétation rétroactive ; pas de D-VAL auto ; acceptation/régularisation **ouverte** |
-| Clôture formelle cycle architecture | **Non automatique** |
+| Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
+| Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` |
+| Clôture formelle cycle architecture | **NON PRONONCÉE** |
 | Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
 | Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
 
-> Merges #207 / #209/#210 : historiques. Merge #211 : architecture **intégrée** (`84e4863…`) — **fait Git**. Aucune réinterprétation des GO pré-merge. Aucune D-VAL-12. Clôture formelle **ouverte**.
+> Merges #207 / #209/#210 : historiques. Merge #211 (`84e4863…`) : architecture **intégrée** — **fait Git** ; Morris **accepte/régularise** documentairement le 2026-07-18 — clôt l’écart de traçabilité **sans** D-VAL-12 et **sans** réécriture rétroactive des autorisations pré-merge. Merge #212 (`cb870544…`) : sync post-merge **intégrée**. Clôture formelle architecture **ouverte**.
 
 ### Trace factuelle — cycle 2 (conception fonctionnelle)
 
@@ -122,7 +123,7 @@ Pré-cadrage                         ← terminé historiquement
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
   → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync **en revue** — AF-CAND-11B **ouverte**
+  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync post-merge **intégrée** (PR #212 / `cb870544…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
   → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
   → architecture technique candidate
   → définition du POC
@@ -144,11 +145,12 @@ Pré-cadrage                         ← terminé historiquement
 - Merge #207 = fait Git ; régularisation cadrage = **D-VAL-11**.
 - Merge #209 / #210 = faits Git ; conception intégrée ; sync documentaire clôturable (post-#210).
 - Aucune stack / architecture **technique** validée.
-- Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`).
+- Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18.
+- Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
 - **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
 - **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
 - Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
-- Clôture formelle architecture **non automatique**.
+- Clôture formelle architecture **non prononcée**.
 
 ---
 
@@ -178,7 +180,7 @@ Pré-cadrage                         ← terminé historiquement
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-integrated-post-merge-review` |
+| Statut | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
 | Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
 | Livrables | `11` / `12` / `13` — sur `main` |
 | Profil | Critical |
@@ -187,8 +189,9 @@ Pré-cadrage                         ← terminé historiquement
 | AF-CAND-11B | **NON DÉCIDÉE** |
 | D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
 | Branche | `project/sfia-studio-functional-architecture` — **conservée** |
-| Commit / merge | head `72cab80…` ; merge `84e48636bb78808774b51f67329167f8e9749a6b` |
-| Intégration | **Oui** sur `main` — PR #211 **MERGED** (fait Git) |
+| Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` |
+| Intégration | Architecture **Oui** (#211) ; sync post-merge **Oui** (#212) |
+| Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
 | Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; clôture auto ; AF-CAND-11B |
 
 ### 4.3 UX/UI
@@ -226,8 +229,10 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209 / #210) |
 | D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
 | D-NEXT-2f | Validation architecture / AF-CAND | Morris | **VALIDÉE** sur le fond — AF-Option C + AF-CAND-01…10, 11A, 12 ; 11B ouverte |
-| D-NEXT-2i | Intégration PR #211 / sync post-merge | Observation Git | **Fait Git** (`84e4863…`) — acceptation/régularisation documentaire **ouverte** |
-| D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — non automatique |
+| D-NEXT-2i | Intégration PR #211 | Observation Git | **Fait Git** (`84e4863…`) |
+| D-NEXT-2i2 | Acceptation/régularisation documentaire #211 | Morris | **VALIDÉE** — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
+| D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
+| D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
 | D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
@@ -271,13 +276,13 @@ Pré-cadrage                         ← terminé historiquement
 
 **Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).
 
-**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`).
+**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
 
 **AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.
 
 **AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.
 
-Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Clôture formelle architecture **non automatique**.
+Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Clôture formelle architecture **non prononcée**.
 
 ---
 
@@ -293,18 +298,18 @@ Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). AF-CAND-11B : **non décidée**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). Sync post-merge : **INTÉGRÉE** (`cb870544…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **non décidée**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Acceptez-vous / régularisez-vous documentairement le merge #211 (fait Git) ?
-2. Autorisez-vous commit / push / PR de synchronisation post-merge ?
-3. Clôturez-vous formellement le cycle architecture ?
-4. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
-5. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
-6. Quel niveau d’architecture minimale avant POC ?
+1. Autorisez-vous commit / push / PR de la synchronisation documentaire finale (locale) ?
+2. Clôturez-vous formellement le cycle architecture ?
+3. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
+4. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
+5. Quel niveau d’architecture minimale avant POC ?
+6. Quelles priorités NFR avant le POC ?
 
 ---
 
@@ -322,6 +327,8 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Cycle conception fonctionnelle | **CLÔTURÉ** — intégré PR #209 / #210 |
 | FD-CAND-01…08 | **VALIDÉES** |
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
+| Sync post-merge | **INTÉGRÉE** — `cb870544…` / PR #212 |
+| Acceptation #211 | **VALIDÉE** — 2026-07-18 |
 | AF-Option C | **VALIDÉE** |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
 | AF-CAND-11B | **NON DÉCIDÉE** |
@@ -341,12 +348,14 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | FD-CAND-01…08 | **VALIDÉES** |
 | Cycle 2 | **CLÔTURÉ** |
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
+| Sync post-merge | **INTÉGRÉE** — `cb870544…` |
+| Acceptation #211 | **VALIDÉE** |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-11B | **NON DÉCIDÉE** |
 | Ready for POC / MVP / tech | **Non** |
-| Ready for Morris post-merge review | **Oui** (sync locale) |
+| Ready for Morris final post-merge review | **Oui** (sync locale) |
 
-**Verdict :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
+**Verdict :** `SFIA STUDIO FINAL POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
 
 ---
 
@@ -364,4 +373,4 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211 / 84e4863…) — post-merge sync en revue — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211) — sync post-merge INTÉGRÉE (PR #212 / cb870544…) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
diff --git a/projects/sfia-studio/11-functional-architecture.md b/projects/sfia-studio/11-functional-architecture.md
index 1bbf7b8..9af2d8d 100644
--- a/projects/sfia-studio/11-functional-architecture.md
+++ b/projects/sfia-studio/11-functional-architecture.md
@@ -8,17 +8,17 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
 | **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
-| **Base Git** | `origin/main` @ `84e48636bb78808774b51f67329167f8e9749a6b` |
-| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** ; intégrée à `main`) |
-| **Commit / merge** | head `72cab80…` ; merge `84e48636bb78808774b51f67329167f8e9749a6b` |
-| **Statut** | `functional-architecture-integrated-post-merge-review` |
+| **Base Git** | `origin/main` @ `cb87054423ed80905f633e86d907eee1709611b2` |
+| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `33d61e3…`) |
+| **Commit / merge** | head #211 `72cab80…` ; merge #211 `84e48636bb78808774b51f67329167f8e9749a6b` ; sync `33d61e3…` ; merge #212 `cb87054423ed80905f633e86d907eee1709611b2` |
+| **Statut** | `functional-architecture-post-merge-integrated` |
 | **Autorité** | Morris (L0) |
 | **Entrée** | Conception validée `08`–`10` (inchangée) |
 | **Architecture** | **VALIDÉE** et **INTÉGRÉE** sur `main` — **AF-Option C** VALIDÉE |
-| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
+| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** |
 
-> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non automatique**.
+> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18. Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
 
 ---
 
@@ -355,7 +355,7 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 **Réserves :** FB ≠ composants ; Runtime candidat ; pas de stack ; pas de POC/MVP ; cycle suivant non sélectionné (AF-CAND-11B).
 **Risques :** confusion Studio/orchestrateur ; seconde vérité ; GO implicite ; confusion **AF-Option C** / Option C méthode.
 **Décidé :** **AF-Option C** VALIDÉE ; AF-CAND-01…10, 11A, 12 VALIDÉES.
-**Questions restantes :** AF-CAND-11B (sélection prochain cycle) ; acceptation/régularisation merge #211 ; GO sync post-merge ; clôture formelle ; sort des branches.
+**Questions restantes :** AF-CAND-11B (sélection prochain cycle) ; clôture formelle ; GO versionnement sync finale ; sort des branches.
 
 ---
 
@@ -370,4 +370,4 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 
 ---
 
-*SFIA Studio — architecture fonctionnelle VALIDÉE et INTÉGRÉE (PR #211 / 84e4863…) — post-merge sync en revue — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211) — sync post-merge INTÉGRÉE (PR #212 / cb870544…) — clôture NON PRONONCÉE — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
diff --git a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
index 9b0ce13..714ab0a 100644
--- a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
+++ b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
@@ -3,10 +3,10 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `12-functional-architecture-flows-and-boundaries.md` |
-| **Statut** | `functional-architecture-integrated-post-merge-review` |
+| **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | Architecture fonctionnelle — Critical |
-| **Base** | `84e48636bb78808774b51f67329167f8e9749a6b` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** — merge `84e4863…` |
+| **Base** | `cb87054423ed80905f633e86d907eee1709611b2` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** (`84e4863…`) + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** (`cb870544…`) |
 | **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |
 
 > Flux **AF-*** candidats. Ne remplacent pas F1–F12 validés ; ils les **structurent** architecturalement.
@@ -389,4 +389,4 @@ Voir document 11 §§9–10 et BR-001…025. Gates séparés : commit, push, PR,
 
 ---
 
-*Flux architecture VALIDÉS et INTÉGRÉS (PR #211 / 84e4863…) — post-merge sync en revue — Morris décide AF-CAND-11B / clôture.*
+*Flux architecture VALIDÉS et INTÉGRÉS (PR #211) — sync post-merge INTÉGRÉE (PR #212 / cb870544…) — Morris décide AF-CAND-11B / clôture.*
diff --git a/projects/sfia-studio/13-functional-architecture-decision-pack.md b/projects/sfia-studio/13-functional-architecture-decision-pack.md
index 5069f58..ba26865 100644
--- a/projects/sfia-studio/13-functional-architecture-decision-pack.md
+++ b/projects/sfia-studio/13-functional-architecture-decision-pack.md
@@ -3,13 +3,16 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `13-functional-architecture-decision-pack.md` |
-| **Statut** | `functional-architecture-integrated-post-merge-review` |
+| **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
 | **Profil** | Critical |
-| **Base / main** | `84e48636bb78808774b51f67329167f8e9749a6b` |
-| **Commit head PR** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
-| **Merge** | `84e48636bb78808774b51f67329167f8e9749a6b` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
+| **Base / main** | `cb87054423ed80905f633e86d907eee1709611b2` |
+| **Commit head PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
+| **Merge #211** | `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **Acceptation #211** | **VALIDÉE** — Morris — 2026-07-18 (sans D-VAL-12) |
+| **Commit sync #212** | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
+| **Merge #212** | `cb87054423ed80905f633e86d907eee1709611b2` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** |
 | **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |
 
 > **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.
@@ -252,11 +255,11 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 **Risques :** AF-Option B seconde vérité (écartée) ; FB pris pour microservices ; Runtime contractuel implicite ; confusion AF-Option C / Option C méthode ; promotion implicite d’AF-CAND-11B.
 **Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.
 **Questions Morris restantes :**
-1. Acceptez-vous / régularisez-vous documentairement le merge #211 (fait Git) ?
-2. Autorisez-vous commit / push / PR de synchronisation post-merge ?
-3. Clôturez-vous formellement le cycle architecture ?
-4. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
-5. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
+1. Autorisez-vous commit / push / PR de la synchronisation documentaire finale (locale) ?
+2. Clôturez-vous formellement le cycle architecture ?
+3. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
+4. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
+5. Quel niveau d’architecture minimale avant POC ?
 
 ---
 
@@ -268,8 +271,10 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 | Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
 | AF-CAND-11B sélection cycle | **OUVERT** |
 | Versionnement architecture | **FAIT** |
-| Intégration PR #211 sur `main` | **FAIT Git** (`84e4863…`) — acceptation/régularisation documentaire **ouverte** |
-| Clôture formelle cycle architecture | **Non** — non automatique |
+| Intégration PR #211 sur `main` | **FAIT Git** (`84e4863…`) |
+| Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 |
+| Sync post-merge PR #212 | **INTÉGRÉE** — `cb870544…` |
+| Clôture formelle cycle architecture | **Non** — **non prononcée** |
 | Lancement UX/UI / tech / POC / MVP | **Non** |
 
 ---
@@ -296,12 +301,12 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 
 ## 12. Verdict
 
-**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-integrated-post-merge-review` — PR #211 **MERGED** (`84e4863…`).
+**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
 
-Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12.
-Non décidé : AF-CAND-11B.
-Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Clôture formelle **non automatique**. Merge tracé comme **fait Git** (sans D-VAL auto).
+Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12 ; acceptation #211.
+Non décidé : AF-CAND-11B ; clôture formelle.
+Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Clôture formelle **non prononcée**.
 
 ---
 
-*Pack AF validé et intégré — Critical — post-merge sync en revue — Morris décide AF-CAND-11B / clôture / sync.*
+*Pack AF validé et intégré — Critical — sync post-merge intégrée — Morris décide AF-CAND-11B / clôture.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 7b63115..876597a 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,22 +4,26 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-architecture-integrated-post-merge-review` — Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` — synchronisation post-merge en revue ; conception **intégrée** |
+| **Statut** | `functional-architecture-post-merge-integrated` — Architecture **VALIDÉE** et **INTÉGRÉE** ; sync post-merge **intégrée** (PR #212) ; clôture formelle **non prononcée** ; conception **intégrée** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Critical) |
-| **Typologie cycle** | DOC — post-merge / synchronisation documentaire |
-| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE** + **INTÉGRÉE** via PR #211) ; post-merge **en cours** ; clôture formelle **non automatique** |
+| **Exécuteur** | Cursor — post-merge final / régularisation (DOC, Critical) — sync locale |
+| **Typologie cycle** | DOC — post-merge / régularisation et synchronisation finale |
+| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE** + **INTÉGRÉE**) ; sync post-merge **intégrée** ; clôture formelle **ouverte** |
 | **Profil SFIA** | Critical |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** ; poussée ; intégrée à `main`) |
+| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `33d61e3…`) |
 | **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
 | **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
 | **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **Acceptation Morris #211** | **OUI** — 2026-07-18 (régularisation documentaire ; sans D-VAL-12) |
+| **PR sync post-merge** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) — **MERGED** |
+| **Commit sync** | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
+| **Merge sync** | `cb87054423ed80905f633e86d907eee1709611b2` |
 | **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **Base canonique** | `origin/main` @ `cb87054423ed80905f633e86d907eee1709611b2` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
@@ -44,22 +48,23 @@
 | Cadrage documentaire | **Clôturé** (D-VAL-11) |
 | Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-integrated-post-merge-review` |
+| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
 | AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
-| Versionnement architecture | Commit `2153258…` / head `72cab80…` ; branche poussée |
+| Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
-| Trace merge #211 | **Fait Git vérifié** — aucun GO formel ChatGPT retrouvé ; aucune réinterprétation rétroactive des GO pré-merge ; **aucune** D-VAL automatique ; acceptation/régularisation documentaire **ouverte** |
+| Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
+| Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` ; commit `33d61e3…` |
 | Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
-| Clôture formelle cycle architecture | **Non automatique** — soumise à décision Morris post-revue |
+| Clôture formelle cycle architecture | **NON PRONONCÉE** |
 | Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
 | Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
 
-> PR #207 / #209 : historiques cadrage/conception. PR #211 : architecture **intégrée** sur `main` (merge `84e4863…`) — **fait Git**. Aucune autorisation antérieure de correctif / PR readiness / ready-for-review n’est réinterprétée comme GO merge. Aucune D-VAL-12. Acceptation/régularisation documentaire et clôture formelle = décisions Morris **distinctes** (non prises ici).
+> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** (`84e4863…`) — **fait Git** ; Morris **accepte/régularise** documentairement le merge le 2026-07-18 — clôt l’écart de traçabilité **sans** D-VAL-12 et **sans** réécriture rétroactive des autorisations pré-merge. PR #212 : sync post-merge **intégrée** (`cb870544…`). Clôture formelle architecture et AF-CAND-11B = décisions Morris **distinctes** (non prises ici).
 
 ---
 
@@ -131,7 +136,7 @@ Pré-cadrage                    ← terminé historiquement
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
   → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync **en revue** — AF-CAND-11B **ouverte**
+  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync post-merge **intégrée** (PR #212 / `cb870544…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
   → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
   → MVP → delivery → industrialisation plateforme
 ```
@@ -180,7 +185,7 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |
 
-> Statut `functional-architecture-integrated-post-merge-review`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211 **MERGED** — merge `84e4863…` — architecture **sur `main`**. Clôture formelle **non automatique**.
+> Statut `functional-architecture-post-merge-integrated`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211 **MERGED** et **acceptée/régularisée** (2026-07-18). PR #212 **MERGED** — sync sur `main` (`cb870544…`). Clôture formelle **non prononcée**.
 
 ---
 
@@ -275,21 +280,21 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 |----------|--------|
 | AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
 | Acceptation / régularisation documentaire du merge #211 | **Ouverte** — fait Git tracé ; pas de D-VAL auto |
-| Commit / push / PR de synchronisation post-merge | **Non autorisés** dans ce cycle |
+| Commit / push / PR de synchronisation post-merge | **Réalisés** (PR #212) — nouvelle sync locale éventuelle **non versionnée** ici |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches | Conservées ; décisions distinctes |
 | Contenu POC / définition MVP | Non pris |
 | Stack / architecture technique | Non pris |
 
-> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211 / `84e4863…`) — **fait Git**. Sync merge ChatGPT formel non retrouvé ; aucune réinterprétation rétroactive ; aucune D-VAL-12.
+> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211 / `84e4863…`) — **fait Git** + **acceptée/régularisée** Morris 2026-07-18. Sync post-merge : **intégrée** (PR #212 / `cb870544…`). Aucune réinterprétation rétroactive des GO pré-merge ; aucune D-VAL-12.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT du handoff **post-merge** architecture.
-2. GO Morris : acceptation/régularisation documentaire du merge #211 (si requis) ; commit/push/PR de sync.
-3. Clôture formelle du cycle architecture (**non automatique**).
+1. Revue ChatGPT du handoff **post-merge final**.
+2. GO Morris : commit / push / PR de cette synchronisation finale (locale).
+3. Clôture formelle du cycle architecture (**non prononcée**).
 4. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
 5. Sort des branches (décisions distinctes — suppression interdite ici).
 
@@ -306,11 +311,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
 | Conception fonctionnelle validée | **`08`–`10`** sur **`main`** — baseline **inchangée** |
 | Architecture fonctionnelle validée + intégrée | **`11`–`13`** sur **`main`** (`84e4863…` / PR #211) |
+| Sync post-merge intégrée | PR #212 / `cb870544…` — statut `functional-architecture-post-merge-integrated` |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` @ `84e4863…` est la source de vérité du **cadrage**, de la **conception** et de l’**architecture fonctionnelle** intégrée. Synchronisation documentaire post-merge **locale** jusqu’à GO versionnement.
+> `main` @ `cb870544…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture fonctionnelle** et de la **sync post-merge** intégrée. Dernière sync documentaire finale = **locale** jusqu’à GO versionnement.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211 / 84e4863…) — post-merge sync en revue — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211) — sync post-merge INTÉGRÉE (PR #212 / cb870544…) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*

```

---

## 9. Working tree final

```
## project/sfia-studio-functional-architecture...origin/project/sfia-studio-functional-architecture
 M projects/campus360/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? sfia-review-handoff/

 M projects/campus360/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? sfia-review-handoff/

```

Hors périmètre intact : Campus360, `.sfia`, `.tmp-sfia-review`, `sfia-review-handoff/`.

---

## 10. Risques

1. Confusion clôture formelle / sync finale intégrée
2. Promotion implicite AF-CAND-11B
3. Confusion merge historique #211/#212 vs merge draft #213
4. Staging accidentel hors périmètre (évité)

---

## 11. Réserves

- Draft PR uniquement
- Clôture formelle **ouverte**
- AF-CAND-11B **NON DÉCIDÉE**
- Acceptation #211 déjà enregistrée ; pas de D-VAL-12

---

## 12. Décisions Morris restantes

1. Revue ChatGPT draft PR #213
2. Ready-for-review / merge #213 (GO distincts)
3. Clôture formelle du cycle architecture
4. AF-CAND-11B — sélection prochain cycle
5. Sort des branches

---

## 13. Verdict

**SFIA STUDIO FINAL POST-MERGE SYNC COMMITTED, PUSHED AND DRAFT PR OPENED — READY FOR CHATGPT PR REVIEW**

Confirmations :

- Commit/push/draft PR conformes
- Cinq fichiers
- Statut `functional-architecture-post-merge-integrated`
- Régularisation #211
- Intégration #212
- AF-CAND-11B non décidée
- D-VAL-12 absente
- Clôture non prononcée
- Aucun ready-for-review / merge de #213

---

## 14. Instruction ChatGPT

Lire depuis Git :

- repository : `mcleland147/sfia-workspace`
- ref : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- base attendue : `cb87054423ed80905f633e86d907eee1709611b2`

Analyser :

- conformité commit/push/draft PR
- cinq fichiers
- statut final post-merge
- régularisation #211
- intégration #212
- AF-CAND-11B non décidée
- absence D-VAL-12
- clôture non prononcée
- readiness pour revue PR
