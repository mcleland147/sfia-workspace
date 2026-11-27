# FinOps reconcile audit — ml2-i2-finops-reconcile.mts

| Champ | Valeur |
|---|---|
| Script | `web/scripts/ml2-i2-finops-reconcile.mts` |
| Campagne | `ml2-i2-docintel-20261127` |
| Principe | Usages issus des réponses fournisseur / preuves primaires — pas de coût inventé |

## Valeurs historiquement codées en dur

| Opération | Valeur hardcodée | Preuve primaire | Qualification |
|---|---|---|---|
| `bounded_judgment.decisions` in=190 | 190 | `qualify-report.json` → `conv.F21.boundedJudgmentAmb.usage.inputTokens=190` | **JUSTIFIÉE** (observation qualify) |
| `embeddings.derived_index_rebuild` in=198 | 198 | Non retrouvée comme `usage.total_tokens` isolé dans phase-embeddings; ledger post-hoc | **ESTIMATED_RECONCILE** — conserver historique, ne plus rejouer comme preuve indépendante |
| `nora.ml2_integrated_e2e` in=800 out=250 | 800/250 | `nora` object n'expose pas input/output tokens mesurés | **ESTIMATED_RECONCILE** — enveloppe Frontiers tokens ≠ usage Nora exact |

## Décision produit

1. Préserver les lignes ledger déjà écrites (traçabilité).
2. Script mis à jour : lit `qualify-report.json` ; n'écrit que si `--write` ; marque `limits` avec `PRIMARY|ESTIMATED_RECONCILE`.
3. Ne pas supprimer / réécrire opaque l'historique.
4. Attribution future : uniquement `usage` fournisseur réel via Frontier / recordProviderUsageObservation au moment de l'appel.

## Claims interdits

- Présenter 198/800/250 comme mesure fournisseur indépendante sans qualifier ESTIMATED.
- Assimiler `inputTokensCommitted` Frontier (réservations) à usage facturé Nora.
