# T-A5 — Agent Selection and Execution (Framing Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout (AT `12-delivery-slices…`) |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gate consommé** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **T-A4 delivery head conservé** | `245f515c3f8baaf0c2cf72b59af0635a1b0efb67` |
| **Runtime `app/lib/oa/**`** | **NONE** (interdit ce cycle) |
| **Modeled schemas / catalogues** | **NON MODIFIÉS** |
| **Push / PR / merge** | **NONE** |
| **Statut pack** | **FRAMING COMPLETED — Morris arbitration required** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY` |
| **Gate suivant candidat** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Cadrer la frontière entre un `ExecutionContract` T-A4 **confirmé** et une tentative d’exécution bornée, attribuée à un agent autorisé et traçable — **sans** implémenter runtime, agent, Attempt opérationnel, shell, réseau, Cursor/MCP, SQL, UI.

## Périmètre

- Analyse repo-informed T-A0…T-A4
- Frontières T-A4 / T-A5 / T-A6 / T-A7
- Objets candidats, lifecycle, commandes, événements, erreurs
- Options de sélection d’agent et d’architecture d’exécution
- Autorité, sécurité, atomicité, concurrence, stop conditions
- Observabilité, performance (hypothèses), stratégie de tests futurs
- Réserves héritées (maintenues OPEN)
- Pack d’arbitrages Morris D-T-A5-01…10

## Hors périmètre

- Delivery / modeled rework / runtime T-A5
- `SelectExecutionAgent` / `StartExecution` / `RecordExecutionResult` opérationnels
- Modification T-A0…T-A4, method/**, prompts/**, package/lockfiles
- Push branche projet, PR, merge
- Cutover SFIA v2.6 / MethodMode / OPS1

## Sources

- Handoff T-A4 post-merge blob `e182915952a22676aa1c658c996aaa14fe48f337`
- `t-a4-execution-contract-governance/**` + runtime `app/lib/oa/execution-contract/**` (lecture seule)
- Modeled `07-execution-contract-attempt-and-agent-model.md`, `09-command-event-error-and-transition-catalog.md`
- Schemas `execution-contract.schema.json` (`0.2.0-oa`), `execution-attempt.schema.json` (`0.1.0-oa`)
- AT `12-delivery-slices-dependencies-and-technical-gates.md`
- CKC cadrage pilot (candidate) — `method/sfia-fast-track/.../pilots/01-cadrage.md`

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage complet + D-T-A5-01…10

## Réserves (héritées — OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (prioritaire T-A5) |
| R-T-A3-2 | **OPEN** (prioritaire T-A5) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-T-A4-1/2/3 | resolved-by-modeled (non fermées globalement) |

## Décisions Morris

Voir [01-framing.md](./01-framing.md) § D-T-A5-01…10 — **recommandations candidates, non validées**.

## Anti-claims

- Pas T-A5 **AUTHORIZED** / **DELIVERY READY** / **IMPLEMENTED**
- Pas agent **selected** / Attempt **operational** / execution **enabled**
- Pas modeled **validated** pour T-A5 / DATABASE SELECTED
- Pas Option A **complete** / V2.6 retired
- Pas B5 / R1 / R-T-A3-* **CLOSED**
- Pas push / PR / merge / force-push ce cycle
