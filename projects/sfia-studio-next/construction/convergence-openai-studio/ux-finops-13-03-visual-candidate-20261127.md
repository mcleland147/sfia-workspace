# Proposition visuelle exacte — FinOps 13.03 (G-FINOPS-UX)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Frame Figma | `1334:321` — **13.03 · Consommation et coûts — synthèse** |
| Parent canvas | `1332:2305` |
| Statut | **CANDIDATE — ATTENTE VALIDATION VISUELLE MORRIS** |
| Transposition | Interdite avant GO visuel |

## Emplacement du delta (orientation Morris validée)

Sous la rangée des **4 indicateurs** (`FinOps / Indicateur` ×4),  
**au-dessus** des blocs « Évolution des dépenses » / « Répartition par modèle ».

Un **seul bandeau secondaire** (pas de 4e KPI hero, pas de nouvel écran) :

```
┌──────────────────────────────────────────────────────────────────────┐
│ Rapprochement fournisseur                                            │
│ Studio (estimation)     Fournisseur (agrégé autorisé)     Période    │
│   12,40 USD               13,10 USD / Indisponible      2025-11-25  │
│ Comparabilité: COMPARABLE | NON_COMPARABLE | PARTIAL | UNAVAILABLE   │
│ Fraîcheur: READY · collection … · Écart: +0,70 USD (si COMPARABLE) │
│ Message limites métier (sanitisé) le cas échéant                     │
└──────────────────────────────────────────────────────────────────────┘
```

## Mapping données → UI

| Zone | API `providerReconciliation` | Règle d’affichage |
|---|---|---|
| Studio | `studioEstimatedUsd` + kind | Toujours (estimation Studio) |
| Fournisseur | `providerCostUsd` + currency | **Uniquement si `disclosed`** ; sinon « Indisponible » / « Non autorisé » — **jamais** de montant |
| Période | fenêtre compare UTC | Afficher bornes utilisées |
| Fraîcheur | `freshness.status` + count | READY/PARTIAL/IDLE/ERROR |
| Comparabilité | `comparability` | Libellé métier |
| Écart | `deltaUsd` | **Seulement** si COMPARABLE + disclosed |
| Limites | `limits[]` | Sanitisé |

## États

| État | Rendu |
|---|---|
| COMPARABLE | Studio + Fournisseur + écart |
| PARTIAL | Studio éventuel ; fournisseur masqué ; message partial |
| NON_COMPARABLE | Pas d’écart ; motif |
| UNAVAILABLE | Pas de montant fournisseur |
| Empty 13.06 | Inchangé si aucune estimation |

## Conservation

Rail, shell, tokens, filtres, graphiques et table travaux : **inchangés**.

## Action Morris

Valider ce candidat visuel (oui / ajuster / reporter) avant transposition dans `FinOpsConsumptionPanel`.
