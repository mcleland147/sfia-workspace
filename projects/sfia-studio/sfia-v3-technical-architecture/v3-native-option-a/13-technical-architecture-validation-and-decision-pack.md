# 13 — Decision pack AT + ADR candidates

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `13-technical-architecture-validation-and-decision-pack.md` |

## ADR candidates (proposed)

| ADR | Sujet | Proposition |
|-----|-------|-------------|
| ADR-OA-01 | Style | Hybride Option C |
| ADR-OA-02 | Persistance LPS | Snapshot versionné + event/audit journal |
| ADR-OA-03 | Evidence | Metadata TX + blob store |
| ADR-OA-04 | Validation | Schema ajv + semantic policies |
| ADR-OA-05 | Events | In-process + outbox TX ; pas broker P0 |
| ADR-OA-06 | Execution | F governance / G adapter ; MD non natif |
| ADR-OA-07 | Cap/Auth | Registry + deny-by-default |
| ADR-OA-08 | Obs/Audit | correlationId ; audit séparé |
| ADR-OA-09 | Legacy | Anti-corruption OPS1 |
| ADR-OA-10 | Cutover | Ordre T-A0…T-A7 |

## Décisions candidates AT-OA

| Id | Proposition | Statut |
|----|-------------|--------|
| AT-OA-01 | Valider pack AT Option A | candidate |
| AT-OA-02 | Style hybride Option C | candidate |
| AT-OA-03 | Project identité + LPS versionné | candidate |
| AT-OA-04 | Snapshot + journal | candidate |
| AT-OA-05 | DoctrinePackage digest fail-closed | candidate |
| AT-OA-06 | Evidence hybride metadata+blob | candidate |
| AT-OA-07 | Schema + sémantique | candidate |
| AT-OA-08 | Events in-process/outbox | candidate |
| AT-OA-09 | Capability/authority séparées | candidate |
| AT-OA-10 | Observabilité + audit | candidate |
| AT-OA-11 | Isolation legacy | candidate |
| AT-OA-12 | Ordre T-A0…T-A7 | candidate |
| AT-OA-13 | Pas READY FOR DELIVERY tant que non validé Morris | candidate |
| AT-OA-14 | Gates cutover v2.6 | candidate |

## Ports (catalogue)

DoctrinePackageResolverPort · CkcResolverPort · ProjectRepositoryPort · LivingProjectStateRepositoryPort · DecisionRepositoryPort · ConfirmationRepositoryPort · ExecutionContractRepositoryPort · EvidenceRepositoryPort · ReviewBundleRepositoryPort · AuditJournalPort · EventPublisherPort · AgentRegistryPort · AgentExecutionPort · AuthorityResolverPort · SchemaValidationPort · SemanticValidationPort · ClockPort · IdGeneratorPort.

## Inconnues / hypothèses / réserves / dette

U-AT01 IAM provider · U-AT02 DB prod finale · U-AT03 rétention RGPD · hypothèses volumétrie doc 04 · réserves modeled R-M* · dette MethodMode/OPS1/runtime context.

## Maturité

AT **DOCUMENTED candidate**. Pas VALIDATED. Pas delivery.

## Gate suivant

`GO VALIDATION ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE OPTION A`
puis `GO DELIVERY OPTION A — T-A0` (non consommé).

## Verdict

**SFIA STUDIO V3-NATIVE OPTION A TECHNICAL ARCHITECTURE DOCUMENTED — MORRIS VALIDATION REQUIRED**
