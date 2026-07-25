# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6` (**CONSUMED**) |
| **Gate arbitrage** | `GO ARBITRATE T-A6` (**CONSUMED**) |
| **Gate décision** | `GO DECIDE T-A6` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Runtime** | **NONE** modifié |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **MODELED CONTRACTS MATERIALIZED** (validation Morris requise) |
| **Horodatage materialize** | 2026-07-26 01:36:42 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Matérialiser les décisions Morris D-T-A6-01…12 en contrats modeled versionnés, testables et documentés (Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment) — **sans** runtime, SQL, API, UI, vendor stockage, ni T-A7.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md)
3. [02-arbitration.md](./02-arbitration.md)
4. [03-decisions.md](./03-decisions.md)
5. [04-modeled-materialization.md](./04-modeled-materialization.md) — **matérialisation modeled**

## Versions schemas (après materialize)

| Schema | Version |
|--------|---------|
| Evidence | `0.2.0-oa` |
| ReviewBundle | `0.2.0-oa` |
| ClaimEvaluation | `0.1.0-oa` (nouveau) |
| MaturityAssessment | `0.2.0-oa` |

## Décisions Morris (APPROVED — non renégociées)

| ID | Formulation |
|----|-------------|
| D-T-A6-01…12 | voir [03-decisions.md](./03-decisions.md) |

## Hors périmètre (toujours)

- Runtime applicatif / SQL / API / UI
- Technologie de stockage (U-M02)
- Fermeture de réserves
- T-A7 / exécution réelle / adapter réel
- Push / PR / merge projet
- Gate validate (non consommé)

## Réserves (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** (schema matérialisé ; pas VALIDATED) |
| U-M02 | **OPEN** |

R-T-A6-1…9 : risques/invariants/dettes — **pas** CREATE VALIDATED.

## Anti-claims

- Pas MODELED VALIDATED / READY FOR DELIVERY / production ready
- Pas storage vendor
- Pas réserves fermées
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge ce cycle

## Modeled de référence

- `sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`
- `schemas/evidence/evidence.schema.json` (`0.2.0-oa`)
- `schemas/evidence/review-bundle.schema.json` (`0.2.0-oa`)
- `schemas/evidence/claim-evaluation.schema.json` (`0.1.0-oa`)
- `schemas/maturity/maturity-assessment.schema.json` (`0.2.0-oa`)
- `tests/evidence-review-maturity-governance.test.mjs`
