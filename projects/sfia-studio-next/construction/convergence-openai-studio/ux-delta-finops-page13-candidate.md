# Delta UX candidat — FinOps page 13 (Figma)

| Champ | Valeur |
|---|---|
| Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
| Statut | **CANDIDATE — NOT APPLIED** · **G-FINOPS-UX fermé** |
| Backend | `providerReconciliation` via `/api/finops/summary` |
| Inspection Figma | Non rejouée dans ce cycle — limite documentée ; pas d’invention visuelle |

## Orientation Morris (conservée)

Préserver rail, composants, hiérarchie et conventions de la cible validée.
Aucun nouveau cockpit financier. Aucun plafond / crédit / rechargement.

## Mapping états → restitution

| Zone | Données | États |
|---|---|---|
| Estimation Studio | `studioEstimatedUsd` / kind | known · partial · empty · unknown |
| Coût fournisseur agrégé | `providerCostUsd` + `providerCurrency` | montant LIVE autorisé · Indisponible · Non autorisé |
| Période | fenêtre UTC de comparaison | affichée seulement si `periodEqual` ou fenêtre explicite |
| Fraîcheur | `freshness` scoped au périmètre | READY · PARTIAL · IDLE · ERROR |
| Comparabilité | `comparability` | COMPARABLE · NON_COMPARABLE · PARTIAL · UNAVAILABLE |
| Écart | `deltaUsd` | **uniquement** si COMPARABLE |
| Partiel / indisponible | `limits[]` sanitised | libellés métier, jamais secrets |

## Hiérarchie proposée (secondaire, hors hero)

1. Estimation Studio (existant)
2. Coût fournisseur agrégé autorisé (nouveau bloc secondaire)
3. Période + fraîcheur
4. Comparabilité / écart conditionnel
5. Message données partielles ou indisponibles

## Non-régression

Interface actuelle conservée tant que G-FINOPS-UX n’est pas levé.
Smoke HTTP `/settings/consumption` = 200 sur le build courant.

## GO demandé

Validation Morris du delta avant transposition Figma → code.
