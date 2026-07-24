# 02 — Canonical contract mapping

| Champ | Valeur |
|-------|--------|
| **Source of truth (modeled)** | `schemas/execution/execution-contract.schema.json` |
| **schemaVersion** | `0.1.0-oa` (const) |
| **Statut** | Mapping only — **no runtime adoption** |
| **Schemas modified this cycle** | **NONE** |

Schema path (tech WT):  
`projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json`

Description (schema verbatim): *Native structured contract (domain F). Cursor Markdown is adapter export only (domain G). Immutable after confirmed except explicit supersession.*

## Required fields (schema `required` array, verbatim)

| Field | Schema type / constraint |
|-------|--------------------------|
| `schemaVersion` | string const `0.1.0-oa` |
| `executionContractId` | `$ref` identifier |
| `projectId` | `$ref` identifier |
| `action` | string minLength 1 |
| `target` | string minLength 1 |
| `scope` | string minLength 1 |
| `requiredCapabilities` | array minItems 1 of identifier |
| `requiredAuthority` | string minLength 1 (**no enum**) |
| `constraints` | array minItems 1 of string |
| `stopConditions` | array minItems 1 of string |
| `evidenceRequirements` | array minItems 1 of identifier |
| `reversibility` | enum `reversible` \| `partially_reversible` \| `irreversible` |
| `idempotencyKey` | string minLength 8 |
| `correlationId` | `$ref` identifier |
| `status` | enum (see § status) |
| `version` | integer minimum 1 |

## Optional properties present on schema

| Field | Schema type / constraint |
|-------|--------------------------|
| `cycleInstanceId` | `$ref` identifier |
| `decisionRefs` | array of identifier |
| `confirmationRef` | `$ref` identifier |
| `doctrinePackageRef` | `$ref` doctrine-package-ref |
| `inputs` | object |
| `expectedOutputs` | array of string |
| `selectedAgentRef` | `$ref` identifier |
| `adapterExportRef` | string — *Secondary Cursor Markdown export — never native contract* |
| `immutableAfterConfirm` | boolean const `true` |
| `provenance` | `$ref` provenance-record |

`additionalProperties`: **false**.

## Status enum (verbatim)

`draft` · `proposed` · `validated` · `confirmation_required` · `confirmed` · `executing` · `completed` · `failed` · `cancelled` · `superseded`

## Absences (blocking for T-A4 exit criteria)

| Expected by exit / modeling narrative | Present on ExecutionContract schema? |
|---------------------------------------|--------------------------------------|
| `supersedes` / `supersedesExecutionContractId` / any `supersedes*` | **NO** |
| Successor / predecessor link for supersession | **NO** |
| Closed vocabulary / enum for `requiredAuthority` | **NO** (free string) |
| `SupersedeExecutionContract` command | **NO** (catalog) |
| Types `ExecutionScope`, `AuthorizedAction` | **NO** (not modeled) |
| Command `RecordExecutionContract` | **NO** (catalog uses `BuildExecutionContract`) |

Contrast: `HumanDecision` schema **does** define `supersedes` (`$ref` identifier). LPS / Trajectory / Epistemic likewise use `supersedes*` fields. ExecutionContract has status `superseded` only.

## Example binding (modeled example, not runtime)

`examples/execution-contract.valid.json` uses e.g. `requiredAuthority: "morris-N3"`, `status: "confirmed"`, `immutableAfterConfirm: true` — illustrative only; does not close vocabulary.

## Mapping rule for delivery (when unblocked)

Runtime must map **only** fields that exist on this schema. Closing gaps requires Morris decision + modeled rework — **not** silent invention in `app/lib/oa/execution*`.
