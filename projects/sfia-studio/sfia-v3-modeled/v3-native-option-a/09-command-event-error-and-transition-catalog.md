# 09 — Commandes, événements, erreurs, transitions

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Rework gate T-A4** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **Materialize gate T-A5** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (pack baseline)** | `0.1.0-oa` |
| **ExecutionContract schemaVersion** | `0.2.0-oa` (breaking T-A4 rework) |
| **ExecutionAttempt schemaVersion** | `0.2.0-oa` (breaking T-A5 materialization) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME · Pas T-A5 RUNTIME |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `09-command-event-error-and-transition-catalog.md` |
| **Alignement** | AF `05-state-command-event-and-decision-model.md` · T-A4 Morris arbitration · T-A5 Morris D01–D10 |

## Commandes (conceptuelles, non endpoints)

StartConversation · SubmitIntent · ResolveDoctrinePackage · ResolveProjectContext · ProposeCycleQualification · AcknowledgeCycleQualification · ResolveCkc · RequestClarification · RecordEpistemicItem · CreateProject · UpdateLivingProjectState · ProposeTrajectory · ReplanTrajectory · RecordHumanDecision · RequestConfirmation · ConfirmAction · CancelAction · BuildExecutionContract · ValidateExecutionContract · ConfirmExecutionContract · SupersedeExecutionContract · SelectExecutionAgent · StartExecution · CancelExecution · CancelExecutionAttempt · RecordExecutionResult · RecordExecutionFailure · RetryExecutionAttempt · GetExecutionAttempt · ListExecutionAttempts · CheckAttemptAuthorization · AttachEvidence · BuildReviewBundle · EvaluateClaim · CloseCycleInstance · ProposeNextCycle.

Pour chacune : initiateur domaine · agrégat cible · préconditions · autorité · confirmation éventuelle · événements · erreurs.

### Ownership ExecutionContract (T-A4 / T-A5) — Morris VALIDATED T-A4 + T-A5 materialization

| Commande | Owner | Notes |
|----------|-------|-------|
| `BuildExecutionContract` | **T-A4** | Crée draft/proposed ; **ne consomme pas** Confirmation |
| `ValidateExecutionContract` | **T-A4** | Validation structurelle ; **ne consomme pas** Confirmation ; **ne produit pas** `confirmed` |
| `ConfirmExecutionContract` | **T-A4** | Passage à `confirmed` ; **consomme** Confirmation T-A3 (unique) |
| `SupersedeExecutionContract` | **T-A4** | Nouveau contrat + `supersedesExecutionContractId` ; ancien → `superseded` |
| `CancelExecution` (pre-exec) | **T-A4** | Annule contrat avant `executing` (`cancelled`) |
| `SelectExecutionAgent` | **T-A5** | Propose/sélectionne agent ; TTL ; **ne démarre pas** |
| `StartExecution` | **T-A5** | Revalide ; persist Attempt `accepted` puis autorise launch ; `running` + contrat `executing` |
| `CancelExecution` (post-start) | **T-A5** | Alias catalogue de `CancelExecutionAttempt` (dual-context) |
| `CancelExecutionAttempt` | **T-A5** | Nom préféré post-start ; best-effort |
| `RecordExecutionResult` | **T-A5** | Adaptateur lié à **son** Attempt ; technique only |
| `RecordExecutionFailure` | **T-A5** | Fusionnable dans RecordResult (même sémantique terminal failed) |
| `RetryExecutionAttempt` | **T-A5** | Nouvel Attempt + `retryOfAttemptId` + auth explicite |
| `GetExecutionAttempt` / `ListExecutionAttempts` | **T-A5** | Lecture |
| `CheckAttemptAuthorization` | **T-A5** | Lecture / prédicat ; ne mute pas |

`CancelExecution` est **dual-context** : un seul nom catalogue historique ; contexte pré-exécution = T-A4 (contrat) ; contexte post-démarrage = T-A5. Alias documenté : `CancelExecutionAttempt` = `CancelExecution` (post-start). Pas de split schema obligatoire tant que la dualité reste documentée.

Noms inventés hors catalogue **ne sont pas** des commandes (T-A4-D09).

### ConfirmExecutionContract (T-A4 rework)

| Champ | Valeur |
|-------|--------|
| Agrégat | ExecutionContract |
| Préconditions | status ∈ {`validated`,`confirmation_required`} ; Confirmation T-A3 grantée ; décision accepted ; Critical ack si Critical |
| Source → cible | `validated`\|`confirmation_required` → `confirmed` |
| Autorité | `requiredAuthority` via T-A3 |
| Confirmation | **consommée** (unique) |
| Événement | `ExecutionContractConfirmed` |
| Erreurs | `CONFIRMATION_REQUIRED` · `AUTHORITY_DENIED` · `DECISION_REQUIRED` · `STATE_CONFLICT` |
| Hors périmètre | StartExecution · agent selection |

### SupersedeExecutionContract (T-A4 rework)

| Champ | Valeur |
|-------|--------|
| Agrégat | ExecutionContract |
| Préconditions | raison non vide (`.*\S.*`) ; nouvel `executionContractId` |
| Effet | successeur + ancien `superseded` |
| Événement | `ExecutionContractSuperseded` |
| Owner | **T-A4** |

---

## T-A5 — Commandes détaillées (Morris D01–D10)

| Commande | Agrégat | Acteur / autorité | Inputs clés | Préconditions | Effet | Événements | Erreurs typiques |
|----------|---------|-------------------|-------------|---------------|-------|------------|------------------|
| `SelectExecutionAgent` | Attempt (+ audit) | N≥ `requiredAuthority` ; système **seulement** si non-Critical + `capabilities_deterministic` fermé | contractId+version, strategy/profile, proposed/selected agent | contrat `confirmed` ; agent match caps∩scope | Attempt `accepted` **ou** maj sélection + TTL ; **pas** launch | `ExecutionAgentProposed`, `ExecutionAgentSelected`, `ExecutionAttemptAccepted` | `EXECUTION_CONTRACT_*`, `AGENT_*`, `AGENT_CONFIRMATION_REQUIRED`, `AUTHORITY_DENIED` |
| `StartExecution` | Attempt + Contract | même barre, **relecture** T-A3 | attemptId \| contractId+selection, expectedVersion, idempotencyKey | TTL OK ; Critical ack ; Decision fraîche ; Confirm agent si Critical ; persist `accepted` | persist-then-launch → `running` ; contrat → `executing` | `ExecutionStarted` | `AGENT_SELECTION_EXPIRED`, `CRITICAL_NOT_ACKNOWLEDGED`, `EXECUTION_ALREADY_ACTIVE`, `EXECUTION_PERSISTENCE_FAILED`, `EXECUTION_LAUNCH_*`, `CONCURRENCY_CONFLICT` |
| `CancelExecutionAttempt` | Attempt (+ Contract) | N≥ **ou** Morris emergency | attemptId, reason | attempt non terminal | best-effort cancel → `cancelled` ; contrat `cancelled` | `ExecutionCancellationRequested`, `ExecutionCancelled` / `ExecutionCancellationFailed` | `ATTEMPT_STATE_CONFLICT`, `EXECUTION_CANCEL_FAILED` |
| `RecordExecutionResult` | Attempt (+ Contract) | **adaptateur authentifié lié à son Attempt** | attemptId, resultRef \| error, exitCode | `running` \| `result_pending` | → `succeeded` (+ contrat `completed`) \| `failed` ; ou → `result_pending` si persist Record échoue | `ExecutionSucceeded` / `ExecutionFailed` / `ExecutionResultPending` | `RESULT_RECORDING_FAILED`, `ATTEMPT_STATE_CONFLICT`, `AUTHORITY_DENIED` |
| `RecordExecutionFailure` | Attempt | idem adaptateur | attemptId, errorRef | `running` \| `result_pending` | → `failed` (mergeable RecordResult) | `ExecutionFailed` | idem |
| `RetryExecutionAttempt` | Attempt (new) | auth explicite = Start | priorAttemptId, budget | prior terminal failed\|timeout\|cancelled per policy ; budget restant | **nouvel** Attempt `accepted` + `retryOfAttemptId` | `ExecutionRetryAuthorized`, `ExecutionAttemptAccepted` | `RETRY_NOT_AUTHORIZED`, `RETRY_BUDGET_EXHAUSTED` |
| `GetExecutionAttempt` | Attempt | lecteur autorisé | attemptId | — | lecture | — | `ATTEMPT_NOT_FOUND` |
| `ListExecutionAttempts` | Attempt | lecteur | executionContractId | — | liste | — | `EXECUTION_CONTRACT_*` |
| `CheckAttemptAuthorization` | — | système | attempt/contract context | — | prédicat lecture seule | `ExecutionAuthorizationDenied` (si deny path audité) | `AUTHORITY_DENIED` |

