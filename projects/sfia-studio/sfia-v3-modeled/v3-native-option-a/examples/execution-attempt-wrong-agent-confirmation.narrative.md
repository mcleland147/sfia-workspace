# Narrative — wrong agent / contract confirmation (runtime-only)

`agentConfirmationRef` may structurally exist while Confirmation points at a different agent or a different `executionContractVersion`.

Schema requires presence of `agentConfirmationRef` for human_confirmed_proposal beyond accepted; it cannot bind Confirmation content.

Runtime MUST refuse Start when Confirmation scope ≠ `agent_selection`, selected agent ≠ confirmed agent, or contract version mismatch.
