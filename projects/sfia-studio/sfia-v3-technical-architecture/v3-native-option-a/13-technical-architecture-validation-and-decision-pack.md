# 13 — Decision pack AT + ADR candidates

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **VALIDATED BY MORRIS** |
| **Gate validation** | `GO VALIDATION ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE OPTION A` |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas READY FOR DELIVERY global · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas T-A0 STARTED · Pas OPTION A IMPLEMENTED |
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
| AT-OA-01 | Valider pack AT Option A | **VALIDATED** |
| AT-OA-02 | Style hybride Option C | **VALIDATED** |
| AT-OA-03 | Project identité + LPS versionné | **VALIDATED** |
| AT-OA-04 | Snapshot + journal | **VALIDATED** |
| AT-OA-05 | DoctrinePackage digest fail-closed | **VALIDATED** |
| AT-OA-06 | Evidence hybride metadata+blob | **VALIDATED** |
| AT-OA-07 | Schema + sémantique | **VALIDATED** |
| AT-OA-08 | Events in-process/outbox | **VALIDATED** |
| AT-OA-09 | Capability/authority séparées | **VALIDATED** |
| AT-OA-10 | Observabilité + audit | **VALIDATED** |
| AT-OA-11 | Isolation legacy | **VALIDATED** |
| AT-OA-12 | Ordre T-A0…T-A7 | **VALIDATED** |
| AT-OA-13 | Pas READY FOR DELIVERY tant que non validé Morris | **VALIDATED** |
| AT-OA-14 | Gates cutover v2.6 | **VALIDATED** |

*AT-OA-01…14 = **VALIDATED BY MORRIS** (ADR restent proposed pour détails d’implémentation futurs).*

## Ports (catalogue)

DoctrinePackageResolverPort · CkcResolverPort · ProjectRepositoryPort · LivingProjectStateRepositoryPort · DecisionRepositoryPort · ConfirmationRepositoryPort · ExecutionContractRepositoryPort · EvidenceRepositoryPort · ReviewBundleRepositoryPort · AuditJournalPort · EventPublisherPort · AgentRegistryPort · AgentExecutionPort · AuthorityResolverPort · SchemaValidationPort · SemanticValidationPort · ClockPort · IdGeneratorPort.

## Inconnues / hypothèses / réserves / dette

U-AT01 IAM provider · U-AT02 DB prod finale · U-AT03 rétention RGPD · hypothèses volumétrie doc 04 · réserves modeled R-M* · dette MethodMode/OPS1/runtime context.

## Maturité

AT **VALIDATED BY MORRIS**. Pas READY FOR DELIVERY global. T-A0 non lancé. Schemas non adoptés runtime.

## Gate suivant

Validation AT consommée.
Après merge PR foundation : cadrage `GO DELIVERY OPTION A — T-A0` (non consommé ici).

## Verdict

**SFIA STUDIO V3-NATIVE OPTION A TECHNICAL ARCHITECTURE VALIDATED BY MORRIS**

*AT-OA-01…14 = **VALIDATED BY MORRIS**. Option C et ordre T-A0…T-A7 retenus. Réserves DB/IAM/volumétrie/RGPD/Evidence retention maintenues. T-A0 peut être cadré après merge PR — **non lancé ici**. Pas READY FOR DELIVERY global. Aucune implémentation. Aucun cutover v2.6.*
