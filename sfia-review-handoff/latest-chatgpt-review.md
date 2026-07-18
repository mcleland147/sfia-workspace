# Review pack FULL — SFIA Studio — Post-merge sync versionné + draft PR #212

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-18 21:42:54 CEST |
| **Repository** | `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`) |
| **Branche** | `project/sfia-studio-functional-architecture` |
| **Base** | `origin/main` @ `84e48636bb78808774b51f67329167f8e9749a6b` |
| **HEAD initial (avant commit)** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
| **HEAD après commit** | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
| **SHA distant branche** | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
| **Match local/distant** | **Oui** (`33d61e39511f7302aa8073bef30ebe939f8eb9a2` = `33d61e39511f7302aa8073bef30ebe939f8eb9a2`) |
| **Cycle** | 13 — PR readiness (après cycle 14 post-merge) |
| **Profil** | **Critical** |
| **Typologie** | DOC — post-merge / PR readiness |
| **Nouvelle PR** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) — **OPEN draft** |
| **PR historique** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
| **Merge historique #211** | `84e48636bb78808774b51f67329167f8e9749a6b` |
| **Statut documentaire** | `functional-architecture-integrated-post-merge-review` |

---

## 1. Décision Morris

### Autorisé

- Commit de la synchronisation documentaire post-merge
- Push de la branche projet
- Création d’une draft PR vers `main`
- Publication du Review Handoff Git
- Contrôles Git et documentaires nécessaires

### Non autorisé

- Ready-for-review
- Merge
- Suppression de branche
- Clôture automatique du cycle architecture
- Validation / sélection AF-CAND-11B
- Création D-VAL-12
- Modification architecture fonctionnelle validée / technique
- Lancement UX/UI, backlog, POC, MVP
- Modification Campus360 / méthode / prompts / `.sfia`

---

## 2. Justification Critical

- Synchronisation de l’architecture fonctionnelle validée et intégrée
- Trace d’un merge sans GO explicite ChatGPT retrouvé
- Distinction fait Git / autorisation / intégration / clôture
- Cinq documents structurants
- Aucune décision ouverte ne doit être promue
- Working tree contenant des modifications hors périmètre (Campus360, `.sfia`, etc.)

---

## 3. Sources

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` (si présent)
- Working tree : README, `07`, `11`, `12`, `13`
- Baseline protégée : `01`–`06`, `08`–`10`
- Handoff validé antérieur : `0227268ec554d64eceb31d21b8150d9bcd2bbd58`

---

## 4. Trois SHA — distinction factuelle

| SHA | Rôle |
|-----|------|
| `215325858ed493564f6083ec5adc1618008593f6` | Commit **initial** d’architecture |
| `72cab8016387f827f4dcf04f7459208cd85ff327` | **Head final** historique PR #211 |
| `84e48636bb78808774b51f67329167f8e9749a6b` | **Merge commit** PR #211 |

Aucune ambiguïté « head historique » restante.

---

## 5. État post-merge versionné

- Statut `functional-architecture-integrated-post-merge-review`
- PR #211 **MERGED** ; architecture **VALIDÉE** et **INTÉGRÉE** sur `main`
- Branche source **conservée**
- AF-Option C **VALIDÉE**
- AF-CAND-01…10 **VALIDÉES**
- AF-CAND-11A **VALIDÉE** (recommandation)
- AF-CAND-11B **NON DÉCIDÉE**
- AF-CAND-12 **VALIDÉE**
- D10 → FB-11 → AF-01 / AF-15 → FR-024 / FR-025
- Aucune D-VAL-12
- Aucune architecture technique
- Aucun cycle suivant lancé
- Merge #211 tracé comme **fait Git**
- Aucun GO merge rétroactivement inventé
- Clôture **non automatique**

### Métadonnées README (extrait)

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `functional-architecture-integrated-post-merge-review` — Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` — synchronisation post-merge en revue ; conception **intégrée** |
| **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Critical) |
| **Typologie cycle** | DOC — post-merge / synchronisation documentaire |
| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE** + **INTÉGRÉE** via PR #211) ; post-merge **en cours** ; clôture formelle **non automatique** |
| **Profil SFIA** | Critical |
| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** ; poussée ; intégrée à `main`) |
| **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
| **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
| **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
| **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **Base canonique** | `origin/main` @ `84e48636bb78808774b51f67329167f8e9749a6b` |
| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
| **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
| **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
| **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) |
| **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |

