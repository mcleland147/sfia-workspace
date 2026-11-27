# Delta UX candidat — FinOps page 13 (Figma inspectée RO)

| Champ | Valeur |
|---|---|
| Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
| fileKey / node | `itgvCulInEnFY6DvgIegvP` / `1332:2305` |
| Inspection | **2026-11-27** — `get_screenshot` + `get_metadata` (session RO) |
| Empreinte locale | `.tmp-sfia-review/figma/page13-finops.png` (995×1280 render) |
| Statut | **CANDIDATE — NOT APPLIED** · **G-FINOPS-UX fermé** |
| Backend | `providerReconciliation` via `/api/finops/summary` (service-path evaluator) |

## Structure Figma observée (frames)

| Frame | Id | Rôle |
|---|---|---|
| 13.01 / 13.02 | Intégrations | Rail + menu paramètres (contexte navigation) |
| **13.03** | Consommation et coûts — synthèse | Surface cible du delta |
| 13.04 | Synthèse + menu ouvert | Même surface, état rail |
| 13.05 | Inspection d’un travail | Détail travail (hors delta agrégé) |
| 13.06 | Aucune donnée | Empty state à préserver |

Composants réutilisés observés : `FinOps / Indicateur`, `FinOps / Filtre`, `FinOps / Ligne travail`, rail personnel Paramètres.

## Orientation Morris (conservée)

Préserver rail, shell, tokens, hiérarchie et conventions de la cible validée.
Aucun nouveau cockpit financier. Aucun plafond / crédit / rechargement.
**Ne pas modifier la cible Figma** avant G-FINOPS-UX.

## Proposition visuelle (bloc secondaire sous KPIs 13.03)

Insérer **sous** la rangée des 4 indicateurs existants (Coût estimé / Jetons / Travaux / Couverture), **au-dessus** des graphiques « Évolution » / « Répartition », un bandeau secondaire unique :

| Zone UI | Donnée API | États affichés |
|---|---|---|
| Estimation Studio | `studioEstimatedUsd` + `studioEstimationKind` | known · partial · empty · unknown |
| Coût fournisseur agrégé | `providerCostUsd` + `providerCurrency` | montant LIVE autorisé · Indisponible · Non autorisé (jamais de montant si non `disclosed`) |
| Période | fenêtre UTC de comparaison | affichée si fenêtre explicite / periodEqual |
| Fraîcheur | `freshness.status` + scoped count | READY · PARTIAL · IDLE · ERROR |
| Comparabilité | `comparability` | COMPARABLE · NON_COMPARABLE · PARTIAL · UNAVAILABLE |
| Écart | `deltaUsd` | **uniquement** si COMPARABLE + disclosed |
| Limites métier | `limits[]` sanitised | libellés métier, jamais secrets |

Mapping composants Figma → code (après GO) :

| Figma | Code candidat |
|---|---|
| `FinOps / Indicateur` (réemploi style) | Sous-bandeau textuel / 2 micro-indicateurs (Studio vs Fournisseur) — **pas** 4 nouveaux KPI hero |
| Filtres existants | Inchangés (période / projet / modèle) |
| Empty 13.06 | Si `UNAVAILABLE` sans estimation : conserver empty ; si estimation seule : afficher Studio + « Coût fournisseur indisponible » |

## Non-régression

Interface actuelle (`FinOpsConsumptionPanel`) **ne consomme pas encore** `providerReconciliation` en UI — backend prêt, UI inchangée jusqu’au GO.
Smoke HTTP `/settings/consumption` à rejouer sur le build final.

## GO demandé

Validation Morris unique de ce delta (visuel + mapping) avant transposition Figma → code.
