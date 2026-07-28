# 05 — R-M01 et C1–C4 (A52-D05)

| Champ | Valeur |
|-------|--------|
| **R-M01** | `OPEN` |
| **C1–C3** | `RECOMMENDED — NOT VALIDATED` |
| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
| **F04** | `DECIDED — UNCHANGED` |
| **Arbitrage** | A52-D05 |
| **Choix Morris** | `.2 + .4` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |

## 1. R-M01

- Problème : readiness ClaimEvaluator + closure Morris.
- Preuve technique delivery T-A6 : runtime mémoire / D3–D5 observés ; **fermeture réserve non effectuée**.
- Relation T-A6 COMPLETE : critère F04 — R-M01 doit être résolu / accepté / borné avant déclaration (A52-D05.4).
- Impact product complete : partiel (claims readiness).
- Après A52-D05 : **R-M01 reste OPEN** ; C1–C3 rattachées ; **pas** de VALIDATED automatique.

## 2. C1 — Evidence status jointure PASS

| Item | Valeur |
|------|--------|
| Recommandation actuelle | TRACK AS DEBT ; enforce technique D3 |
| Preuve | fail-closed status join documenté |
| Dette | NOT VALIDATED Morris |
| Rattachement | **R-M01** (A52-D05.2) |
| Statut | `RECOMMENDED — NOT VALIDATED` |
| Impact T-A6 COMPLETE | **oui** — résolution/acceptation/bornage requis (A52-D05.4) |
| Impact delivery/cutover | dette ; pas HARD framing |

## 3. C2 — Self-review Critical

| Item | Valeur |
|------|--------|
| Recommandation | dette runtime vs invariant modeled |
| Preuve | D-T-A6-05/06 |
| Dette | NOT VALIDATED |
| Rattachement | **R-M01** / plan de preuves (A52-D05.2) |
| Statut | `RECOMMENDED — NOT VALIDATED` |
| Impact T-A6 COMPLETE | oui (F04 + A52-D05.4) |
| Delivery/cutover | indirect |

## 4. C3 — Bornes taille/nombre

| Item | Valeur |
|------|--------|
| Recommandation | principles D-T-A6-09 ; enforcement non validé |
| Preuve | pack principles |
| Dette | bloque payload réel |
| Rattachement | **R-M01** / U-M02 / D-T-A6-09 (A52-D05.2) |
| Statut | `RECOMMENDED — NOT VALIDATED` |
| Impact T-A6 COMPLETE | oui |
| Delivery/cutover | payload réel |

## 5. C4 — Fusion B5 tracking

| Item | Valeur |
|------|--------|
| Recommandation historique | MERGE INTO B5 |
| Preuve | T-A6 DEL-C4 |
| Décision | A52-D01.3 + A52-D05.2 — tracking fusionné dans B5 |
| Statut | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
| Rattachement | **B5** |
| Non-effet | C4 n’est **pas** automatiquement VALIDATED ; B5 n’est **pas** CLOSED |

## 6. Options A52-D05 (historique)

| Option | Description |
|--------|-------------|
| **A52-D05.1** | Arbitrer R-M01 et chaque C séparément |
| **A52-D05.2** | Fusionner C1–C4 dans réserves principales lorsque pertinent (C4→B5 ; C1–C3 sous R-M01) |
| **A52-D05.3** | Borner R-M01 pour T-A6 mémoire et reporter C1–C4 |
| **A52-D05.4** | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
| **A52-D05.5** | Custom |
| **A52-D05.6** | Différer |

## 7. Décision Morris adoptée

`DECIDED — ADOPTED BY MORRIS` → combinaison **A52-D05.2 + A52-D05.4**

### Norme

- C4 est rattachée à B5 (tracking) ;
- C1–C3 sont rattachées à R-M01 ou à son plan de preuves ;
- avant toute **future** déclaration T-A6 COMPLETE, R-M01 et C1–C4 doivent être :
  - résolues ;
  - acceptées explicitement ;
  - ou bornées conformément à A4.1.

### Non-effets

- R-M01 reste `OPEN` ;
- C1–C4 ne deviennent **pas** automatiquement VALIDATED ;
- T-A6 COMPLETE reste `NOT DECLARED` ;
- F04 reste `DECIDED — UNCHANGED` ;
- aucune F consommée.

## 8. Anti-création de décisions inutiles

- Ne pas inventer F15+.
- Ne pas consommer F08 pour clôturer R-M01.
- Ne pas déclarer T-A6 COMPLETE.
- A52-D05 borne la future application de F04 — **sans** la consommer ni la modifier.
