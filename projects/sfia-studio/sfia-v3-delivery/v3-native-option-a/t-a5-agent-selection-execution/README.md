# T-A5 — Agent Selection and Execution (Framing Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout (AT `12-delivery-slices…`) |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate arbitration** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **HEAD cadrage** | `f6cb8f39c772c2adf02e93933dbb2ceef096764f` |
| **Runtime `app/lib/oa/**`** | **NONE** (interdit) |
| **Modeled schemas / catalogues** | **NON MODIFIÉS** |
| **Push / PR / merge** | **NONE** |
| **Statut pack** | **ARBITRATION PACK PREPARED — MORRIS DECISIONS PENDING** |
| **Verdict arbitration** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED` |
| **Gate potentiel après décisions** | `GO MATERIALIZE T-A5 ARBITRATIONS — …` (**NOT consumed / NOT presumed**) |

## Objectif

Cadrer puis préparer l’arbitrage Morris de la frontière T-A5 (agent, Attempt, exécution) — **sans** runtime, agent opérationnel, Attempt exécutable, shell, réseau, Cursor/MCP, SQL, UI.

## Périmètre

- Framing complet (`01-framing.md`)
- Pack d’arbitrage D-T-A5-01…10 + formulaire Morris (`02-arbitration.md`)
- Réserves héritées maintenues OPEN
- Commits locaux documentaires + handoff review

## Hors périmètre

- Décisions imputées à Morris sans réponse explicite
- Delivery / modeled rework / runtime T-A5
- Push branche projet, PR, merge
- Cutover SFIA v2.6 / MethodMode / OPS1

## Sources

- Handoff cadrage blob `d4923b58d3956760b198025ad7d1150c79b9773b`
- Modeled 07/09 ; Attempt `0.1.0-oa` ; ExecutionContract `0.2.0-oa` (lecture)
- Runtime T-A4 `execution-contract/**` (lecture)
- CKC cadrage pilot (candidate, `executionAuthority=false`)

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage complet
3. [02-arbitration.md](./02-arbitration.md) — **pack d’arbitrage + formulaire Morris**

## Réserves (héritées — OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (blocker exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (blocker exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-T-A4-1/2/3 | resolved-by-modeled (non fermées globalement) |

## Décisions Morris

Voir formulaire dans [02-arbitration.md](./02-arbitration.md) — **TOUTES PENDING**.

## Anti-claims

- Pas D-T-A5-01…10 **APPROVED**
- Pas T-A5 **AUTHORIZED** / **DELIVERY READY** / **IMPLEMENTED**
- Pas agent **selected** / Attempt **operational** / execution **enabled**
- Pas modeled **validated** T-A5 / DATABASE SELECTED
- Pas Option A **complete** / réserves **CLOSED**
- Pas push / PR / merge / force-push ce cycle
