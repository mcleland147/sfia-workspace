# T-A5 — Agent Selection and Execution (Framing Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout (AT `12-delivery-slices…`) |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate arbitration** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **HEAD cadrage** | `f6cb8f39c772c2adf02e93933dbb2ceef096764f` |
| **Runtime `app/lib/oa/**`** | **NONE** (interdit) |
| **Modeled schemas / catalogues** | **MATERIALIZED** Attempt `0.2.0-oa` + AgentDescriptor `0.1.0-oa` + catalogs — **MODELED VALIDATION REQUIRED** |
| **Push / PR / merge** | **NONE** (projet) |
| **Statut pack** | **MATERIALIZED — MODELED VALIDATION REQUIRED** |
| **Verdict materialization** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED` |
| **Gate suivant** | `GO VALIDATE T-A5 MODELED — …` (**NOT consumed / NOT presumed**) |

## Objectif

Cadrer, arbitrer, puis **matérialiser** les décisions Morris T-A5 (agent, Attempt, exécution) en modeled + docs — **sans** runtime, agent opérationnel, Attempt exécutable, shell, réseau, Cursor/MCP, SQL, UI.

## Périmètre

- Framing (`01-framing.md`)
- Arbitration (`02-arbitration.md`) — décisions Morris **APPROVED**
- Materialization (`03-materialization.md`) — schemas / catalogs / exemples / tests
- Réserves héritées maintenues OPEN
- Commits locaux + handoff review

## Hors périmètre

- Runtime T-A5 / delivery exécutable
- Push branche projet, PR, merge
- Fermeture de réserves
- Cutover SFIA v2.6 / MethodMode / OPS1
- Evidence / Claim / maturité (T-A6)

## Sources

- Décisions Morris D01–D10 (voir ci-dessous et `03-materialization.md`)
- Modeled 07/09 ; Attempt `0.2.0-oa` ; ExecutionContract `0.2.0-oa`
- Runtime T-A4 `execution-contract/**` (lecture seule)
- CKC cadrage pilot (candidate, `executionAuthority=false`)

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage
3. [02-arbitration.md](./02-arbitration.md) — pack d’arbitrage + **APPROVED BY MORRIS**
4. [03-materialization.md](./03-materialization.md) — **matérialisation**

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

## Décisions Morris (APPROVED — materialization)

| ID | Approval |
|----|----------|
| D01 | APPROVE A — Attempt separate aggregate |
| D02 | APPROVE C WITH CONDITION — Critical: system propose + human confirm; Option A capabilities only non-Critical closed profile |
| D03 | APPROVE A WITH CONDITION — Select and Start separate; TTL + revalidate at Start |
| D04 | APPROVE B — accepted → running → terminals ; + result_pending ; no blocked/starting durable |
| D05 | APPROVE A — persist-then-launch ; launch-then-persist forbidden |
| D06 | APPROVE C — result_pending ; no speculative completed |
| D07 | APPROVE B+D — stop conditions + cancel best-effort ; no implicit business rollback |
| D08 | APPROVE A WITH CONDITIONS — authority matrix ; Morris emergency ; auto-safety bounded ; RecordResult adapter-bound ; system never Morris |
| D09 | APPROVE A — timeout → contract failed ; retry = new Attempt + retryOf + budget + auth |
| D10 | APPROVE A+C — T-A5 technical only ; Evidence/Claim/maturity = T-A6 |

Détail : [03-materialization.md](./03-materialization.md) · marquage : [02-arbitration.md](./02-arbitration.md).

## Anti-claims

- Pas T-A5 **MODELED VALIDATED** (gate validate non consommé)
- Pas T-A5 **AUTHORIZED** runtime / **DELIVERY READY** / **IMPLEMENTED**
- Pas agent **selected** opérationnel / Attempt **operational** / execution **enabled**
- Pas DATABASE SELECTED / réserves **CLOSED**
- Pas Option A **complete**
- Pas push / PR / merge / force-push projet ce cycle
