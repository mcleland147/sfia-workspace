# 03 — Risques, réserves, guide de revue

| Champ | Valeur |
|-------|--------|
| **Pack** | PR readiness — pas une nouvelle baseline fonctionnelle |
| **Branche** | `pr/sfia-studio-v3-native-option-a-foundation` |
| **Base** | `main` (`56ddf32…`) |
| **Demande Morris** | PR consolidée avant delivery |
| **Merge** | **interdit** dans ce cycle |
| **Delivery T-A0** | **non lancé** |

## Risques

| Risque | Impact | Prob. | Mitigation |
|--------|--------|-------|------------|
| Volume documentaire | Revue longue | Haute | Guide focus §ci-dessous |
| Confusion validation ≠ implémentation | Fausse readiness | Moyenne | Anti-claims explicites |
| T-A0 lu comme autorisé | Delivery prématuré | Moyenne | « T-A0 NOT STARTED » |
| Schemas pris pour runtime | Adoption implicite | Moyenne | « non adoptés runtime » |
| Figma hors diff | Preuve visuelle manquante dans Git | Basse | refs fileKey/node IDs |
| OPS1/v3 coexistence mal comprise | Dette doctrinale | Moyenne | FA-OA-04 / AT-OA-11 |
| DB/IAM/RGPD ouverts | Décisions manquantes | Haute | réserves AT |
| Checks CI absents/docs-only | Faux négatif qualité | Basse | validations locales documentées |

## Réserves maintenues

DB non sélectionnée · IAM ouvert · volumétrie LPS · rétention Evidence/RGPD · schemas non adoptés runtime · pas READY FOR DELIVERY global · pas cutover v2.6 · UX tablet/a11y/library.

## Focus revue

1. Alignement doctrine v3 exclusive
2. Cohérence contrats FD→FA→UX→M→AT
3. Cohérence des statuts VALIDATED
4. Isolation OPS1
5. Readiness à **cadrer** T-A0 après merge — pas à démarrer ici