---
```

---

## 6. Staging / commit / push

### Staged (exactement 5)

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/11-functional-architecture.md
M	projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
M	projects/sfia-studio/13-functional-architecture-decision-pack.md
M	projects/sfia-studio/README.md

```

### Commit

- Message : `docs: sync SFIA Studio functional architecture post-merge state`
- SHA : `33d61e39511f7302aa8073bef30ebe939f8eb9a2`
- Parent : `72cab8016387f827f4dcf04f7459208cd85ff327` (= head final PR #211)

```
commit 33d61e39511f7302aa8073bef30ebe939f8eb9a2
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Jul 18 21:42:19 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Jul 18 21:42:19 2026 +0200

    docs: sync SFIA Studio functional architecture post-merge state
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/11-functional-architecture.md
M	projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
M	projects/sfia-studio/13-functional-architecture-decision-pack.md
M	projects/sfia-studio/README.md

```

### Diff stat

```
 .../07-product-trajectory-and-decision-pack.md     | 71 ++++++++++++----------
 projects/sfia-studio/11-functional-architecture.md | 18 +++---
 ...functional-architecture-flows-and-boundaries.md |  8 +--
 .../13-functional-architecture-decision-pack.md    | 29 +++++----
 projects/sfia-studio/README.md                     | 70 +++++++++++----------
 5 files changed, 104 insertions(+), 92 deletions(-)

```

### Diff check

```
EXIT:0
```

### Push

- Cible : `origin/project/sfia-studio-functional-architecture`
- Force push : **NON**
- SHA distant = local : **Oui**

### Commits vs main

```
33d61e3 docs: sync SFIA Studio functional architecture post-merge state

```

---

## 7. Draft PR #212

| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/212 |
| État | OPEN |
| Draft | **true** |
| Base | `main` |
| Head | `project/sfia-studio-functional-architecture` |
| Head OID | `33d61e39511f7302aa8073bef30ebe939f8eb9a2` |
| Fichiers | 5 (README, `07`, `11`, `12`, `13`) |
| +/− | +104 / −92 |
| Checks | aucun check reporté sur la branche |
| Ready-for-review | **NON** |
| Merge | **NON** |

---

## 8. Diff complet (commit sync)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 69cbb71..db4431b 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -7,12 +7,12 @@
 | **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
 | **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `functional-architecture-validated-pr-open` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
+| **Statut** | `functional-architecture-integrated-post-merge-review` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
 | **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` — cadrage + conception ; architecture **versionnée** (draft PR #211 — non sur `main`) |
+| **Source de vérité** | Git `main` @ `84e48636bb78808774b51f67329167f8e9749a6b` — cadrage + conception + architecture **intégrés** |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** sur le fond — commit `2153258…` — draft PR #211 — **non intégrée** sur `main` — **pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync en revue — **pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
 
 ---
 
@@ -33,17 +33,19 @@
 | Intégration Git conception | **Réalisée** — PR #209 / merge `fdade59…` / commit `99eaeaa…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 ; sans réécriture rétroactive du GO draft |
-| Cycle architecture fonctionnelle | **VALIDÉE** sur le fond — `functional-architecture-validated-pr-open` |
+| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-integrated-post-merge-review` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
 | AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
-| Versionnement architecture | Commit `2153258…` ; branche **poussée** ; draft PR #211 |
-| Intégration architecture sur `main` | **Non** — merge **non autorisé** |
+| Versionnement architecture | Commit `2153258…` / head `72cab80…` |
+| Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
+| Trace merge #211 | **Fait Git** — aucun GO formel ChatGPT retrouvé ; pas de réinterprétation rétroactive ; pas de D-VAL auto ; acceptation/régularisation **ouverte** |
+| Clôture formelle cycle architecture | **Non automatique** |
 | Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
-| Branches | `functional-design` / `pre-framing` **conservées** ; architecture **poussée** (PR #211 draft) |
+| Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
 
-> Le merge #207 est un fait Git. D-VAL-11 clôture le cadrage. Le merge #209/#210 intègre la conception. L’architecture est **versionnée** (commit `2153258…`, draft PR #211) — **non intégrée** sur `main`.
+> Merges #207 / #209/#210 : historiques. Merge #211 : architecture **intégrée** (`84e4863…`) — **fait Git**. Aucune réinterprétation des GO pré-merge. Aucune D-VAL-12. Clôture formelle **ouverte**.
 
 ### Trace factuelle — cycle 2 (conception fonctionnelle)
 
@@ -120,7 +122,7 @@ Pré-cadrage                         ← terminé historiquement
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
   → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **VALIDÉE** — commit `2153258…` — draft PR #211 — **non intégrée** sur `main` — AF-CAND-11B **ouverte**
+  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync **en revue** — AF-CAND-11B **ouverte**
   → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
   → architecture technique candidate
   → définition du POC
@@ -142,10 +144,11 @@ Pré-cadrage                         ← terminé historiquement
 - Merge #207 = fait Git ; régularisation cadrage = **D-VAL-11**.
 - Merge #209 / #210 = faits Git ; conception intégrée ; sync documentaire clôturable (post-#210).
 - Aucune stack / architecture **technique** validée.
-- Architecture **fonctionnelle VALIDÉE** sur le fond — commit `2153258…` — branche **poussée** — draft PR #211 — **non intégrée** sur `main`.
+- Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`).
 - **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
 - **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
 - Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
