# 05 — État, commandes, événements et décisions

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `05-state-command-event-and-decision-model.md` |

## 1. Architecture LPS (décision candidate FA-OA-01)

**Proposition :** LPS = **agrégat logique unique** ownership **domaine C**, alimenté par contributions bornées des autres domaines (événements validés).
Ce n’est **pas** une simple projection UI ; le panneau est une **vue** de l’agrégat.

Statut : **candidate** jusqu’à validation Morris AF.

### Sous-domaines LPS

identité · doctrineRef · objectifs/contexte/périmètre · épistémique · trajectoireRef · cycles · gates · dette · preuves · nextStep · maturité · historique/provenance.

Invariants : conception `04` + FD-OA-02 (pas d’actif sans packageRef).

## 2. Commandes fonctionnelles (catalogue)

StartConversation · SubmitIntent · ResolveDoctrinePackage · ResolveProjectContext · ProposeCycleQualification · AcknowledgeCycleQualification · ResolveCkc · RequestClarification · RecordEpistemicItem · CreateProject · UpdateLivingProjectState · ProposeTrajectory · ReplanTrajectory · RecordHumanDecision · RequestConfirmation · ConfirmAction · CancelAction · BuildExecutionContract · ValidateExecutionContract · SelectExecutionAgent · StartExecution · CancelExecution · RecordExecutionResult · AttachEvidence · BuildReviewBundle · EvaluateClaim · CloseCycleInstance · ProposeNextCycle

Ce ne sont **pas** des endpoints.

## 3. Événements fonctionnels

| Événement | Producteur | Consommateurs | Audit | LPS impact |
|-----------|------------|---------------|-------|------------|
| IntentSubmitted | A | B,C | oui | optional note |
| DoctrinePackageResolved/Failed | B | A,C | oui | pin / stop |
| ProjectMatched/Created | C | A,D | oui | create/link |
| CycleQualificationProposed/Acknowledged | D/E | C,A | oui | cycle status |
| CkcResolved | B | A,D | oui | trace only |
| ClarificationRequested | A | User | oui | — |
| EpistemicItemRecorded | C/A | E,D | oui | items |
| ContradictionDetected | C | E,A | oui | contradiction |
| LivingProjectStateVersioned | C | all readers | oui | version++ |
| TrajectoryProposed/Replanned | D | E,C | oui | traj ref |
| HumanDecisionRecorded/Superseded | E | C,F,D | oui | decisions |
| ConfirmationRequested/Granted/Expired | E | F,User | oui | — |
| ExecutionContractBuilt/Confirmed | F | G,C | oui | contract link |
| ExecutionStarted/Failed/Completed | G | F,H,C | oui | actions |
| EvidenceAttached | H | C,F | oui | evidence |
| ReviewBundleCompleted | H | C | oui | bundle ref |
| ClaimRejected | C/H | A,E | oui | block claim |
| CycleInstanceClosed | D | C | oui | cycle closed |
| NextCycleProposed | D | A,E | oui | next step |

Caractère rejouable : événements audit append-only ; replay fonctionnel ≠ mutation auto.

## 4. Décision / confirmation (domaine E)

HumanDecision ownership E.
Gate visible.
N1/N2/N3 via Confirmation Manager.
Pas de duplication d’autorité avec Conversation ou Trajectory (ils proposent seulement).
