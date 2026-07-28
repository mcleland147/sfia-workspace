# 05 — Cohérence croisée F03 × F11 × F13

| Champ | Valeur |
|-------|--------|
| **Combinaison** | **F03.3 × F11.2 × F13.4** |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **Date** | 2026-07-28 19:25:19 CEST (+0200) |

## Effets combinés (normatifs)

- F03.3 impose F11 et F13 **avant** préparation technique (satisfait par décisions F11/F13) ;
- F11.2 fournit la surface opérationnelle minimale (**exigence** future, non implémentée) ;
- F13.4 conserve la traçabilité tout en bornant l’exposition runtime ;
- D04 OPS1 reste **obligatoire** avant retrait ;
- **Git** reste source de vérité historique ;
- **aucune** UI dédiée n’est exigée maintenant ;
- **aucun** changement technique n’est autorisé par ces décisions.

## Matrice (historique d’arbitrage)

| F03 | F11 | F13 | Qualif. post-décision |
|-----|-----|-----|------------------------|
| .3 | .2 | .4 | **ADOPTÉE** |
| .1 | .2 | .4 | non retenue (trop mince vs F03.3) |
| .3 | .3 | .2 | non retenue (UI/dette) |
| .2 | .3 | .2 | non retenue (trop lourde) |
| .2 | .1 | .3 | incohérente — non retenue |
| .1 | .1 | .3 | trop faible — non retenue |

## Séquence future (documentaire — non exécutée)

1. Intégrer ce pack sur `main` (gate review/integrate — `NOT CONSUMED`).
2. Plan W1-B détaillé aligné F03.3/F11.2/F13.4 — doc only.
3. Design isolation OPS1 / contrats API lecture — sous gates distincts.
4. Prep technique **uniquement** si set F03.3 satisfait + GO Morris + B5.

**Anti-claim :** combinaison adoptée ≠ implémentation · ≠ T-A7 OPEN · ≠ delivery/cutover.
