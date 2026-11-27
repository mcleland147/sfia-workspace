# Gate B — Plan d'émission LIVE (validation définitive)

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` (existante — **pas de renouvellement**) |
| Accord principe Morris | ≤ **30** contacts HTTP |
| Reliquat campagne | 90/236 committed · **146** restants · Nora ~38/40 · cleanup 16 |
| WEB | OFF |
| Admin | unused |
| Corpus | **synthétique** uniquement |
| Flags DEV temporaires | `SFIA_DERIVED_EMBEDDING_SEARCH=1` · `SFIA_BOUNDED_JUDGMENT=1` · `SFIA_DOCUMENT_VISION_PUNCTUAL=1` · `SFIA_DERIVED_EMBEDDING_BACKEND=pg` · `SFIA_LIVE_CAMPAIGN_ID=ml2-i2-docintel-20261127` · `SFIA_PROTECT_CAMPAIGN_ENVELOPE=1` |
| Après qualify | flags OFF (sauf backend=pg durable ops) |

## Opérations exactes (≤30 HTTP)

| # | Opération | Famille | HTTP max | Tokens estimés (in/out) | Notes |
|---|---|---|---|---|---|
| 1 | Embed query ×3 (hybrid rights + negative) | embeddings | 3 | ~150 / 0 | text-embedding-3-small |
| 2 | Rebuild index PG synthétique | embeddings | 1 | ~400 / 0 | admissible-only |
| 3 | Bounded judgment AMB + fallback | decisions+responses | 4 | ~400 / 200 | gpt-6-luna |
| 4 | Vision punctual PDF synthétique | responses | 2 | ~1200 / 300 | gpt-6.1-terra |
| 5 | Nora parcours intégré (tools/D4/note) | responses | 12 | ~6000 / 2500 | workId + semantic-qual |
| 6 | Marge erreurs / retry borné | mixed | 4 | ~800 / 200 | budget/invalid paths |
| | **TOTAL plafonné** | | **≤26** (+4 marge = **30**) | **~8950 / ~3200** | |

## Coût estimé (indicatif — non inventé comme facture)

Tarifs catalogue partiels ; embeddings PARTIAL/UNKNOWN.

| Poste | Estimation grossière USD |
|---|---|
| Embeddings (~550 tok) | ≪ 0.01 |
| Decisions/Responses (~10k tok total) | ~0.05–0.25 selon effort |
| Vision (~1.5k) | ~0.02–0.08 |
| **Fourchette totale** | **~0.10 – 0.40 USD** |

Observation réelle = usage fournisseur via Frontier + ledger.  
Ne pas assimiler réservations Frontier à coût facturé.

## Durée estimée

15–35 minutes chronomètre script + smoke navigateur.

## Protections

- Sous-enveloppes non transférables
- Aucun VS / File Search / fileId durable
- Aucune donnée projet réelle
- D3 V1 · pas de D6 IA
- RECETTE intacte

## Validation définitive

Ce plan constitue la présentation exigée **avant émission**.  
Exécution dans le même Delivery sous le plafond Morris ≤30.