**Invariant persist-then-launch :** aucun launch sans Attempt `accepted` persisté. **launch-then-persist** interdit.

**Anti-claims commandes :** pas d’endpoint HTTP ; pas d’adaptateur appelé ce cycle ; pas d’Evidence/Claim.

---

## Événements (extrait)

IntentSubmitted · DoctrinePackageResolved/Failed · ProjectMatched/Created · CycleQualificationProposed/Acknowledged · CkcResolved · EpistemicItemRecorded · ContradictionDetected · LivingProjectStateVersioned · TrajectoryProposed/Replanned · HumanDecisionRecorded/Superseded · ConfirmationRequested/Granted/Expired · ExecutionContractBuilt · ExecutionContractValidated · ExecutionContractConfirmationRequired · ExecutionContractConfirmed · ExecutionContractSuperseded · ExecutionContractCancelled · ExecutionAgentProposed · ExecutionAgentSelected · ExecutionAttemptAccepted · ExecutionStarted · ExecutionResultPending · ExecutionSucceeded · ExecutionFailed · ExecutionTimedOut · ExecutionCancellationRequested · ExecutionCancelled · ExecutionCancellationFailed · ExecutionAuthorizationDenied · ExecutionRetryAuthorized · EvidenceAttached · ReviewBundleCompleted · ClaimRejected · CycleInstanceClosed · NextCycleProposed.

### Événements ExecutionContract (T-A4)

| Événement | Owner | Déclencheur typique |
|-----------|-------|---------------------|
| `ExecutionContractBuilt` | T-A4 | BuildExecutionContract |
| `ExecutionContractValidated` | T-A4 | Validate → validated |
| `ExecutionContractConfirmationRequired` | T-A4 | Validate → confirmation_required |
| `ExecutionContractConfirmed` | T-A4 | ConfirmExecutionContract |
| `ExecutionContractSuperseded` | T-A4 | SupersedeExecutionContract |
| `ExecutionContractCancelled` | T-A4 (pre-exec) / T-A5 (post-start map) | CancelExecution |

### Événements Attempt / exécution (T-A5)

| Événement | Type | Commande causale | Aggregate | Notes |
|-----------|------|------------------|-----------|-------|
| `ExecutionAgentProposed` | domaine | SelectExecutionAgent | Attempt | Critical path |
| `ExecutionAgentSelected` | domaine | SelectExecutionAgent | Attempt | |
| `ExecutionAttemptAccepted` | domaine | Select / Start (persist) | Attempt | status `accepted` |
| `ExecutionStarted` | domaine | StartExecution | Attempt+Contract | `running` + contrat `executing` |
| `ExecutionResultPending` | technique | Record* (persist fail) | Attempt | contrat **stays `executing`** |
| `ExecutionSucceeded` | domaine | RecordExecutionResult | Attempt+Contract | |
| `ExecutionFailed` | domaine | Record* / safety | Attempt+Contract | |
| `ExecutionTimedOut` | domaine/technique | timeout engine | Attempt+Contract | Attempt `timeout` → contrat `failed` |
| `ExecutionCancellationRequested` | domaine | CancelExecutionAttempt | Attempt | |
| `ExecutionCancelled` | domaine | Cancel ack | Attempt+Contract | |
| `ExecutionCancellationFailed` | technique | Cancel | Attempt | best-effort échec |
| `ExecutionAuthorizationDenied` | technique | Select/Start/Cancel/Record/Retry | — | **N3 ≠ Morris** ; jamais trust client `canActAsMorris` |
| `ExecutionRetryAuthorized` | domaine | RetryExecutionAttempt | Attempt | |

