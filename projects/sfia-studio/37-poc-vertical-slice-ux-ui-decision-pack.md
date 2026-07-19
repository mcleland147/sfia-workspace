# SFIA Studio — Decision pack UX/UI vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `37-poc-vertical-slice-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI (correctif borné) |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — correctif UX/UI **validé Morris** ; merge PR = GO distinct |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Figma** | `lrjA1WEyRpL05vKR8k29LO` · page `51:2` |
| **Companions** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`36`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md) |

> Pack après correctif Morris. Contenu UX/UI **validé** pour versionnement.
> Merge, delivery, live et backlog = GO Morris distincts.

---

## 1. Synthèse du correctif

GO Morris : **UX/UI correctif borné** consommé.

| Correction | Fait |
|------------|------|
| Dix frames = **états**, pas routes | Documenté 35/36/37 + mapping 4 vues P0 |
| Abandonner explicite au gate | VS-UX-04 — 4 actions ; note `52:34` **supprimée** |
| Clôture slice-only | VS-UX-10 — portfolio multi-projet **retiré** |

Aucun code · aucune route · aucune modif P0 / app / harness · aucun live · aucun commit projet.

---

## 2. Observations

1. Les quatre vues P0 restent le modèle applicatif de référence.
2. Le storyboard Figma reste utile pour revue visuelle sans imposer 10 routes.
3. Abandonner / NO-GO / STOP / invalidation GO sont désormais distingués.
4. La clôture ne doit plus être lue comme une synthèse portefeuille.

---

## 3. Décisions Morris déjà appliquées

| ID | Décision | Statut |
|----|----------|--------|
| VS-CAND-01…13, 15 | Amont fonctionnel | **VALIDÉES** |
| VS-CAND-14 | Plafond GPT obligatoire, valeur À définir | **VALIDÉE AVEC RÉSERVE** |
| **VS-UX-CAND-02** (amendée) | Dix frames = **dix états** (pas dix routes) | **VALIDÉE / appliquée** |
| **VS-UX-CAND-10** (amendée) | Abandonner = **4e action explicite** au gate | **VALIDÉE / appliquée** |
| Correctif clôture | VS-UX-10 sans portfolio hors contexte | **VALIDÉE / appliquée** |
| Mapping 4 vues | Regroupement états → vues P0 | **VALIDÉE / appliquée** |

---

## 4. Décisions UX candidates restantes

| ID | Décision candidate | Statut |
|----|-------------------|--------|
| VS-UX-CAND-01 | Page Figma dédiée | Ouverte (page créée) |
| VS-UX-CAND-03 | Continuité Product premium | Ouverte |
| VS-UX-CAND-04…09, 11 | FinOps / STOP / candidat / variantes / a11y | Ouvertes |
| VS-UX-CAND-12 | Séquencement validation → backlog → delivery | Ouverte |
| VS-UX-CAND-13 | Validation finale visuelle post-correctif | **Attendue** |

---

## 5. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| États ≠ routes | Clarifie delivery | Mésinterprétation future | Doc à préserver |
| 4 actions gate | Gate complet | Densité UI | Polish optionnel |
| Clôture slice | Moins de bruit | Chrome topbar encore générique | Mineure |
| Note 52:34 | Supprimée | — | — |

---

## 6. Gates Morris suivants

| Gate | Objet |
|------|-------|
| **G-VS-UX-FINAL** | Validation finale visuelle post-correctif |
| G-VS-UX-DOC | Commit / push / PR / merge docs 35–37 (+32–34 si lot) |
| G-VS-UX-DEL | Delivery UI (états dans 4 routes P0 — **pas** 10 routes) |
| G-VS-LIVE | Live GPT/Cursor |
| G-VS-LIMIT | Valeur numérique plafond GPT |

---

## 7. Décisions Morris attendues

1. Validation finale du correctif (frames 04/10 + docs).
2. Autoriser ou non versionnement documentaire.
3. **Ne pas** interpréter comme GO delivery / live / 10 routes / merge.

---

## 8. Verdict candidat

`SFIA STUDIO VERTICAL SLICE UX/UI CORRECTED — MORRIS FINAL VALIDATION REQUIRED`

### Interdits

CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · FRAMES VALIDATED · TEN ROUTES APPROVED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN
