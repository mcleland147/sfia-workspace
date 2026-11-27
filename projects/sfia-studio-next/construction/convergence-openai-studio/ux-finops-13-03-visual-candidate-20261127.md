# Proposition visuelle exacte — FinOps 13.03 (G-FINOPS-UX)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Frame Figma | `1334:321` — **13.03 · Consommation et coûts — synthèse** |
| Figma observé | `web/.sfia-evidence/targeted-exit/figma-13-03-1334-321.png` |
| Candidat delta | `web/.sfia-evidence/targeted-exit/ux-13-03-delta-visual-candidate.html` |
| Statut | **VALIDATED VISUALLY BY MORRIS** (GO G-FINOPS-UX) |
| Transposition | **APPLIED** dans `FinOpsConsumptionPanel` |

## Décision Morris (ajustements mineurs)

- Conserver structure, positionnement, quatre états, design system.
- Titre Pilote : **Comparaison des coûts** (plus « Rapprochement fournisseur »).
- Libellés Pilote simplifiés — **aucun** terme technique interne
  (pas de DTO, org:unspecified, disclosed, kind, ownership).
- Distinction stricte : **Estimation Studio** ≠ **Coût fournisseur**.

## Emplacement

Sous les **4 indicateurs**, au-dessus des graphiques. Un seul bandeau secondaire.

## Mapping données → UI

| Zone | Source API | Affichage Pilote |
|---|---|---|
| Estimation Studio | `studioEstimatedUsd` | Toujours, libellé « Estimation Studio » |
| Coût fournisseur | `providerCostUsd` si présent | Sinon « Indisponible » / « Non autorisé » |
| Période | `compareWindowStartUtc` / `End` | Dates UTC |
| Fraîcheur | `freshness.status` | À jour / Partielle / … |
| Comparabilité | `comparability` | Comparable / Non comparable / Partiel / Indisponible |
| Écart | `deltaUsd` | Uniquement si Comparable + montant fourni |
| Messages | `limits[]` sanitizés | Phrases métier, jamais codes bruts |

## États

COMPARABLE · NON_COMPARABLE · PARTIAL · UNAVAILABLE — inchangés.

## Conservation

Rail, shell, filtres, graphiques, table travaux : inchangés. Pas de second dashboard. Pas de budget monétaire.