+- Clôture formelle architecture **non automatique**.
 
 ---
 
@@ -175,18 +178,18 @@ Pré-cadrage                         ← terminé historiquement
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **VALIDÉE** sur le fond — `functional-architecture-validated-pr-open` |
+| Statut | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-integrated-post-merge-review` |
 | Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
-| Livrables | `11` / `12` / `13` |
+| Livrables | `11` / `12` / `13` — sur `main` |
 | Profil | Critical |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
 | AF-CAND-11B | **NON DÉCIDÉE** |
 | D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
-| Branche | `project/sfia-studio-functional-architecture` — **poussée** — draft PR #211 |
-| Commit | `215325858ed493564f6083ec5adc1618008593f6` |
-| Intégration | **Non** sur `main` — merge **non autorisé** |
-| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; ready-for-review ; merge |
+| Branche | `project/sfia-studio-functional-architecture` — **conservée** |
+| Commit / merge | head `72cab80…` ; merge `84e48636bb78808774b51f67329167f8e9749a6b` |
+| Intégration | **Oui** sur `main` — PR #211 **MERGED** (fait Git) |
+| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; clôture auto ; AF-CAND-11B |
 
 ### 4.3 UX/UI
 
@@ -222,7 +225,9 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **FAIT** — architecture fonctionnelle **lancée** |
 | D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209 / #210) |
 | D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
-| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **VALIDÉE** sur le fond — AF-Option C + AF-CAND-01…10, 11A, 12 ; 11B ouverte ; draft PR #211 |
+| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **VALIDÉE** sur le fond — AF-Option C + AF-CAND-01…10, 11A, 12 ; 11B ouverte |
+| D-NEXT-2i | Intégration PR #211 / sync post-merge | Observation Git | **Fait Git** (`84e4863…`) — acceptation/régularisation documentaire **ouverte** |
+| D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — non automatique |
 | D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
@@ -266,13 +271,13 @@ Pré-cadrage                         ← terminé historiquement
 
 **Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).
 
-**Architecture fonctionnelle Critical** : **VALIDÉE** sur le fond — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; versionnée (commit `2153258…`, draft PR #211) — **non intégrée** sur `main`.
+**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`).
 
 **AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.
 
 **AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.
 
-Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Merge PR #211 **non autorisé**.
+Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Clôture formelle architecture **non automatique**.
 
 ---
 
