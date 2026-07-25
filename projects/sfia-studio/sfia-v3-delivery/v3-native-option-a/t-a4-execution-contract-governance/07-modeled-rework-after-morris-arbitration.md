# 07 — Modeled rework after Morris arbitration

| Champ | Valeur |
|-------|--------|
| **Document** | `07-modeled-rework-after-morris-arbitration.md` |
| **Gate** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **Statut** | **MODELED REWORK COMPLETED — runtime not started** |
| **Verdict** | **SFIA STUDIO V3-NATIVE OPTION A T-A4 EXECUTIONCONTRACT MODELED REWORK COMPLETED — MORRIS VALIDATION REQUIRED** |
| **Runtime `app/lib/oa/execution*`** | **NONE** |
| **T-A5** | **NONE** |
| **Push / PR / merge** | **NONE** |

## Morris decisions (VALIDATED — verbatim)

- APPROVE modeled rework for ExecutionContract supersession
- T-A4 OWNS governance lifecycle through confirmed
- T-A5 OWNS agent selection, execution and executing/completed/failed
- requiredAuthority USES canonical T-A3 mapping → enum N1|N2|N3|MORRIS
- MORRIS = N3 verified + canActAsMorris=true (description normative)
- Confirmation IS CONSUMED when contract becomes confirmed
- Critical cycle remains fail-closed while not acknowledged
- T-A4 runtime delivery may resume after modeled rework

## D01–D10 (local IDs = T-A4-D01…D10)

| ID | Status | Formulation Morris |
|----|--------|--------------------|
| **T-A4-D01** | **APPROVED** | rework schema supersession |
| **T-A4-D02** | **APPROVED** | SupersedeExecutionContract + événement |
| **T-A4-D03** | **APPROVED** | T-A4 ownership jusqu’à confirmed |
| **T-A4-D04** | **REJECTED** | T-A4 ne possède pas executing/completed/failed |
| **T-A4-D05** | **APPROVED** | SelectExecutionAgent et StartExecution appartiennent à T-A5 |
| **T-A4-D06** | **APPROVED** | requiredAuthority utilise le mapping T-A3 |
| **T-A4-D07** | **APPROVED** | Confirmation consommée au passage confirmed |
| **T-A4-D08** | **APPROVED** | Critical fail-closed tant que non acknowledged |
| **T-A4-D09** | **APPROVED** | noms canoniques du catalogue priment sur les noms inventés du prompt initial |
| **T-A4-D10** | **APPROVED WITH CONDITION** | runtime T-A4 reprend après rework modeled conforme |

## Fichiers modeled modifiés / créés

| Path | Action |
|------|--------|
| `sfia-v3-modeled/.../schemas/execution/execution-contract.schema.json` | Rework `0.2.0-oa` |
| `sfia-v3-modeled/.../09-command-event-error-and-transition-catalog.md` | Confirm + Supersede + events + ownership |
| `sfia-v3-modeled/.../07-execution-contract-attempt-and-agent-model.md` | Align ownership / authority / supersession |
| `sfia-v3-modeled/.../10-validation-versioning-provenance-and-security-rules.md` | Versioning before/after |
| `sfia-v3-modeled/.../README.md` | Dual schemaVersion note |
| `examples/execution-contract*.json` + narrative/ownership md | Valid/invalid fixtures |
| `tests/execution-contract-governance.test.mjs` | ajv harness |

## Diff conceptuel schema

| Aspect | Before `0.1.0-oa` | After `0.2.0-oa` |
|--------|-------------------|------------------|
| `requiredAuthority` | free string | enum `N1\|N2\|N3\|MORRIS` |
| Supersession fields | none | `supersedesExecutionContractId` + `supersessionReason` |
| Reverse link | n/a | **derived at runtime** (one direction) |
| `confirmed` constraints | none structural | requires `confirmationRef` + `decisionRefs` minItems 1 |
| Status enum | same values | same values + ownership docs |
| `additionalProperties` | false | false (preserved) |

## Supersession

- Forward only: successor carries `supersedesExecutionContractId` (`^xct:`).
- `supersessionReason` required when forward id present **or** `status=superseded` ; **≥1 non-whitespace** (validation harden — whitespace/NBSP-only rejected).
- Self-supersession: runtime invariant (Draft-07 cannot compare properties); schema-accepted fixture exercised in tests.
- Old content immutable; new id + monotone `version`.

## Ownership T-A4 / T-A5

See catalog `09-…` ownership table. Single schema Option A retained; T-A5 statuses remain on schema but must not be produced by T-A4.

## requiredAuthority mapping

| Enum | Mapping |
|------|---------|
| N1 | T-A3 level N1 |
| N2 | T-A3 level N2 |
| N3 | T-A3 level N3 ; **≠** Morris |
| MORRIS | N3 verified ∧ `canActAsMorris=true` |

## Confirmation

Consumed **only** on `ConfirmExecutionContract` → `confirmed`. Build/Validate do not consume.

## Critical

Fail-closed while Critical cycle not acknowledged (R-T-A3-1 remains **OPEN**). Narrative example: `examples/execution-contract-critical-non-ack.narrative.md`.

## Decision superseded

After `confirmed`, if source decision later superseded → no StartExecution until contract superseded/cancelled (runtime gate T-A4→T-A5).

## Commands / events added

- Commands: `ConfirmExecutionContract`, `SupersedeExecutionContract`
- Events: `ExecutionContractValidated`, `ExecutionContractConfirmationRequired`, `ExecutionContractSuperseded`, `ExecutionContractCancelled` (Confirmed/Built already existed)

## Versioning

Breaking bump ExecutionContract only → `0.2.0-oa`. Pack baseline other objects stay `0.1.0-oa`.

## Tests

`node --test projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs` (ajv@6 from app/node_modules; no package.json change).

## Reserves

| ID | State |
|----|-------|
| B5 · R1 · R-T-A3-1..4 | **OPEN** (inherited) |
| R-T-A4-1 | **RESOLVED BY MODELED REWORK** (schema+cmd+event coherent) — not globally CLOSED before validation |
| R-T-A4-2 | **RESOLVED BY MORRIS DECISION + MODELED ALIGNMENT** |
| R-T-A4-3 | **RESOLVED BY CANONICAL T-A3 MAPPING** |

## Impact on runtime resume

T-A4 runtime delivery **may** resume only after gate:

`GO VALIDATION MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT`

then a fresh GO DELIVERY. No runtime in this cycle.

## Dette

- Self-supersession / reverse-link / Critical ack / decision freshness remain runtime semantic checks.
- Dual-context `CancelExecution` kept (documented) — optional future split.
- Attempt / agent schemas still `0.1.0-oa` (T-A5).