Payload minimal : `aggregateId` · `attemptId` · `executionContractId` · `executionContractVersion` · `correlationId` · `causationId?` · actor/provenance · `previousStatus` · `newStatus` · `agentRef?` · `reason?`. **Interdits :** secrets, tokens, Confirmation complète, authority evidence complète, payloads métier non nécessaires.

---

## Matrice transitions ExecutionContract (canonique T-A4/T-A5)

| Source | Commande | Cible | Owner | Autorité | Confirmation | Decision | Critical | Événement | Terminal? |
|--------|----------|-------|-------|----------|--------------|----------|----------|-----------|-----------|
| (new) | BuildExecutionContract | draft\|proposed | T-A4 | requiredAuthority | non | ≥1 structurante | fail-closed si Critical non-ack pour confirm ultérieur | ExecutionContractBuilt | non |
| draft\|proposed | ValidateExecutionContract | validated | T-A4 | vérif | non | courante | idem | ExecutionContractValidated | non |
| validated | ValidateExecutionContract | confirmation_required | T-A4 | vérif | non | courante | idem | ExecutionContractConfirmationRequired | non |
| validated | ConfirmExecutionContract | confirmed | T-A4 | vérif | **consomme** | accepted+courante | **bloqué** si Critical non-ack | ExecutionContractConfirmed | non |
| confirmation_required | ConfirmExecutionContract | confirmed | T-A4 | vérif | **consomme** | accepted+courante | **bloqué** si Critical non-ack | ExecutionContractConfirmed | non |
| *pre-exec* | SupersedeExecutionContract | superseded (+ nouveau) | T-A4 | vérif | n/a | n/a | n/a | ExecutionContractSuperseded | ancien oui |
| *pre-exec* | CancelExecution | cancelled | T-A4 | vérif | n/a | n/a | n/a | ExecutionContractCancelled | oui |
| confirmed | StartExecution (launch ack) | executing | **T-A5** | vérif | déjà consommée (contrat) ; agent confirm si Critical | fraîcheur runtime | ack requis | ExecutionStarted | non |
| executing | RecordExecutionResult | completed\|failed | **T-A5** | adaptateur lié | — | — | — | ExecutionSucceeded/Failed | oui |
| executing | *(result_pending Attempt)* | **stays `executing`** | **T-A5** | — | — | — | — | ExecutionResultPending | non |
| executing | CancelExecution / CancelExecutionAttempt | cancelled | **T-A5** | N≥ / Morris | — | — | — | ExecutionCancelled | oui |
| executing | timeout | failed | **T-A5** | auto-safety borné | — | — | — | ExecutionTimedOut | oui |

Aucune transition vers `executing` sous T-A4. **Aucun completed spéculatif** tant que Attempt ∈ {`accepted`,`running`,`result_pending`}.

### Matrice transitions ExecutionAttempt (T-A5)

| Source | Commande / cause | Cible | Contrat mapping | Événement | Interdit si |
|--------|------------------|-------|-----------------|-----------|-------------|
| (new) | SelectExecutionAgent (persist) | `accepted` | **confirmed** (inchangé) | ExecutionAttemptAccepted | contrat ≠ confirmed |
| `accepted` | StartExecution (launch ack) | `running` | → **executing** | ExecutionStarted | TTL expiré ; auth deny ; pas de persist préalable |
| `accepted` | CancelExecutionAttempt | `cancelled` | → cancelled (si policy) | ExecutionCancelled | — |
| `running` | RecordExecutionResult (ok) | `succeeded` | → **completed** | ExecutionSucceeded | sans resultRef durable |
| `running` | Record* / failure | `failed` | → **failed** | ExecutionFailed | — |
| `running` | timeout engine | `timeout` | → **failed** | ExecutionTimedOut | — |
| `running` | CancelExecutionAttempt | `cancelled` | → **cancelled** | ExecutionCancelled | — |
| `running` | Record persist fail | `result_pending` | **stays `executing`** | ExecutionResultPending | completed spéculatif |
| `result_pending` | Record retry ok | `succeeded` | → **completed** | ExecutionSucceeded | — |
| `result_pending` | Record retry fail / budget | `failed` | → **failed** | ExecutionFailed | — |