@@ -288,18 +293,18 @@ Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** sur le fond — draft PR #211. AF-CAND-11B : **non décidée**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). AF-CAND-11B : **non décidée**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Autorisez-vous le ready-for-review / merge de la draft PR #211 (GO distincts) ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
-3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
-4. Quel sort pour `project/sfia-studio-functional-design` et la branche architecture (après merge éventuel) ?
-5. Quel niveau d’architecture minimale avant POC ?
-6. Quelles priorités NFR avant le POC ?
+1. Acceptez-vous / régularisez-vous documentairement le merge #211 (fait Git) ?
+2. Autorisez-vous commit / push / PR de synchronisation post-merge ?
+3. Clôturez-vous formellement le cycle architecture ?
+4. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
+5. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
+6. Quel niveau d’architecture minimale avant POC ?
 
 ---
 
@@ -316,7 +321,7 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Clôture formelle cadrage | **FAIT** (D-VAL-11 — 2026-07-18) |
 | Cycle conception fonctionnelle | **CLÔTURÉ** — intégré PR #209 / #210 |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Architecture fonctionnelle | **VALIDÉE** — draft PR #211 — **non intégrée** sur `main` |
+| Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | AF-Option C | **VALIDÉE** |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
 | AF-CAND-11B | **NON DÉCIDÉE** |
@@ -332,16 +337,16 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Intégration cadrage `main` | **Oui** (PR #207 / #208) |
 | Cadrage documentaire | **Clôturé** |
 | D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
-| Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — base `e9d8193…` |
+| Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** |
 | FD-CAND-01…08 | **VALIDÉES** |
 | Cycle 2 | **CLÔTURÉ** |
-| Architecture fonctionnelle | **VALIDÉE** — commit `2153258…` — draft PR #211 — **non intégrée** |
+| Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-11B | **NON DÉCIDÉE** |
 | Ready for POC / MVP / tech | **Non** |
-| Ready for ChatGPT PR review | **Oui** (correctif statut Git) |
+| Ready for Morris post-merge review | **Oui** (sync locale) |
 
-**Verdict :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE PR CORRECTED — READY FOR CHATGPT PR REVIEW`
+**Verdict :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
 
 ---
 
@@ -355,8 +360,8 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
 | [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
 | [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |
-| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** — PR #211 |
+| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
 
-*SFIA Studio — architecture VALIDÉE — draft PR #211 — non intégrée sur main — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211 / 84e4863…) — post-merge sync en revue — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
diff --git a/projects/sfia-studio/11-functional-architecture.md b/projects/sfia-studio/11-functional-architecture.md
index 0ba75f2..1bbf7b8 100644
--- a/projects/sfia-studio/11-functional-architecture.md
+++ b/projects/sfia-studio/11-functional-architecture.md
@@ -8,17 +8,17 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
 | **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
-| **Base Git** | `origin/main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` |
-| **Branche travail** | `project/sfia-studio-functional-architecture` (**poussée** — draft PR #211) |
-| **Commit** | `215325858ed493564f6083ec5adc1618008593f6` |
-| **Statut** | `functional-architecture-validated-pr-open` |
+| **Base Git** | `origin/main` @ `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** ; intégrée à `main`) |
+| **Commit / merge** | head `72cab80…` ; merge `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **Statut** | `functional-architecture-integrated-post-merge-review` |
 | **Autorité** | Morris (L0) |
 | **Entrée** | Conception validée `08`–`10` (inchangée) |
-| **Architecture** | **VALIDÉE** sur le fond — **AF-Option C** VALIDÉE — **non intégrée** sur `main` |
+| **Architecture** | **VALIDÉE** et **INTÉGRÉE** sur `main` — **AF-Option C** VALIDÉE |
 | **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) draft — merge **non autorisé** |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
 
-> Architecture fonctionnelle **VALIDÉE** sur le fond — versionnée — draft PR #211 — **non intégrée** sur `main`. **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode.
+> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non automatique**.
 
 ---
 
@@ -355,7 +355,7 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 **Réserves :** FB ≠ composants ; Runtime candidat ; pas de stack ; pas de POC/MVP ; cycle suivant non sélectionné (AF-CAND-11B).
 **Risques :** confusion Studio/orchestrateur ; seconde vérité ; GO implicite ; confusion **AF-Option C** / Option C méthode.
 **Décidé :** **AF-Option C** VALIDÉE ; AF-CAND-01…10, 11A, 12 VALIDÉES.
-**Questions restantes :** AF-CAND-11B (sélection prochain cycle) ; GO ready-for-review / merge PR #211 ; sort des branches.
+**Questions restantes :** AF-CAND-11B (sélection prochain cycle) ; acceptation/régularisation merge #211 ; GO sync post-merge ; clôture formelle ; sort des branches.
 
 ---
 
@@ -370,4 +370,4 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 
 ---
 
-*SFIA Studio — architecture fonctionnelle VALIDÉE — draft PR #211 — non intégrée sur main — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
+*SFIA Studio — architecture fonctionnelle VALIDÉE et INTÉGRÉE (PR #211 / 84e4863…) — post-merge sync en revue — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
diff --git a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
index a79b3c2..9b0ce13 100644
--- a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
+++ b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
@@ -3,10 +3,10 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `12-functional-architecture-flows-and-boundaries.md` |
-| **Statut** | `functional-architecture-validated-pr-open` |
+| **Statut** | `functional-architecture-integrated-post-merge-review` |
 | **Cycle** | Architecture fonctionnelle — Critical |
-| **Base** | `e9d819368a6224259e8ba0e942d53effb81e191a` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) draft — **non intégrée** sur `main` — merge **non autorisé** |
+| **Base** | `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** — merge `84e4863…` |
 | **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |
 
 > Flux **AF-*** candidats. Ne remplacent pas F1–F12 validés ; ils les **structurent** architecturalement.
