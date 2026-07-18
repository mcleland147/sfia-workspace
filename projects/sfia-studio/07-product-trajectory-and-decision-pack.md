# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
| **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
| **Baseline** | SFIA v2.6 (**Option C méthode**) |
| **Statut** | `functional-architecture-integrated-post-merge-review` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** |
| **Destinataire** | Morris |
| **Source de vérité** | Git `main` @ `84e48636bb78808774b51f67329167f8e9749a6b` — cadrage + conception + architecture **intégrés** |

> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync en revue — **pas de D-VAL-12.** AF-Option C ≠ Option C méthode.

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
| Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-integrated-post-merge-review` |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
| D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
| Versionnement architecture | Commit `2153258…` / head `72cab80…` |
| Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
| Trace merge #211 | **Fait Git** — aucun GO formel ChatGPT retrouvé ; pas de réinterprétation rétroactive ; pas de D-VAL auto ; acceptation/régularisation **ouverte** |
| Clôture formelle cycle architecture | **Non automatique** |
| Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
| Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |

> Merges #207 / #209/#210 : historiques. Merge #211 : architecture **intégrée** (`84e4863…`) — **fait Git**. Aucune réinterprétation des GO pré-merge. Aucune D-VAL-12. Clôture formelle **ouverte**.

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
  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — post-merge sync **en revue** — AF-CAND-11B **ouverte**
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
- Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`).
- **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
- **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
- Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
- Clôture formelle architecture **non automatique**.

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
| Statut | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-integrated-post-merge-review` |
| Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
| Livrables | `11` / `12` / `13` — sur `main` |
| Profil | Critical |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **NON DÉCIDÉE** |
| D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
| Branche | `project/sfia-studio-functional-architecture` — **conservée** |
| Commit / merge | head `72cab80…` ; merge `84e48636bb78808774b51f67329167f8e9749a6b` |
| Intégration | **Oui** sur `main` — PR #211 **MERGED** (fait Git) |
| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; clôture auto ; AF-CAND-11B |

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
| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **VALIDÉE** sur le fond — AF-Option C + AF-CAND-01…10, 11A, 12 ; 11B ouverte |
| D-NEXT-2i | Intégration PR #211 / sync post-merge | Observation Git | **Fait Git** (`84e4863…`) — acceptation/régularisation documentaire **ouverte** |
| D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — non automatique |
| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
| D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; architecture fonctionnelle validée sur le fond ; suite **non sélectionnée** |
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

**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`).

**AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.

**AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.

Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Clôture formelle architecture **non automatique**.

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

Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). AF-CAND-11B : **non décidée**.

---

## 8. Questions Morris

1. Acceptez-vous / régularisez-vous documentairement le merge #211 (fait Git) ?
2. Autorisez-vous commit / push / PR de synchronisation post-merge ?
3. Clôturez-vous formellement le cycle architecture ?
4. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
5. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
6. Quel niveau d’architecture minimale avant POC ?

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
| Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
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
| Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** |
| FD-CAND-01…08 | **VALIDÉES** |
| Cycle 2 | **CLÔTURÉ** |
| Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-11B | **NON DÉCIDÉE** |
| Ready for POC / MVP / tech | **Non** |
| Ready for Morris post-merge review | **Oui** (sync locale) |

**Verdict :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`

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
| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |

*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (PR #211 / 84e4863…) — post-merge sync en revue — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
