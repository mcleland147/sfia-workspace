# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6` (**CONSUMED**) |
| **Gate arbitrage** | `GO ARBITRATE T-A6` (**CONSUMED**) |
| **Gate décision** | `GO DECIDE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` (PR #266 T-A5 merge) |
| **HEAD arbitration** | `d2d4cf5bee8d956ae9bc3ad899bce89a5d09d0b7` |
| **Modeled / runtime** | **NONE** modifié |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **DECISIONS APPROVED BY MORRIS** |
| **Horodatage** | 2026-07-26 01:12:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 DECISIONS RECORDED — MODELED MATERIALIZATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Enregistrer dans Git les décisions Morris explicites D-T-A6-01…12 relatives à Evidence, ReviewBundle, ClaimEvaluation, maturité, autorité, stockage logique, automatisation et sorties T-A6.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage (inchangé)
3. [02-arbitration.md](./02-arbitration.md) — decision pack (inchangé)
4. [03-decisions.md](./03-decisions.md) — **décisions Morris matérialisées**

## Décisions Morris (APPROVED)

| ID | Formulation |
|----|-------------|
| D-T-A6-01 | OPTION C — APPROVED |
| D-T-A6-02 | OPTION C — APPROVED |
| D-T-A6-03 | OPTION A+D — APPROVED |
| D-T-A6-04 | OPTION B — APPROVED |
| D-T-A6-05 | OPTION D — APPROVED |
| D-T-A6-06 | RECOMMENDED AUTHORITY MATRIX — APPROVED |
| D-T-A6-07 | OPTION C — APPROVED |
| D-T-A6-08 | OPTION D — APPROVED |
| D-T-A6-09 | PRINCIPLES PACK — APPROVED |
| D-T-A6-10 | T-A6/T-A7 BOUNDARY — APPROVED |
| D-T-A6-11 | L0–L3 DEFAULT / L4 GATED / L5 OUT — APPROVED |
| D-T-A6-12 | OUTPUT CONTRACT WITHOUT AUTO NEXT CYCLE — APPROVED |

Détail : [03-decisions.md](./03-decisions.md).

## Hors périmètre (toujours)

- Modeled / schemas / runtime / tests ;
- Technologie de stockage ;
- Fermeture de réserves ;
- T-A7 ;
- Push / PR / merge ;
- Exécution réelle.

## Réserves (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (HARD exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** (ClaimEvaluation schema) |
| U-M02 | **OPEN** (stockage Evidence — aucune technologie choisie) |

R-T-A6-1…9 : risques/invariants/dettes documentés — **pas** de réserves CREATE VALIDATED.

## Anti-claims

- Pas modeled ready / delivery ready / production ready
- Pas storage vendor choisi
- Pas réserves fermées
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge ce cycle

## Modeled de référence (lecture seule)

- `.../08-evidence-review-bundle-maturity-and-debt-model.md`
- `schemas/evidence/evidence.schema.json`
- `schemas/evidence/review-bundle.schema.json`
- `schemas/maturity/maturity-assessment.schema.json`
