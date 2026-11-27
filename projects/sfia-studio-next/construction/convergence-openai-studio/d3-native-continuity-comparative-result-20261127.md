# Résultat comparatif D3 — continuité native (Intervention 2)

| Champ | Valeur |
|---|---|
| Gate | G-NATIVE-CONTINUITY — comparaison bornée, **pas d’adoption** |
| Date | 2026-11-27 |
| Build | `3WGrMVrEU7z1yoSrUW8l7` |
| Mode runtime | `SFIA_PROVIDER_CONTINUITY_MODE=off` |

## Corpus

Investigation Nora DEV publique (MDN Fetch) — work `cgw_8af8ce30-bd82-40d9-81be-d9cfaf1a5b88` — checkpoints D3 observés — reprise CP7.

## Variantes

| Id | Résultat | Admissibilité | Preuve |
|---|---|---|---|
| V1 Reconstruction Studio | **EXERCISED LIVE** | ADMISSIBLE — SoT | work/revision/checkpoints/acquis/sources ; rightsOk explicite + budgets envelope |
| V2 Prompt caching | NOT RUN LIVE | CONDITIONAL | Pas de store=true ; bénéfice non démontré ce cycle |
| V3 previous_response_id | NOT ACTIVATED | CONDITIONAL | Mode off ; admissible seulement chaîne D3 + rightsOk |
| V4 Compaction | NOT RUN LIVE | CONDITIONAL | Aucune persistance externe nouvelle ; DATA-01 inchangé |

## Invariants vérifiés (V1)

- workId / revision / checkpoints SoT Studio
- rightsOk = fencing ∧ droits métier explicites (lease seule ≠ habilitation)
- budgets tokensBudget / tokensConsumed / restitutionsRemaining branchés
- continuityChain jamais autorité
- aucun reset budget observé sur reprise

## Recommandation

Conserver **V1** comme seul mécanisme actif par défaut.  
Ne pas activer V2/V3/V4 sans décision Morris de sortie distincte.  
`SFIA_PROVIDER_CONTINUITY_MODE=off` reste la configuration opérationnelle.

## Refus / rollback

Envelope `CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED` observée puis renew qualify — rollback vers reconstruction Studio sans perte d’autorité D3.
