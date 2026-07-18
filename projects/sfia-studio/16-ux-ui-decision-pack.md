# SFIA Studio — Decision pack UX/UI

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `16-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI (**CLÔTURÉ**) |
| **Statut** | `ux-ui-closed-implementation-reference` |
| **Horodatage consolidation** | 2026-07-19 00:44:00 CEST |
| **Décision Morris** | **Option B** — consolidation partielle |
| **Figma** | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO (`lrjA1WEyRpL05vKR8k29LO`) |
| **Architecture fonctionnelle** | **NON clôturée** formellement |
| **D-VAL-12 / D-VAL-13** | **Aucune** |

> Traçabilité des décisions UX/UI Morris. Distingue **validées**, **observations**, **réserves**, **recommandations** et **ouvertes**.

---

## 1. Décisions validées

| ID | Décision | Statut | Notes |
|----|----------|--------|-------|
| UX-DEC-01 | Sélection du cycle UX/UI (AF-CAND-11B) | **VALIDÉE** | Consomme AF-CAND-11A |
| UX-DEC-02 | Exécution du cycle UX/UI sur Figma | **VALIDÉE** | fileKey `lrjA1WEyRpL05vKR8k29LO` |
| UX-DEC-03 | Direction artistique Product premium | **VALIDÉE** | Référence d’implémentation **initiale** — non intangible |
| UX-DEC-04 | P0 limité à quatre frames | **VALIDÉE** | P0-00C…P0-03C |
| UX-DEC-05 | Validation des quatre frames + node IDs | **VALIDÉE** | `19:2`, `22:2`, `22:133`, `22:270` ; 1440×1024 |
| UX-DEC-06 | Suppression / hors P0 des frames et inventaires antérieurs (ex. 10 écrans) | **VALIDÉE** | Non baseline implémentation |
| UX-DEC-07 | Polish transversal et correction des chevauchements | **VALIDÉE** | Observé dans Figma |
| UX-DEC-08 | Option B — consolidation 14/15/16 | **VALIDÉE** | Pas de `14-ux-ui-design-contract.md` |
| UX-DEC-09 | Cycle UX/UI **clôturé** | **VALIDÉE** | |
| UX-DEC-10 | Figma autorisé comme référence d’implémentation initiale | **VALIDÉE** | |
| UX-DEC-11 | Nouveau cycle UX/UI possible après runtime | **VALIDÉE** (autorisation future) | |
| UX-DEC-12 | Architecture fonctionnelle non clôturée formellement | **CONFIRMÉE** | Décision distincte requise |
| UX-DEC-13 | Delivery = prochaine étape après sync documentaire | **AUTORISÉE** — **non exécutée** | |
| UX-DEC-14 | Commit / push / PR / merge interdits dans ce cycle local | **VALIDÉE** | Nouveau GO requis |

---

## 2. Observations (≠ décisions)

- Page Figma nommée `UX-B — P0` : cohérente avec un parcours guidé dans un shell gouverné.
- Les documents candidats pré-Figma (14/15/16 locaux antérieurs) proposaient dix écrans P0 et un Figma pending — **obsolètes** pour l’état validé.
- Sur `main` historique, AF-CAND-11B figurait NON DÉCIDÉE — état **historique** avant cette synchronisation.

---

## 3. Réserves

| Réserve | Contenu |
|---------|---------|
| R-UX-01 | Accessibilité non entièrement validée (cible WCAG 2.2 AA) |
| R-UX-02 | Responsive hors 1440 non validé |
| R-UX-03 | Micro-interactions / empty / error / loading à compléter |
| R-UX-04 | Tokens Figma précis à extraire en delivery |
| R-UX-05 | Conformité runtime non acquise — capture obligatoire |
| R-UX-06 | Les 4 frames ne couvrent pas tous les états produit futurs |

---

## 4. Recommandations (≠ décisions)

| Reco | Contenu | Statut |
|------|---------|--------|
| Reco-1 | En delivery, ancrer chaque écran aux node IDs §1 | Ouverte |
| Reco-2 | Comparer runtime ↔ Figma avant tout READY visuel | Ouverte |
| Reco-3 | Reporter Git Truth / audit dédiés à une itération UX post-runtime si besoin | Ouverte |

---

## 5. Décisions encore ouvertes

1. GO commit de la synchronisation documentaire (worktree).
2. GO push / PR / merge.
3. Lancement effectif du cycle **delivery / implémentation**.
4. Clôture formelle du cycle d’architecture fonctionnelle.
5. Architecture technique / stack / POC / MVP.
6. Contenu exact des itérations UX post-runtime.

---

## 6. Historique des options UX (REX)

| Option | Description | Sort |
|--------|-------------|------|
| UX-A | Cockpit dense gouvernance | Non retenue comme baseline seule |
| UX-B | Parcours guidé | **Direction Figma P0** (page UX-B) — référence visuelle |
| UX-H | Hybride | Recommandation documentaire pré-Figma — **non décision de clôture** ; shell+guidage présents dans Figma |

Les UX-CAND pré-Figma (inventaire S01–S10, Figma à produire, etc.) sont **historiques** et **non binding**.

---

## 7. Effets sur AF-CAND-11B

| Avant (historique Git) | Après (décision Morris) |
|------------------------|-------------------------|
| AF-CAND-11B NON DÉCIDÉE | **VALIDÉE** — UX/UI sélectionné, exécuté, clôturé |

Cette décision est **postérieure** aux packs architecture historiques et **ne** clôt **pas** l’architecture fonctionnelle.

---

## 8. Verdict de clôture UX/UI

**Cycle UX/UI : CLÔTURÉ**

Référence d’implémentation initiale : Figma `lrjA1WEyRpL05vKR8k29LO` — frames P0-00C…P0-03C.

Prochaine étape autorisée : **delivery / implémentation** (non lancée ici).

---

*Decision pack UX/UI — Option B — cycle clôturé — architecture ouverte — Morris décide versionnement.*