@@ -389,4 +389,4 @@ Voir document 11 §§9–10 et BR-001…025. Gates séparés : commit, push, PR,
 
 ---
 
-*Flux architecture VALIDÉS avec l’architecture — draft PR #211 — non intégrés sur main — Morris décide AF-CAND-11B / merge.*
+*Flux architecture VALIDÉS et INTÉGRÉS (PR #211 / 84e4863…) — post-merge sync en revue — Morris décide AF-CAND-11B / clôture.*
diff --git a/projects/sfia-studio/13-functional-architecture-decision-pack.md b/projects/sfia-studio/13-functional-architecture-decision-pack.md
index 8018d6d..5069f58 100644
--- a/projects/sfia-studio/13-functional-architecture-decision-pack.md
+++ b/projects/sfia-studio/13-functional-architecture-decision-pack.md
@@ -3,12 +3,13 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `13-functional-architecture-decision-pack.md` |
-| **Statut** | `functional-architecture-validated-pr-open` |
+| **Statut** | `functional-architecture-integrated-post-merge-review` |
 | **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
 | **Profil** | Critical |
-| **Base** | `e9d819368a6224259e8ba0e942d53effb81e191a` |
-| **Commit** | `215325858ed493564f6083ec5adc1618008593f6` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) draft — merge **non autorisé** |
+| **Base / main** | `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **Commit head PR** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
+| **Merge** | `84e48636bb78808774b51f67329167f8e9749a6b` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
 | **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |
 
 > **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.
@@ -251,9 +252,11 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 **Risques :** AF-Option B seconde vérité (écartée) ; FB pris pour microservices ; Runtime contractuel implicite ; confusion AF-Option C / Option C méthode ; promotion implicite d’AF-CAND-11B.
 **Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.
 **Questions Morris restantes :**
-1. Autorisez-vous le ready-for-review / merge de la draft PR #211 (GO distincts) ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
-3. Quel sort pour les branches (`pre-framing` / `functional-design` / architecture) ?
+1. Acceptez-vous / régularisez-vous documentairement le merge #211 (fait Git) ?
+2. Autorisez-vous commit / push / PR de synchronisation post-merge ?
+3. Clôturez-vous formellement le cycle architecture ?
+4. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
+5. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
 
 ---
 
@@ -264,9 +267,9 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 | Validation AF-Option C | **FAIT** |
 | Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
 | AF-CAND-11B sélection cycle | **OUVERT** |
-| Versionnement architecture | **Réalisé** — commit `2153258…` ; draft PR #211 |
-| Ready-for-review / merge PR #211 | **Non autorisé** |
-| Clôture formelle cycle architecture (post-merge) | **Non** — non intégrée sur `main` |
+| Versionnement architecture | **FAIT** |
+| Intégration PR #211 sur `main` | **FAIT Git** (`84e4863…`) — acceptation/régularisation documentaire **ouverte** |
+| Clôture formelle cycle architecture | **Non** — non automatique |
 | Lancement UX/UI / tech / POC / MVP | **Non** |
 
 ---
@@ -293,12 +296,12 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 
 ## 12. Verdict
 
-**Architecture fonctionnelle VALIDÉE** sur le fond — statut `functional-architecture-validated-pr-open` — commit `2153258…` — draft PR #211 — **non intégrée** sur `main`.
+**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-integrated-post-merge-review` — PR #211 **MERGED** (`84e4863…`).
 
 Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12.
 Non décidé : AF-CAND-11B.
-Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Merge **non autorisé**.
+Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Clôture formelle **non automatique**. Merge tracé comme **fait Git** (sans D-VAL auto).
 
 ---
 
-*Pack AF validé — Critical — draft PR #211 — Morris décide AF-CAND-11B et GO merge.*
+*Pack AF validé et intégré — Critical — post-merge sync en revue — Morris décide AF-CAND-11B / clôture / sync.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index eadd995..7b63115 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,27 +4,29 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-architecture-validated-pr-open` — Architecture fonctionnelle VALIDÉE sur le fond — commitée et poussée — draft PR #211 ouverte — non intégrée sur `main` ; conception **intégrée** sur `main` |
+| **Statut** | `functional-architecture-integrated-post-merge-review` — Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` — synchronisation post-merge en revue ; conception **intégrée** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — correctif documentaire PR readiness (DOC, Critical) |
-| **Typologie cycle** | DOC — EVOL produit / PR readiness |
-| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE** sur le fond ; versionnée ; draft PR #211 ; **non intégrée** sur `main`) |
+| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Critical) |
+| **Typologie cycle** | DOC — post-merge / synchronisation documentaire |
+| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE** + **INTÉGRÉE** via PR #211) ; post-merge **en cours** ; clôture formelle **non automatique** |
 | **Profil SFIA** | Critical |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**poussée** — draft PR #211 ouverte) |
-| **Commit architecture** | `215325858ed493564f6083ec5adc1618008593f6` |
-| **Draft PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — OPEN draft — merge **non autorisé** |
+| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** ; poussée ; intégrée à `main`) |
+| **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
+| **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
+| **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
+| **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
 | **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` |
+| **Base canonique** | `origin/main` @ `84e48636bb78808774b51f67329167f8e9749a6b` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
 | **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
 | **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
 | **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
-| **Architecture fonctionnelle** | **VALIDÉE** sur le fond — versionnée — draft PR #211 — **non intégrée** sur `main` |
+| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) |
 | **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |
 
 ---
@@ -37,26 +39,27 @@
 | PR conception | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | Commit conception | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
 | Merge conception | `fdade59a23a6dff4c264c73975358f77bc90f9b0` |
-| Documents Studio sur `main` | **Onze** (`01`–`10` + README) — baseline conception |
-| Documents architecture (locaux) | **Trois** (`11`–`13`) — **candidates** ; non sur `main` |
+| Documents Studio sur `main` | **Quatorze** (`01`–`13` + README) — cadrage + conception + architecture |
 | Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
 | Cadrage documentaire | **Clôturé** (D-VAL-11) |
 | Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Cycle architecture fonctionnelle | **VALIDÉE** sur le fond — statut `functional-architecture-validated-pr-open` |
+| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-integrated-post-merge-review` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
 | AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
