# Gate B — Frontier reconciliation (90→99 vs family)

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` |
| SoT actuel | `.sfia-evidence/live-campaign-state.json` |

## Écart observé dans gate-b-report.json

- `httpAttemptsCommitted` : **90 → 99** (delta **+9**)
- `familyHttp.*.committed` dans envelopeBefore **et** envelopeAfter : identiques (14/8/24/29/12)

## Cause

`getCampaignEnvelopeMetrics()` retournait `familyHttp: c.familyHttp` **par référence**.  
`envelopeBefore.familyHttp` et `envelopeAfter.familyHttp` aliasaient le même objet muté pendant le run. Les compteurs numériques (http) sont des primitives → delta visible ; la nested map famille apparaissait figée.

**Ce n'est pas** une absence de comptabilisation famille.

## Réconciliation SoT (qualify prior → état actuel)

| Compteur | Post-qualify (avant Gate B) | Après Gate B (état fichier) | Δ |
|---|---|---|---|
| HTTP global | 90 | **99** | **+9** |
| decisions | 13 | **14** | +1 |
| embeddings | 4 | **8** | +4 |
| responses | 20 | **24** | +4 |
| vector_stores | 29 | 29 | 0 |
| files | 12 | 12 | 0 |
| **Somme familles** | 78 | **87** | **+9** |

Δ familles = Δ HTTP = **9**. Cohérent avec les ops Gate B (rebuild/hybrid embeds, judgment, vision, Nora).

## Correction code

`getCampaignEnvelopeMetrics` clone désormais `familyHttp` (JSON deep-clone).

## Gouvernance Gate B

- Accord de principe Morris ≤30 + plan `live-gate-b-emission-plan-20261127.md` présenté puis exécuté dans le même Delivery.
- **Pas** de micro-GO écrit distinct « GO définitif enveloppe exacte » après présentation du plan — qualifier cette limite : exécution sous plafond principe, plan documenté.
- Les **21** contacts non consommés ≠ autorisation automatique pour une nouvelle émission.
