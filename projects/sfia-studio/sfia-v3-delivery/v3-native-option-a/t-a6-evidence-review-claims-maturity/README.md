# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` (PR #266 T-A5 merge) |
| **Modeled / runtime** | **NONE** modifié — cadrage documentaire uniquement |
| **Push / PR / merge projet** | **NONE** — require Morris GO |
| **Statut pack** | **FRAMING COMPLETED** |
| **Horodatage** | 2026-07-26 00:05:48 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY` |
| **Gate suivant** | `GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Cadrer la frontière fonctionnelle et architecturale permettant de transformer les résultats techniques T-A5 en éléments de preuve examinables (Evidence, ReviewBundle, ClaimEvaluation, maturité, dette), sans confondre résultat technique, preuve, claim, décision humaine et autorisation d’exécution.

## Périmètre

- Définitions épistémiques candidates ;
- Frontière T-A5 → T-A6 ;
- Objets / lifecycles / commandes / événements candidats ;
- Invariants, autorité, sécurité/RGPD, stockage/volumétrie ;
- Automatisation L0–L5 bornée ;
- Risques et réserves (existantes + candidates) ;
- Arbitrages Morris D-T-A6-01…12.

## Hors périmètre

- Enrichissement schema / runtime / tests ;
- SQL, API, UI, worker, scheduler ;
- Adapter réel / exécution réelle ;
- Validation d’options ;
- Fermeture de réserves ;
- T-A7 ;
- Push / PR / merge.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage complet arbitrable

## Décisions validées (nouvelles)

**Aucune.**

Héritages utiles (non re-votés) : M-OA-07, M-OA-08, T-A5 D10 (Evidence/Claim = T-A6).

## Arbitrages ouverts

D-T-A6-01 … D-T-A6-12 — voir [01-framing.md](./01-framing.md) §14.

## Réserves

### Existantes (OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (HARD exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** (ClaimEvaluation schema) |
| U-M02 | **OPEN** (stockage Evidence) |

### Candidates (non validées)

R-T-A6-1 … R-T-A6-9 — voir [01-framing.md](./01-framing.md) §13.2.

## Anti-claims

- Pas T-A6 validé / modeled ready / delivery ready / production ready
- Pas storage décidé / maturity runtime validée / automatisation autorisée
- Pas T-A7 ouvert / Option A complète / exécution réelle
- Pas réserves fermées / push / PR / merge ce cycle

## Modeled de référence (lecture seule)

- `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`
- `schemas/evidence/evidence.schema.json`
- `schemas/evidence/review-bundle.schema.json`
- `schemas/maturity/maturity-assessment.schema.json`
