# 05 — Cohérence croisée F03 × F11 × F13

| Champ | Valeur |
|-------|--------|
| **Nature** | matrice · **pas** une décision |
| **Reco combinaison** | `RECOMMENDED — NOT DECIDED` → **F03.3 × F11.2 × F13.4** |

## 1. Matrice (échantillon structurant)

| F03 | F11 | F13 | Cohérence | Risque | Dette | Préconditions + |
|-----|-----|-----|-----------|--------|-------|-----------------|
| .1 | .1 | .3 | **faible** | cutover aveugle · historique runtime perdu | op. haute | preuves manuelles lourdes |
| .1 | .2 | .1 | moyenne | confusion actif/historique | basse | deny-write tests |
| .1 | .2 | .4 | **bonne** | sous-spécif. P* | basse–moy | matrice P à jour |
| .3 | .2 | .4 | **forte** | discipline « prep » | moyenne | F11/F13 décidés · D04 design |
| .3 | .3 | .2 | forte | dette UI précoce | haute | a11y · audit UI |
| .3 | .3 | .4 | forte | sur-build UI | haute | jalon UI explicite |
| .2 | .3 | .2 | **lourde** | conflation cutover-complete | très haute | IAM/HARD quasi requis |
| .2 | .1 | .3 | **incohérente** | maximal F03 + aveugle F11 | — | — |
| .1 | .3 | .3 | **tendue** | UI sans runtime history | — | — |
| .3 | .4 | .4 | **bonne** | calendrier UI flou | basse | jalon cutover UI |

## 2. Combinaisons

| Type | Exemples |
|------|----------|
| **Cohérentes** | F03.3×F11.2×F13.4 · F03.3×F11.4×F13.4 · F03.1×F11.2×F13.1 |
| **Incompatibles / tendues** | F03.2×F11.1×F13.3 · F11.3 sans F13 capable de fournir données RO · F13.3 seul si D1/OPS1 actifs |
| **Trop lourdes** | F03.2×F11.3×F13.2 (surtout avec HARD OPEN) |

## 3. Combinaison recommandée (non décisionnelle)

**F03.3 × F11.2 × F13.4**

| Pourquoi | Lien W1 |
|----------|---------|
| Borné avant prep | W1-B · W1-D05 |
| Observabilité sans UI prématurée | évite dette F11.3 |
| Historique + OPS1 sans archive-only | W1-D04 · SC-12 |
| N’exige pas cutover-complete | T-A7 NOT OPEN |

## 4. Séquence documentaire future (candidate)

1. Morris décide F03 / F11 / F13 (bulletin).
2. Plan W1-B détaillé **doc** aligné sur les trois choix.
3. Design isolation OPS1 (D04) — encore non implémenté.
4. Seulement ensuite : gate prep technique (si F + B5 le permettent).

**Anti-claim :** combinaison recommandée ≠ options adoptées.
