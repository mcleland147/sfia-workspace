# 05 — R-M01 et C1–C4 (A52-D05)

| Champ | Valeur |
|-------|--------|
| **R-M01** | `OPEN` |
| **C1–C4** | `RECOMMENDED — NOT VALIDATED` |
| **F04** | `DECIDED — UNCHANGED` (A4.1) |
| **Arbitrage** | A52-D05 |

## 1. R-M01

- Problème : readiness ClaimEvaluator + closure Morris.
- Preuve technique delivery T-A6 : runtime mémoire / D3–D5 observés ; **fermeture réserve non effectuée**.
- Relation T-A6 COMPLETE : critère F04 — R-M01 doit être arbitré ou borné avant déclaration.
- Impact product complete : partiel (claims readiness).
- Nécessité dans A5.2 : **oui** pour préparer bornage ; **non** pour fermer.

## 2. C1 — Evidence status jointure PASS

| Item | Valeur |
|------|--------|
| Recommandation actuelle | TRACK AS DEBT ; enforce technique D3 |
| Preuve | fail-closed status join documenté |
| Dette | NOT VALIDATED Morris |
| Rattachement | R-M01 |
| Maintenant ? | borner pour T-A6 COMPLETE ; pas fermer ici |
| Impact T-A6 COMPLETE | **oui** (arbitrage requis) |
| Impact delivery/cutover | dette ; pas HARD framing |

## 3. C2 — Self-review Critical

| Item | Valeur |
|------|--------|
| Recommandation | dette runtime vs invariant modeled |
| Preuve | D-T-A6-05/06 |
| Dette | NOT VALIDATED |
| Rattachement | authority claims |
| Maintenant ? | borner / reporter avec critère |
| Impact T-A6 COMPLETE | oui (F04) |
| Delivery/cutover | indirect |

## 4. C3 — Bornes taille/nombre

| Item | Valeur |
|------|--------|
| Recommandation | principles D-T-A6-09 ; enforcement non validé |
| Preuve | pack principles |
| Dette | bloque payload réel |
| Rattachement | U-M02 / D-T-A6-09 |
| Maintenant ? | borner pour mémoire ; exiger avant payload réel |
| Impact T-A6 COMPLETE | oui |
| Delivery/cutover | payload réel |

## 5. C4 — Fusion B5 candidate

| Item | Valeur |
|------|--------|
| Recommandation historique | MERGE INTO B5 |
| Preuve | T-A6 DEL-C4 |
| Dette | fusion **non validée** |
| Rattachement | **B5** |
| Maintenant ? | **traiter via A52-D01** (éviter double décision) |
| Impact | via B5 |

## 6. Options A52-D05

| Option | Description |
|--------|-------------|
| **A52-D05.1** | Arbitrer R-M01 et chaque C séparément |
| **A52-D05.2** | Fusionner C1–C4 dans réserves principales lorsque pertinent (C4→B5 ; C1–C3 sous R-M01) |
| **A52-D05.3** | Borner R-M01 pour T-A6 mémoire et reporter C1–C4 |
| **A52-D05.4** | Exiger résolution avant déclaration T-A6 COMPLETE |
| **A52-D05.5** | Custom |
| **A52-D05.6** | Différer |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → combinaison **A52-D05.2 + A52-D05.4** :

- rattacher **C4 → B5** (A52-D01) ;
- traiter **C1–C3** comme dettes de **R-M01** ;
- exiger arbitrage/bornage **avant déclaration** T-A6 COMPLETE ;
- **ne pas** fermer ni valider ici.

## 7. Anti-création de décisions inutiles

- Ne pas inventer F15+.
- Ne pas consommer F08 pour clôturer R-M01.
- Ne pas déclarer T-A6 COMPLETE.
