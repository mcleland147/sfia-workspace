# T-A5 ownership marker — ExecutionContract execution statuses

Objects with `status` in `executing` | `completed` | `failed`, or with `selectedAgentRef` set, are **T-A5-owned** lifecycle surfaces on the shared ExecutionContract schema.

T-A4 modeled rework keeps these enum values (single schema Option A) but **must not produce** them.

Illustrative shape only (not a governance fixture for T-A4):

```json
{
  "schemaVersion": "0.2.0-oa",
  "executionContractId": "xct:oa-ta5-marker",
  "status": "executing",
  "selectedAgentRef": "agent:cursor-docs",
  "requiredAuthority": "N3",
  "_ownership": "T-A5 — do not emit from T-A4 Build/Validate/Confirm/Supersede/Cancel(pre-exec)"
}
```

Full required fields omitted on purpose — this file is an ownership comment, not an ajv fixture.
