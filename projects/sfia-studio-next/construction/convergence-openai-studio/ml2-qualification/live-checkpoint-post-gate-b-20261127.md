# Checkpoint LIVE consolidé — post Gate B (attente GO Morris)

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` — **pas de renouvellement** |
| HTTP committed | **99** / 236 |
| Reliquat arithmétique | 137 |
| Gate B consommé | 9 / 30 principe |
| Reliquat principe Gate B | 21 — **≠ autorisation automatique** |
| Nora réserve approx | ~36 / 40 (2 Gate B + prior) |
| Cleanup | 16 restants |
| WEB | OFF |
| Admin | unused |
| Schema | 027 PG |

## Familles (SoT réconcilié)

| Famille | Committed | Max | Restant |
|---|---|---|---|
| decisions | 14 | 24 | 10 |
| embeddings | 8 | 12 | 4 |
| responses | 24 | 112 | 88 |
| vector_stores | 29 | 88 | 59 |
| files | 12 | 40 | 28 |

## Opérations proposées (strictement nécessaires — parcours Studio complet)

| # | Opération | HTTP max | Tokens est. in/out | Famille |
|---|---|---|---|---|
| 1 | Nora investigation → D4 search → lecture doc | 8 | ~12000 / 2000 | responses (+embeds si hybrid ON) |
| 2 | Vision ponctuelle si document scanné | 1 | ~4000 / 300 | responses |
| 3 | Note sourcée + reprise D3 checkpoint | 4 | ~8000 / 1500 | responses |
| 4 | Révision ciblée post-conservation | 3 | ~6000 / 1200 | responses |
| 5 | Marge erreur | 2 | ~2000 / 400 | mixed |
| | **TOTAL proposé** | **≤18** | **~32000 / ~5400** | |

## Coût estimé

Fourchette indicative **~0.15–0.60 USD** (tarifs partiels ; observation Frontier réelle).

## Flags temporaires DEV

`SFIA_DERIVED_EMBEDDING_SEARCH=1` · `SFIA_BOUNDED_JUDGMENT=1` · `SFIA_DOCUMENT_VISION_PUNCTUAL=1` · `SFIA_DERIVED_EMBEDDING_BACKEND=pg` · `SFIA_LIVE_CAMPAIGN_ID=ml2-i2-docintel-20261127` · `SFIA_PROTECT_CAMPAIGN_ENVELOPE=1`

Après : flags feature OFF.

## Protections

- Limites Frontier avant chaque émission (fix metrics clone)
- Sous-enveloppes non transférables
- Corpus synthétique uniquement
- Rollback : flags OFF · pas de drop 027

## GO requis

**Attendre GO Morris explicite** sur cette enveloppe ≤18 HTTP avant émission.  
Les 21 restants du plafond principe Gate B ne s'ajoutent pas automatiquement.