-| Versionnement architecture | Commit `2153258…` ; branche **poussée** ; draft PR #211 |
-| Intégration architecture sur `main` | **Non réalisée** — merge **non autorisé** |
+| Versionnement architecture | Commit `2153258…` / head `72cab80…` ; branche poussée |
+| Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
+| Trace merge #211 | **Fait Git vérifié** — aucun GO formel ChatGPT retrouvé ; aucune réinterprétation rétroactive des GO pré-merge ; **aucune** D-VAL automatique ; acceptation/régularisation documentaire **ouverte** |
 | Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
+| Clôture formelle cycle architecture | **Non automatique** — soumise à décision Morris post-revue |
 | Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
-| Branches | `functional-design`, `pre-framing` **conservées** ; architecture **poussée** (PR #211 draft) |
+| Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
 
-> PR #207 : fait Git ; D-VAL-10 n’autorisait pas ce merge ; D-VAL-11 régularise le cadrage. PR #209 : conception validée intégrée ; écart d’autorisation de merge **clôturé** par acceptation Morris (2026-07-18) — **sans** D-VAL-12 et **sans** réécriture rétroactive du GO draft.
+> PR #207 / #209 : historiques cadrage/conception. PR #211 : architecture **intégrée** sur `main` (merge `84e4863…`) — **fait Git**. Aucune autorisation antérieure de correctif / PR readiness / ready-for-review n’est réinterprétée comme GO merge. Aucune D-VAL-12. Acceptation/régularisation documentaire et clôture formelle = décisions Morris **distinctes** (non prises ici).
 
 ---
 
@@ -128,12 +131,12 @@ Pré-cadrage                    ← terminé historiquement
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
   → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **VALIDÉE** sur le fond — commit `2153258…` — draft PR #211 — **non intégrée** sur `main` — AF-CAND-11B **ouverte**
+  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync **en revue** — AF-CAND-11B **ouverte**
   → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
   → MVP → delivery → industrialisation plateforme
 ```
 
-Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** sur le fond (AF-Option C ; AF-CAND-01…10, 11A, 12) — versionnée — draft PR #211 — **non intégrée** sur `main`. Cycle suivant **non sélectionné**. POC / MVP non lancés.
+Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (AF-Option C ; AF-CAND-01…10, 11A, 12). Cycle suivant **non sélectionné**. POC / MVP non lancés. Clôture formelle architecture **non automatique**.
 
 ---
 
@@ -169,7 +172,7 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 
 > Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 / sync #210 (`e9d8193…`). Baseline `08`–`10` **inchangée** pendant le cycle architecture. ≠ stack / UX visuelle / backlog / POC / MVP / code.
 
-### Architecture fonctionnelle — VALIDÉE (draft PR #211)
+### Architecture fonctionnelle — VALIDÉE et INTÉGRÉE (PR #211)
 
 | Document | Rôle |
 |----------|------|
@@ -177,7 +180,7 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |
 
-> Statut `functional-architecture-validated-pr-open`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. Branche **poussée** — commit `2153258…` — draft PR #211 ouverte — **non intégrée** sur `main` — merge **non autorisé**.
+> Statut `functional-architecture-integrated-post-merge-review`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211 **MERGED** — merge `84e4863…` — architecture **sur `main`**. Clôture formelle **non automatique**.
 
 ---
 
@@ -271,25 +274,26 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Décision | Statut |
 |----------|--------|
 | AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
-| Ready-for-review PR #211 | **Non** — GO Morris distinct requis |
-| Merge PR #211 / intégration sur `main` | **Non autorisé** |
-| Clôture formelle cycle architecture (post-merge) | **Non** — intégration non réalisée |
+| Acceptation / régularisation documentaire du merge #211 | **Ouverte** — fait Git tracé ; pas de D-VAL auto |
+| Commit / push / PR de synchronisation post-merge | **Non autorisés** dans ce cycle |
+| Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches | Conservées ; décisions distinctes |
 | Contenu POC / définition MVP | Non pris |
 | Stack / architecture technique | Non pris |
 
-> Conception : commit/push/PR/merge **réalisés** (PR #209 / #210). Architecture : commit `2153258…` ; branche **poussée** ; draft PR #211 — **non intégrée** sur `main`.
+> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211 / `84e4863…`) — **fait Git**. Sync merge ChatGPT formel non retrouvé ; aucune réinterprétation rétroactive ; aucune D-VAL-12.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT du handoff de **correctif PR #211**.
-2. GO Morris distinct pour ready-for-review / merge de la PR #211.
-3. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
-4. Sort des branches (décisions distinctes — suppression interdite ici).
+1. Revue ChatGPT du handoff **post-merge** architecture.
+2. GO Morris : acceptation/régularisation documentaire du merge #211 (si requis) ; commit/push/PR de sync.
+3. Clôture formelle du cycle architecture (**non automatique**).
+4. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
+5. Sort des branches (décisions distinctes — suppression interdite ici).
 
-**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE PR CORRECTED — READY FOR CHATGPT PR REVIEW`
+**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
 
 ---
 
@@ -300,13 +304,13 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Méthode | SFIA v2.6 sur `main` — **Option C méthode** |
 | Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
 | Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
-| Conception fonctionnelle validée | **`08`–`10` + navigation** sur **`main`** (`e9d8193…`) — baseline **inchangée** |
-| Architecture fonctionnelle validée | **`11`–`13`** — commit `2153258…` — draft PR #211 — **VALIDÉE** — **non intégrée** sur `main` |
+| Conception fonctionnelle validée | **`08`–`10`** sur **`main`** — baseline **inchangée** |
+| Architecture fonctionnelle validée + intégrée | **`11`–`13`** sur **`main`** (`84e4863…` / PR #211) |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` est la source de vérité du **cadrage** et de la **conception**. L’architecture est **versionnée** et proposée via draft PR #211 — **non encore** source de vérité sur `main`.
+> `main` @ `84e4863…` est la source de vérité du **cadrage**, de la **conception** et de l’**architecture fonctionnelle** intégrée. Synchronisation documentaire post-merge **locale** jusqu’à GO versionnement.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE — commitée/poussée — draft PR #211 — non intégrée sur main — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211 / 84e4863…) — post-merge sync en revue — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*

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

Hors périmètre intact (non stagé / non commité) : Campus360, `.sfia`, `.tmp-sfia-review`, `sfia-review-handoff/`.

---

## 10. Risques

1. Confusion entre merge historique #211 (fait Git) et merge de la draft #212 (non autorisé)
2. Promotion implicite d’AF-CAND-11B ou clôture
3. Réinterprétation rétroactive d’un GO antérieur comme autorisation de merge #211
4. Staging accidentel de Campus360 / `.sfia` (évité)

---

## 11. Réserves

- Draft PR uniquement — pas de ready-for-review / merge
- Clôture formelle architecture **ouverte**
- Acceptation/régularisation documentaire du merge #211 **ouverte**
- AF-CAND-11B **NON DÉCIDÉE**

---

## 12. Décisions Morris restantes

1. Revue ChatGPT de la draft PR #212
2. Ready-for-review / merge #212 (GO distincts)
3. Acceptation/régularisation documentaire du merge #211
4. Clôture formelle du cycle architecture
5. AF-CAND-11B — sélection prochain cycle
6. Sort des branches

---

## 13. Verdict

**SFIA STUDIO POST-MERGE SYNC COMMITTED, PUSHED AND DRAFT PR OPENED — READY FOR CHATGPT PR REVIEW**

Confirmations :

- Commit/push/draft PR conformes
- Cinq fichiers uniquement
- Synchronisation post-merge
- Trois SHA correctement qualifiés
- AF-CAND-11B **NON DÉCIDÉE**
- D-VAL-12 **absente**
- Aucune clôture
- Aucune régularisation automatique
- Aucune réinterprétation rétroactive
- Aucun ready-for-review / merge de #212

---

## 14. Instruction ChatGPT

Lire depuis Git :

- repository : `mcleland147/sfia-workspace`
- ref : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- base attendue : `84e48636bb78808774b51f67329167f8e9749a6b`

Analyser :

- conformité commit/push/draft PR
- cinq fichiers
- synchronisation post-merge
- trois SHA
- AF-CAND-11B non décidée
- D-VAL-12 absente
- aucune clôture
- aucune régularisation automatique
- aucune réinterprétation rétroactive
- readiness pour revue PR