**Transitions interdites (non exhaustif) :** `accepted`→`succeeded` ; `accepted`→`result_pending` ; `succeeded`→* ; `failed`→`running` (in-place) ; `*→partial` ; `*→blocked` ; `*→starting` ; launch sans `accepted` persisté (**anti launch-then-persist**).

**persist-then-launch invariant :** pas de `running` / pas de launch adaptateur sans Attempt `accepted` durable.

---

## Erreurs

### ErrorRecord schema (14 — existants, réutilisés)

Voir `schemas/error/error-record.schema.json` : `DOCTRINE_UNRESOLVED` · `CONTEXT_STALE` · `CKC_UNAVAILABLE` · `CONTRADICTION_OPEN` · `INSUFFICIENT_EVIDENCE` · `DECISION_REQUIRED` · `CONFIRMATION_REQUIRED` · `CAPABILITY_MISSING` · `AUTHORITY_DENIED` · `EXECUTION_FAILED` · `EXECUTION_TIMEOUT` · `EVIDENCE_INCOMPLETE` · `STATE_CONFLICT` · `REPLAN_REQUIRED`.

### Erreurs catalog T-A5 (conceptuelles — §21 ; pas de doublon sémantique)

| Code T-A5 | Alignement ErrorRecord | Notes |
|-----------|------------------------|-------|
| `AUTHORITY_DENIED` | **identique** | N3 ≠ Morris ; spoof client refusé |
| `EXECUTION_TIMEOUT` | **identique** | Attempt timeout |
| `EXECUTION_FAILED` | **identique** | terminal technique |
| `CAPABILITY_MISSING` | proche `AGENT_CAPABILITY_MISMATCH` | réutiliser quand mismatch = missing cap |
| `STATE_CONFLICT` | proche `ATTEMPT_STATE_CONFLICT` / `CONCURRENCY_CONFLICT` | OCC / état |
| `EXECUTION_CONTRACT_NOT_CONFIRMED` | — | T-A5 catalog extension |
| `EXECUTION_CONTRACT_STALE` | ~`CONTEXT_STALE` | version/OCC |
| `EXECUTION_CONTRACT_SUPERSEDED` | — | |
| `EXECUTION_CONTRACT_CANCELLED` | — | |
| `AGENT_NOT_FOUND` | — | |
| `AGENT_DISABLED` | — | |
| `AGENT_CAPABILITY_MISMATCH` | ~`CAPABILITY_MISSING` | |
| `AGENT_SCOPE_MISMATCH` | — | |
| `AGENT_SELECTION_EXPIRED` | — | TTL |
| `AGENT_CONFIRMATION_REQUIRED` | ~`CONFIRMATION_REQUIRED` | scope agent_selection |
| `EXECUTION_ALREADY_ACTIVE` | ~`STATE_CONFLICT` | |
| `ATTEMPT_NOT_FOUND` | — | |
| `ATTEMPT_STATE_CONFLICT` | ~`STATE_CONFLICT` | |
| `CRITICAL_NOT_ACKNOWLEDGED` | — | R-T-A3-1 |
| `EXECUTION_PERSISTENCE_FAILED` | — | pre-launch |
| `EXECUTION_LAUNCH_REJECTED` | — | |
| `EXECUTION_LAUNCH_FAILED` | — | |
| `EXECUTION_CANCEL_FAILED` | — | best-effort échec |
| `RESULT_RECORDING_FAILED` | — | → result_pending / failed tech |
| `RETRY_NOT_AUTHORIZED` | ~`AUTHORITY_DENIED` | |
| `RETRY_BUDGET_EXHAUSTED` | — | |
| `CONCURRENCY_CONFLICT` | ~`STATE_CONFLICT` | |

ErrorRecord enum **non élargi** ce cycle (évite breaking ErrorRecord) ; codes T-A5 documentés ici pour delivery future. Pas de doublon nominal avec sémantique différente.

## Transitions LPS

active --stale--> stale ; active --conflict--> conflict ; * --version--> superseded + new active.
