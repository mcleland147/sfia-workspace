# T-A5 — Agent Selection and Execution (Framing Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout (AT `12-delivery-slices…`) |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate arbitration** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate modeled validate** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate runtime framing** | `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate runtime arbitration** | `GO ARBITRATE T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate materialize RTA5** | `GO MATERIALIZE T-A5 RUNTIME ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **Runtime `app/lib/oa/**`** | **NONE** (interdit — docs only) |
| **Modeled schemas / catalogues** | Attempt `0.2.0-oa` + AgentDescriptor `0.1.0-oa` — **MODELED CORRECTED AND VALIDATED** |
| **Push / PR / merge** | **NONE** (projet) |
| **Statut pack** | **RUNTIME ARBITRATIONS MATERIALIZED — DELIVERY GATE REQUIRED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATIONS MATERIALIZED — RUNTIME FOUNDATION DELIVERY MAY OPEN WITH MORRIS GO` |
| **Gate suivant** | `GO DELIVER T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed / NOT presumed**) |

## Objectif

Cadrer, arbitrer, matérialiser, valider le modeled, cadrer le runtime, arbitrer RTA5, puis **matérialiser les décisions Morris RTA5** — **sans** code applicatif, agent opérationnel, Attempt exécutable, shell, réseau, Cursor/MCP, SQL, UI.

## Périmètre

- Framing (`01-framing.md`)
- Arbitration D-T-A5 (`02-arbitration.md`) — Morris **APPROVED**
- Materialization modeled (`03-materialization.md`)
- Modeled validation (`04-modeled-validation.md`) — **CORRECTED AND VALIDATED**
- Runtime framing (`05-runtime-framing.md`) — **COMPLETED**
- Runtime arbitration (`06-runtime-arbitration.md`) — **APPROVED BY MORRIS**
- Runtime arbitrations materialization (`07-runtime-arbitrations-materialization.md`) — **MATERIALIZED**
- Réserves héritées maintenues OPEN
- Commits locaux + handoff review

## Hors périmètre

- Runtime T-A5 **code** / delivery démarrée / adapter réel
- Push branche projet, PR, merge
- Fermeture de réserves
- Cutover SFIA v2.6 / MethodMode / OPS1
- Evidence / Claim / maturité (T-A6)

## Sources

- Décisions Morris D01–D10 (voir ci-dessous et `03-materialization.md` / `04-modeled-validation.md`)
- Modeled 07/09 ; Attempt `0.2.0-oa` ; ExecutionContract `0.2.0-oa`
- Runtime T-A4 `execution-contract/**` (lecture seule)
- CKC cadrage pilot (candidate, `executionAuthority=false`)

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage
3. [02-arbitration.md](./02-arbitration.md) — pack d’arbitrage + **APPROVED BY MORRIS**
4. [03-materialization.md](./03-materialization.md) — matérialisation
5. [04-modeled-validation.md](./04-modeled-validation.md) — **validation modeled + corrections**
6. [05-runtime-framing.md](./05-runtime-framing.md) — cadrage runtime mémoire
7. [06-runtime-arbitration.md](./06-runtime-arbitration.md) — arbitrage RTA5 — **APPROVED BY MORRIS**
8. [07-runtime-arbitrations-materialization.md](./07-runtime-arbitrations-materialization.md) — **matérialisation RTA5 + contrat delivery**

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

## Décisions Morris (APPROVED — materialization + validation)

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

Détail : [03-materialization.md](./03-materialization.md) · validation : [04-modeled-validation.md](./04-modeled-validation.md) · marquage : [02-arbitration.md](./02-arbitration.md).

## Décisions Morris runtime (RTA5) — APPROVED BY MORRIS

Voir [06-runtime-arbitration.md](./06-runtime-arbitration.md) §0 et [07-runtime-arbitrations-materialization.md](./07-runtime-arbitrations-materialization.md).

## Anti-claims

- Pas runtime **AUTHORIZED** / **IMPLEMENTED** / delivery **STARTED**
- Pas agent **selected** opérationnel / Attempt **operational** / execution **enabled**
- Pas DATABASE SELECTED / réserves **CLOSED**
- Pas Option A **complete**
- Pas push / PR / merge / force-push projet ce cycle
- Pas `GO DELIVER T-A5 RUNTIME FOUNDATION` consommé
- Pas code sous `app/lib/oa/execution-attempt/**`
