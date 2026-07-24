# 02 — Entités, value objects et identifiants

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `02-core-entities-value-objects-and-identifiers.md` |

## Stratégie ID (M-OA-03 candidate)

Format : `prefix:opaque` (ex. `prj:campus360-oa`, `lps:…`, `dec:…`).
Stables · explicites · pas de path local métier · digest pour packages immuables · correlationId bout-en-bout · supersession via champs `supersedes*`.

| ID | Préfixe |
|----|---------|
| projectId | `prj:` |
| lpsVersionId | `lps:` |
| doctrinePackageId | `pkg:` |
| ckcResolutionId | `ckc:` |
| cycleTypeId | `cty:` |
| cycleInstanceId | `cyc:` |
| trajectoryId | `traj:` |
| epistemicItemId | `epi:` |
| decisionId | `dec:` |
| confirmationId | `cnf:` |
| executionContractId | `xct:` |
| executionAttemptId | `xat:` |
| evidenceId | `ev:` |
| reviewBundleId | `rb:` |
| claimEvaluationId | `clm:` |
| debtItemId | `debt:` |
| provenanceRecordId | `prov:` |
| auditEventId | `aud:` |
| errorRecordId | `err:` |

## Catalogue objets

Project · ProjectRef · DoctrinePackageManifest · DoctrinePackageRef · DoctrineSourceRef · CkcResolution · CkcRef · CycleType · CycleInstance · LivingProjectState · LivingProjectStateVersion · ProjectTrajectory · TrajectoryStep · EpistemicItem (+ Observation/Hypothesis/Option/Recommendation/Contradiction) · HumanDecision · DecisionOption · DecisionReservation · Confirmation · ExecutionContract · ExecutionAttempt · AgentCapability · AgentAuthority · Evidence · EvidenceRequirement · ReviewBundle · ClaimEvaluation · DebtItem · RiskItem · ProvenanceRecord · AuditEvent · MaturityAssessment · ErrorRecord.

Cardinalités clés : Project 1—1..* LPS versions · Project 0..1 active CycleInstance · Decision 1—1..* Options · Contract 1—0..* Attempts · Bundle 0..* Evidence.
