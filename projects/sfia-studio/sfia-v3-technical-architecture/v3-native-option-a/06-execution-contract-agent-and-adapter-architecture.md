# 06 — ExecutionContract, agent, adaptateur

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `06-execution-contract-agent-and-adapter-architecture.md` |

## Séparation F / G

Execution Governance (F) construit/valide/confirme contrat.
Execution Adapter (G) exécute Attempt sans muter action/scope/authority/capabilities/stops/evidenceRequirements.
MD Cursor = export secondaire.

## Flux

Build → schema validate → semantic validate → authority/capability → confirmation → persist immutable → select agent → Attempt → result/timeout → Evidence.

## AgentCapability / AgentAuthority

Registre versionné capabilities (scope, constraints, provider).
Authority policies deny-by-default (acteur/agent/action/scope/durée/source).
Aucun agent ne s’octroie son autorité. Cache invalidable + audit.

## Ports

ExecutionContractRepositoryPort · AgentRegistryPort · AgentExecutionPort · AuthorityResolverPort.
