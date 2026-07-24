# 09 — Commandes, événements, erreurs, transitions

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Rework gate** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (pack baseline)** | `0.1.0-oa` |
| **ExecutionContract schemaVersion** | `0.2.0-oa` (breaking T-A4 rework) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `09-command-event-error-and-transition-catalog.md` |
| **Alignement** | AF `05-state-command-event-and-decision-model.md` · T-A4 Morris arbitration |

## Commandes (conceptuelles, non endpoints)

StartConversation · SubmitIntent · ResolveDoctrinePackage · ResolveProjectContext · ProposeCycleQualification · AcknowledgeCycleQualification · ResolveCkc · RequestClarification · RecordEpistemicItem · CreateProject · UpdateLivingProjectState · ProposeTrajectory · ReplanTrajectory · RecordHumanDecision · RequestConfirmation · ConfirmAction · CancelAction · BuildExecutionContract · ValidateExecutionContract · ConfirmExecutionContract · SupersedeExecutionContract · SelectExecutionAgent · StartExecution · CancelExecution · RecordExecutionResult · AttachEvidence · BuildReviewBundle · EvaluateClaim · CloseCycleInstance · ProposeNextCycle.

Pour chacune : initiateur domaine · agrégat cible · préconditions · autorité · confirmation éventuelle · événements · erreurs.

### Ownership ExecutionContract (T-A4 / T-A5) — Morris VALIDATED

| Commande | Owner | Notes |
|----------|-------|-------|
| `BuildExecutionContract` | **T-A4** | Crée draft/proposed ; **ne consomme pas** Confirmation |
| `ValidateExecutionContract` | **T-A4** | Validation structurelle (+ passage `validated` / `confirmation_required`) ; **ne consomme pas** Confirmation ; **ne produit pas** `confirmed` |
| `ConfirmExecutionContract` | **T-A4** | Passage à `confirmed` ; **consomme** Confirmation T-A3 (unique) ; exige `confirmationRef` |
| `SupersedeExecutionContract` | **T-A4** | Nouveau contrat + `supersedesExecutionContractId` ; ancien → `superseded` |
| `CancelExecution` (pre-exec) | **T-A4** | Annule contrat avant `executing` (`cancelled`) |
| `SelectExecutionAgent` | **T-A5** | Pose `selectedAgentRef` |
| `StartExecution` | **T-A5** | `confirmed` → `executing` |
| `CancelExecution` (post-start) | **T-A5** | Annule attempt / exécution démarrée |
| `RecordExecutionResult` | **T-A5** | `executing` → `completed` \| `failed` |

`CancelExecution` est **dual-context** : un seul nom catalogue ; contexte pré-exécution = T-A4 (contrat) ; contexte post-démarrage = T-A5 (attempt/exécution). Pas de split `CancelExecutionContract` / `CancelExecutionAttempt` tant que la dualité reste documentée.

Noms inventés du prompt initial (`RecordExecutionContract`, `ExecutionScope`, `AuthorizedAction`) **ne sont pas** des commandes/types catalog — le catalogue prime (T-A4-D09).

### ConfirmExecutionContract (ajout T-A4 rework)

| Champ | Valeur |
|-------|--------|
| Agrégat | ExecutionContract |
| Préconditions | status ∈ {`validated`,`confirmation_required`} ; Confirmation T-A3 grantée, non expirée, non consommée ; décision source accepted + courante ; Critical ack si cycle Critical |
| Source → cible | `validated`\|`confirmation_required` → `confirmed` |
| Autorité | `requiredAuthority` vérifiée via T-A3 |
| Confirmation | **consommée** (unique) |
| Événement | `ExecutionContractConfirmed` |
| Erreurs | `CONFIRMATION_REQUIRED` · `AUTHORITY_DENIED` · `DECISION_REQUIRED` · `STATE_CONFLICT` |
| Hors périmètre | StartExecution · agent selection |

### SupersedeExecutionContract (ajout T-A4 rework)

| Champ | Valeur |
|-------|--------|
| Agrégat | ExecutionContract |
| Préconditions | ancien contrat non terminal d’exécution exclusive ; raison non vide ; nouvel `executionContractId` |
| Effet | crée successeur avec `supersedesExecutionContractId` + `supersessionReason` ; marque ancien `superseded` + `supersessionReason` |
| Événement | `ExecutionContractSuperseded` |
| Owner | **T-A4** |
| Runtime invariants | no self-supersession ; reverse link dérivé ; contenu confirmé immutable |

