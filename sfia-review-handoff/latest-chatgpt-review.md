# SFIA Review Pack FULL — Ensemble 07 · Cycle 8 Figma → Runtime UX

> Mono-cycle. **Aucun commit/push projet.** Publication L3 bornée uniquement.

## 1. GO Morris

| | |
|---|---|
| Date | 2026-11-21 |
| GO | Convergence UX Figma → Runtime (13 états) + CKI éditorial |
| Type | EVOL / UX / UI / CORRECTIVE · Cycle 8 Delivery |
| Interdit | push projet · PR · merge · RECETTE · Nora LIVE · release · reset destructif |
| Versioning | NO RELEASE · Gate C OPEN |

## 2. Pré-check Git

| Contrôle | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD gel antérieur | `c500df9ce58575783bcb842bf83658e1837990a3` |
| Tree gel | `3794e3443906e144460e3f00ba1e82bb3504fdd3` |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` |
| État | **arbre local modifié non commité** (correctifs Cycle 8) |
| RECETTE `:3200` | HTTP 307/200 · BUILD `Ispeg3__Q3_t1Qf1JJWDZ` **inchangée** |

## 3. Sources lues

- `ux-ui/methodologie-contrat-figma-cursor.md` (main) + protocole fidélité + transposition
- Figma `itgvCulInEnFY6DvgIegvP` — session `f01f719c-a50d-4297-899d-d17098f11508`
- `get_design_context` : 09.05 (`983:219`), SAS06 (`1022:112` / popup `1022:164`)
- `get_metadata` : 09.11 (`1034:505`)
- Contrat historique `.tmp-sfia-review/ensemble07-figma-visual-contracts.json`
- CKI `cki/01-cadrage.md`, `02-conception-fonctionnelle.md`, manifest 0.2.0
- As-built E07 + delivery-history + PV recette 20261121

## 4. Inventaire fichiers (produit — non commité)

### Créés

- `projects/sfia-studio-next/web/src/domains/pilotage/cki-editorial.ts` — parse éditorial corpus vérifié
- `projects/sfia-studio-next/web/tests/unit/cki-editorial.test.ts`
- `projects/sfia-studio-next/web/scripts/e07-cycle8-measure.mts`

### Modifiés

- `web/src/domains/pilotage/types.ts` — `cki.editorial`
- `web/src/domains/pilotage/service.ts` — charge editorial si RESOLVED
- `web/src/components/figma/TrajectoryBoard.tsx` — CkiMethodeView + 09.11 geometry
- `web/src/components/figma/ProjectOverview.tsx` — séparateurs, cartes, h 222
- `web/src/components/figma/SasCreateProgressPopup.tsx` — SAS06 702×726
- `web/tests/e2e/ensemble07-browser-continuity.spec.ts` — assert titre éditorial
- `construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md`
- `construction/delivery-history.md` — DELIV Cycle 8

### Preuves (hors commit produit)

- `.tmp-sfia-review/ensemble07-dip-cycle8/00-inventory-13-frames.json`
- `.tmp-sfia-review/ensemble07-dip-cycle8/f2-measures.json`
- `.tmp-sfia-review/ensemble07-dip-cycle8/13x13-conformity-matrix.md`
- `.tmp-sfia-review/ensemble07-dip-cycle8/runtime/09.{05,06,11}-runtime.png`

## 5. Contenu intégral — création textuelle clé

### `cki-editorial.ts` (résumé fonctionnel)

Chaîne : `loadVerifiedCkiText(ckiId, digest)` → parse H1 titre, `Résultat recherché`, `Pertinent`, 3 angles « Manières de raisonner » → `CkiEditorialProjection`. Exposé uniquement si `availability === "RESOLVED"`. Pas de second catalogue CKI.

### Diffs structurants (extrait)

**Avant (CkiMethodeView)** : affichait `cycle.cki.ckiId`, `cycle.objective`, jargon `availability`.

**Après** : `editorial.title`, `resultSought`, `relevance`, `angles[]` ; méthode distincte ; absence méthode = état valide.

## 6. CKI — cause racine et correction

| Étape | Constat |
|---|---|
| Source Git | Fiches validées OK |
| Manifest / digest | Pin RESOLVED OK |
| `loadVerifiedCkiText` | Disponible, déjà utilisé par Nora |
| Projection | **manquait** rubriques éditoriales |
| UI | **consommait mauvais champs** (id + objectif cycle) |

**Correction propriétaire** : projection lecture (`cki-editorial` + `service`) + UI 09.05. Preuve runtime : titre `Conception fonctionnelle et cohérence métier`, `data-cki-id=02-conception-fonctionnelle`.

## 7. Matrice 13/13

Voir `.tmp-sfia-review/ensemble07-dip-cycle8/13x13-conformity-matrix.md`.

| Synthèse | |
|---|---|
| L0 inventaire | 13/13 |
| F2 mesuré post-fix | 3/13 (09.05, 09.06, 09.11) |
| PASS* locaux w/h | 09.05, 09.11 (≤1 px) |
| PASS éditorial CKI | 09.05 |
| Strict 13/13 contractuel | **NON** |

## 8. Mesures F2 (extrait)

| Frame | Élément | Attendu | Observé | Δ | Verdict |
|---|---|---|---|---|---|
| 09.05 | cki-main | 872×586 | 871×586 | −1 w | PASS |
| 09.05 | method | 464×586 @1178 | 464×586 @1178 | 0 | PASS |
| 09.11 | panel | 1358×545 | 1357×545 | −1 w | PASS |
| 09.11 | step card | 404×155 | 404×155 | 0 | PASS |
| 09.06 | activity card | 438×278 | 438×278 | 0 | PASS |
| * | y absolus panneaux | Figma ~287 | ~166–196 | drift | FAIL (stack hero) |

## 9. Tests exécutés

| Suite | Résultat |
|---|---|
| tsc | PASS |
| unit `cki-editorial` + `ensemble07*` | **24 PASS** |
| F2 measure script DEV `:3100` | PASS (3 frames) |
| browser continuity full | NOT RUN ce cycle (assertion CKI mise à jour) |
| PG integration full | NOT RUN ce cycle |
| build Next | NOT RUN ce cycle |
| Nora LIVE | NOT RUN |

## 10. Réserves

1. **F2 13/13 incomplet** — 10 états sans mesure post-correctif → bloque READY.
2. **Drift Y absolu** — hero/header stack vs frames Figma ; w/h locaux OK.
3. **SAS06 assets** — SVG MCP 404 ; substituts CSS ; gate Morris assets.
4. **Angles Figma** — maquette utilise libellés courts curés ; runtime = titres techniques corpus (honnête, pas inventés).
5. **Arbre non figé** — correctifs locaux non commités (mandat : pas de commit projet).

## 11. Verdict

**`FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED`**

Ne pas utiliser `FIGMA TO RUNTIME ALIGNED — READY FOR MORRIS REVIEW` : la couverture F2 contractuelle 13/13 n'est pas établie.

## 12. Suite

1. Compléter mesures F2 + captures des 10 états restants sur DEV.
2. Arbitrer assets SAS06 (SVG natifs vs CSS).
3. Gate Morris pour commit candidat + mise à disposition RECETTE (RECETTE actuelle reste `Ispeg3__…`).
4. Revue ChatGPT sur ce pack L3.
