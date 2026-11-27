# Campagne LIVE — reliquat exact (avant toute nouvelle émission)

| Champ | Valeur |
|---|---|
| campaignId | `ml2-i2-docintel-20261127` |
| Renouvellement | **interdit** sans GO Morris |
| Source | envelopeAfter qualify-report + reconstruction phase |

## Compteurs

| | Committed | Max | Restant |
|---|---|---|---|
| HTTP global | **90** | 236 | **146** |
| decisions | 13 | 24 | 11 |
| embeddings | 4 | 12 | 8 |
| responses | 20 | 112 | 92 (dont Nora réserve **~38/40**) |
| vector_stores | 29 | 88 | 59 |
| files | 12 | 40 | 28 |
| Cleanup réserve | 8 used | 24 | 16 |
| Nora réserve | ~2 used | 40 | **~38** |

Tokens usage LIVE phases : ~6641 in / 1178 out.  
Plafond tokens campagne : 344000.  
InputTokenCount attempts committed : 21.

## Incident historique (non masqué)

Vitest `__reset` a zéroté `live-campaign-state.json` mid-campaign ; phase evidence SoT ; envelope reconstruite ; protection anti-wipe LIVE ajoutée (`endProcessCampaign` + `__reset`).

## Avant nouvelle émission

GO Morris explicite requis avec ce reliquat. Aucune émission dans le Delivery d'intégration produit courant.