## Événements (extrait)

IntentSubmitted · DoctrinePackageResolved/Failed · ProjectMatched/Created · CycleQualificationProposed/Acknowledged · CkcResolved · EpistemicItemRecorded · ContradictionDetected · LivingProjectStateVersioned · TrajectoryProposed/Replanned · HumanDecisionRecorded/Superseded · ConfirmationRequested/Granted/Expired · ExecutionContractBuilt · ExecutionContractValidated · ExecutionContractConfirmationRequired · ExecutionContractConfirmed · ExecutionContractSuperseded · ExecutionContractCancelled · ExecutionStarted/Failed/Completed · EvidenceAttached · ReviewBundleCompleted · ClaimRejected · CycleInstanceClosed · NextCycleProposed.

### Événements ExecutionContract (T-A4 rework)

| Événement | Owner | Déclencheur typique |
|-----------|-------|---------------------|
| `ExecutionContractBuilt` | T-A4 | BuildExecutionContract |
| `ExecutionContractValidated` | T-A4 | ValidateExecutionContract → validated |
| `ExecutionContractConfirmationRequired` | T-A4 | ValidateExecutionContract → confirmation_required |
| `ExecutionContractConfirmed` | T-A4 | ConfirmExecutionContract |
| `ExecutionContractSuperseded` | T-A4 | SupersedeExecutionContract |
| `ExecutionContractCancelled` | T-A4 (pre-exec) / T-A5 (post-start) | CancelExecution |
| `ExecutionStarted` / `ExecutionFailed` / `ExecutionCompleted` | **T-A5** | Start / RecordResult |

Payload conceptuel minimal (pas de secrets) : `aggregateId` · `executionContractId` · `projectId` · `correlationId` · `causationId?` · actor/provenance · `previousStatus` · `newStatus` · superseded/replacement ids · `reason?` · authority class · `confirmationRef?` si confirmed.

## Matrice transitions ExecutionContract (canonique T-A4/T-A5)

| Source | Commande | Cible | Owner | Autorité | Confirmation | Decision | Critical | Événement | Terminal? |
|--------|----------|-------|-------|----------|--------------|----------|----------|-----------|-----------|
| (new) | BuildExecutionContract | draft\|proposed | T-A4 | requiredAuthority | non | ≥1 structurante | fail-closed si Critical non-ack pour confirm ultérieur | ExecutionContractBuilt | non |
| draft\|proposed | ValidateExecutionContract | validated | T-A4 | vérif | non | courante | idem | ExecutionContractValidated | non |
| validated | ValidateExecutionContract | confirmation_required | T-A4 | vérif | non (détecte besoin) | courante | idem | ExecutionContractConfirmationRequired | non |
| validated | ConfirmExecutionContract | confirmed | T-A4 | vérif | **consomme** si déjà grantée et règles OK | accepted+courante | **bloqué** si Critical non-ack | ExecutionContractConfirmed | non |
| confirmation_required | ConfirmExecutionContract | confirmed | T-A4 | vérif | **consomme** | accepted+courante | **bloqué** si Critical non-ack | ExecutionContractConfirmed | non |
| *pre-exec* | SupersedeExecutionContract | superseded (+ nouveau) | T-A4 | vérif | n/a | n/a | n/a | ExecutionContractSuperseded | ancien oui |
| *pre-exec* | CancelExecution | cancelled | T-A4 | vérif | n/a | n/a | n/a | ExecutionContractCancelled | oui |
| confirmed | StartExecution | executing | **T-A5** | vérif | déjà consommée | fraîcheur runtime | ack requis | ExecutionStarted | non |
| executing | RecordExecutionResult | completed\|failed | **T-A5** | — | — | — | — | ExecutionCompleted/Failed | oui |
| executing | CancelExecution | cancelled\|failed per policy | **T-A5** | — | — | — | — | ExecutionContractCancelled | oui |

Aucune transition vers `executing` sous T-A4.

## Erreurs (14)

Voir `schemas/error/error-record.schema.json` enum complète. Toutes bloquantes sauf info/warning non gating.

## Transitions LPS

active --stale--> stale ; active --conflict--> conflict ; * --version--> superseded + new active.
