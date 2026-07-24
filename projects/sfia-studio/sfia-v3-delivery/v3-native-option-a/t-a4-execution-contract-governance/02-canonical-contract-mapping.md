# 02 — Canonical contract mapping

| Champ | Valeur |
|-------|--------|
| **Source of truth (modeled)** | `schemas/execution/execution-contract.schema.json` |
| **schemaVersion** | `0.2.0-oa` (const) — was `0.1.0-oa` |
| **Statut** | **MODELED REWORK COMPLETED — runtime not started** |
| **Schemas modified this cycle** | ExecutionContract (+ examples/catalog/docs) |

Schema path:  
`projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json`

## Required fields

| Field | Constraint |
|-------|------------|
| `schemaVersion` | const `0.2.0-oa` |
| `executionContractId` | `$ref` identifier |
| `projectId` | `$ref` identifier |
| `action` / `target` / `scope` | string minLength 1 |
| `requiredCapabilities` | array minItems 1 of identifier |
| `requiredAuthority` | enum `N1` \| `N2` \| `N3` \| `MORRIS` |
| `constraints` / `stopConditions` | array minItems 1 |
| `evidenceRequirements` | array minItems 1 of identifier |
| `reversibility` | enum reversible \| partially_reversible \| irreversible |
| `idempotencyKey` | string minLength 8 |
| `correlationId` | `$ref` identifier |
| `status` | enum (see below) |
| `version` | integer minimum 1 |

## Optional / conditional

| Field | Constraint |
|-------|------------|
| `cycleInstanceId` | identifier |
| `decisionRefs` | array ; **required minItems 1 when status=confirmed** |
| `confirmationRef` | identifier ; **required when status=confirmed** (consumed Confirmation) |
| `doctrinePackageRef` | doctrine-package-ref |
| `inputs` / `expectedOutputs` | object / string[] |
| `selectedAgentRef` | identifier — **T-A5 only** |
| `supersedesExecutionContractId` | identifier ∧ pattern `^xct:` |
| `supersessionReason` | string minLength 1 ; **required if supersedes* present OR status=superseded** |
| `adapterExportRef` | string |
| `immutableAfterConfirm` | const true |
| `provenance` | provenance-record |

`additionalProperties`: **false**.

## Status enum

`draft` · `proposed` · `validated` · `confirmation_required` · `confirmed` · `executing` · `completed` · `failed` · `cancelled` · `superseded`

Ownership: T-A4 through confirmed (+ cancelled pre-exec, superseded); T-A5 owns executing/completed/failed.

## Before / after (breaking)

| | `0.1.0-oa` | `0.2.0-oa` |
|--|------------|-----------|
| Authority | free string (e.g. `morris-N3`) | closed enum |
| Supersession | status only | forward id + reason |
| Confirm | no structural consume | confirmationRef + Confirm command |

## Mapping rule for future runtime

Runtime maps **only** fields on this schema. Semantic invariants (self-supersession, Critical ack, decision freshness, reverse link) remain runtime.
