# Protocole comparatif D3 — continuité native (Intervention 2)

| Champ | Valeur |
|---|---|
| Gate | G-NATIVE-CONTINUITY — comparaison bornée, **pas d’adoption** |
| Date | 2026-11-27 |
| Mode défaut | `SFIA_PROVIDER_CONTINUITY_MODE=off` (reconstruction Studio) |

## Variantes

| Id | Mécanisme | Admissibilité préalable |
|---|---|---|
| V1 | Reconstruction Studio (baseline) | ADMISSIBLE — SoT D3 |
| V2 | Prompt caching | À qualifier (SDK/API) — pas de store=true |
| V3 | `previous_response_id` | Admissible seulement si chaîne liée au work D3 + rightsOk |
| V4 | Compaction | À qualifier — pas de nouvelle persistance externe |

## Invariants D3 (obligatoires)

- workId / revision / checkpoint SoT Studio
- acquis + sourceVersions réels
- rightsOk = fencing **et** droits métier explicites
- budgets : tokensConsumed / tokensBudget (2M) / restitutionsRemaining
- aucun reset budget au changement de chaîne/modèle
- continuityChain jamais source d’autorité

## Corpus commun

Même travail cognitif, mêmes sources publiques, mêmes enveloppes, mêmes critères qualité.

## Mesures

fidélité acquis · couverture sources · reprise · tokens · coût · latence · erreurs · maintenance

## Refus (substitué si possible)

source modifiée · droit révoqué · chaîne indisponible · lease expirée · génération tardive · budget épuisé → rollback V1

## Sortie

Recommandation comparative argumentée ; **aucun** mécanisme natif actif par défaut sans décision Morris.
