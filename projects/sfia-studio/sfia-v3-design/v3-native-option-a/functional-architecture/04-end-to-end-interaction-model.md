# 04 — Modèle d’interaction de bout en bout

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `04-end-to-end-interaction-model.md` |

## Séquence Option A (20 interactions)

| # | Étape | Initiateur | Destinataire | Commande | Événement | Avant→Après | Autorité | Erreurs |
|---|-------|------------|--------------|----------|-----------|-------------|----------|---------|
| 1 | Intention | User/A | A | SubmitIntent | IntentSubmitted | session→intent captured | user | — |
| 2 | Doctrine | A | B | ResolveDoctrinePackage | DoctrinePackageResolved/Failed | no pin→pin\|stop | system | DOCTRINE_UNRESOLVED |
| 3 | Contexte | A/B | B | ResolveProjectContext | (context ready) | — | system | CONTEXT_STALE |
| 4 | Qualification proposée | A/B/C | D | ProposeCycleQualification | CycleQualificationProposed | →proposed | cognitive | — |
| 5 | Ack Critical | User | E/D | AcknowledgeCycleQualification | CycleQualificationAcknowledged | proposed→acked | Morris/user | DECISION_REQUIRED (FD-OA-03) |
| 6 | CKC | D/B | B | ResolveCkc | CkcResolved | — | system | CKC_UNAVAILABLE |
| 7 | Clarification | B/A | User/A | RequestClarification | ClarificationRequested | — | cognitive | INSUFFICIENT_EVIDENCE |
| 8 | LPS | A/E | C | CreateProject / UpdateLivingProjectState | ProjectCreated / LpsVersioned | draft→active* | N2 si new (FD-OA-02) | STATE_CONFLICT |
| 9 | Trajectoire | C/D | D | ProposeTrajectory | TrajectoryProposed | →candidate | cognitive | — |
| 10 | Options/reco | D | E/User | (present) | EpistemicItemRecorded | — | cognitive | abstention OK |
| 11 | Décision | User | E | RecordHumanDecision | HumanDecisionRecorded | — | Morris/user | — |
| 12 | Confirmation | E | User | RequestConfirmation | ConfirmationRequested/Granted/Expired | — | N1–N3 | CONFIRMATION_REQUIRED |
| 13 | Contrat | E | F | BuildExecutionContract | ExecutionContractBuilt | draft→proposed | system | — |
| 14 | Validate/confirm contrat | E/F | F | ValidateExecutionContract + Confirm | ExecutionContractConfirmed | →confirmed | N-level | AUTHORITY_DENIED |
| 15 | Agent | F | F | SelectExecutionAgent | — | — | system | CAPABILITY_MISSING |
| 16 | Exécution | F | G | StartExecution | ExecutionStarted/Failed/Completed | confirmed→executing→… | agent borné | TIMEOUT/FAILED |
| 17 | Evidence | G/H | H | AttachEvidence | EvidenceAttached | — | system | EVIDENCE_INCOMPLETE |
| 18 | ReviewBundle | H | H | BuildReviewBundle | ReviewBundleCompleted | — | system | incomplete |
| 19 | Claim | H | C | EvaluateClaim | ClaimRejected\|(allowed) | — | anti-claim | ClaimRejected |
| 20 | LPS + next | H/C/D | C/D | Update LPS / ProposeNextCycle / Replan | LpsVersioned / NextCycleProposed / TrajectoryReplanned | état à jour | selon effet | REPLAN_REQUIRED |

\* LPS actif seulement après DoctrinePackageRef + N2 pour nouveau Project (FD-OA-02).

## Preuves / stops

Chaque étape structurante produit correlationId + domain IDs. Stops : voir conception `08` + AF `07`.
