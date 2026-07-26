# 09 — Commandes, événements, erreurs, transitions

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Rework gate T-A4** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **Materialize gate T-A5** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Validate gate T-A5 modeled** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED** — Attempt CORRECTED AND VALIDATED) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (pack baseline)** | `0.1.0-oa` |
| **ExecutionContract schemaVersion** | `0.2.0-oa` (breaking T-A4 rework) |
| **ExecutionAttempt schemaVersion** | `0.2.0-oa` (breaking T-A5 materialization ; conditionals hardened at validate) |
| **Evidence schemaVersion** | `0.2.0-oa` (breaking T-A6 materialization) |
| **ReviewBundle schemaVersion** | `0.2.0-oa` (breaking T-A6 materialization) |
| **ClaimEvaluation schemaVersion** | `0.1.0-oa` (nouveau T-A6 ; R-M01 OPEN jusqu’à validation) |
| **MaturityAssessment schemaVersion** | `0.2.0-oa` (breaking T-A6 materialization) |
| **Materialize gate T-A6** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME · Pas T-A5 RUNTIME · Pas T-A6 RUNTIME · Pas T-A7 · Pas GO VALIDATE T-A6 MODELED consommé |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `09-command-event-error-and-transition-catalog.md` |
| **Alignement** | AF `05-state-command-event-and-decision-model.md` · T-A4 Morris arbitration · T-A5 Morris D01–D10 · T-A6 Morris D-T-A6-01…12 |

## Commandes (conceptuelles, non endpoints)

StartConversation · SubmitIntent · ResolveDoctrinePackage · ResolveProjectContext · ProposeCycleQualification · AcknowledgeCycleQualification · ResolveCkc · RequestClarification · RecordEpistemicItem · CreateProject · UpdateLivingProjectState · ProposeTrajectory · ReplanTrajectory · RecordHumanDecision · RequestConfirmation · ConfirmAction · CancelAction · BuildExecutionContract · ValidateExecutionContract · ConfirmExecutionContract · SupersedeExecutionContract · SelectExecutionAgent · StartExecution · CancelExecution · CancelExecutionAttempt · RecordExecutionResult · RecordExecutionFailure · RetryExecutionAttempt · GetExecutionAttempt · ListExecutionAttempts · CheckAttemptAuthorization · RegisterEvidence · AttachEvidence · VerifyEvidenceIntegrity · CreateReviewBundle · BuildReviewBundle · FreezeReviewBundle · StartReview · RecordFinding · EvaluateClaim · ConfirmClaimEvaluation · RejectClaimEvaluation · CompleteReview · ReopenReview · ProposeMaturity · ConfirmMaturity · DowngradeMaturity · RegisterDebt · CloseDebt · ReopenDebt · CloseCycleInstance · ProposeNextCycle.

Pour chacune : initiateur domaine · agrégat cible · préconditions · autorité · confirmation éventuelle · événements · erreurs.

**Note T-A6 :** `RegisterEvidence` absorbe l’intention d’attache (`AttachEvidence` reste alias catalogue v1). `BuildReviewBundle` reste alias historique de `CreateReviewBundle` (+ freeze optionnel documenté). `CreateClaim` absorbé dans `EvaluateClaim` v1. Aucune commande ne lance T-A7.

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

**Anti-claims commandes :** pas d’endpoint HTTP ; pas d’adaptateur appelé ce cycle ; pas d’Evidence/Claim **runtime** (T-A5) — catalogues T-A6 modeled-only.

---

## T-A6 — Commandes Evidence / Review / Claim / Maturity (D-T-A6-01…12)

| Commande | Agrégat | Acteur / autorité | Préconditions | Effet | Événements | Erreurs typiques |
|----------|---------|-------------------|---------------|-------|------------|------------------|
| `RegisterEvidence` | Evidence | système / humain / adapter (artefact only) | ≥1 binding ; pas de secret | crée Evidence ; alias `AttachEvidence` v1 | `EvidenceRegistered` | `EVIDENCE_SOURCE_REQUIRED`, `EVIDENCE_BINDING_REQUIRED`, `EVIDENCE_SECRET_FORBIDDEN` |
| `AttachEvidence` | Evidence | idem | alias RegisterEvidence | lie bindings | `EvidenceRegistered` | idem |
| `VerifyEvidenceIntegrity` | Evidence | système déterministe L1 | digest si verifiable | status→verified si OK | `EvidenceIntegrityVerified` / `EvidenceRejected` | `EVIDENCE_DIGEST_REQUIRED`, `EVIDENCE_UNAVAILABLE` |
| `CreateReviewBundle` | ReviewBundle | N≥ scope | projectId | draft + version | — | `STATE_CONFLICT` |
| `BuildReviewBundle` | ReviewBundle | N≥ | alias historique Create (+ évent. freeze) | draft ou ready_for_review | `ReviewBundleFrozen` (si freeze) | idem |
| `FreezeReviewBundle` | ReviewBundle | N≥ | draft → ready_for_review | freeze (`frozenAt`) ; refs immutables | `ReviewBundleFrozen` | `REVIEW_BUNDLE_INCOMPLETE` |
| `StartReview` | ReviewBundle | reviewer | frozen | → under_review | `ReviewStarted` | `REVIEW_BUNDLE_NOT_FROZEN` |
| `RecordFinding` | ReviewBundle | reviewer | under_review | finding append (semantic) | `FindingRecorded` | `REVIEW_BUNDLE_NOT_FROZEN` |
| `EvaluateClaim` | ClaimEvaluation | système propose / humain | bundle gelé + version exacte | pending→evaluating→pass\|fail\|not_proven\|waived\|disputed | `ClaimEvaluationProposed` | `CLAIM_EVIDENCE_MISSING`, `CLAIM_NOT_PROVEN`, `REVIEW_BUNDLE_VERSION_MISMATCH` |
| `ConfirmClaimEvaluation` | ClaimEvaluation | humain / Morris | Critical/structural rules | confirme PASS | `ClaimEvaluationConfirmed` | `CLAIM_CONFIRMATION_REQUIRED`, `CLAIM_SELF_REVIEW_FORBIDDEN`, `CLAIM_AUTHORITY_MISMATCH`, `WAIVER_AUTHORITY_REQUIRED` |
| `RejectClaimEvaluation` | ClaimEvaluation | reviewer | evaluating | fail / not_proven | `ClaimEvaluationRejected` | `CLAIM_AUTHORITY_MISMATCH` |
| `CompleteReview` | ReviewBundle | reviewer | under_review | accepted\|rejected\|incomplete | `ReviewCompleted` | `REVIEW_BUNDLE_NOT_FROZEN`, `REVIEW_BUNDLE_INCOMPLETE` |
| `ReopenReview` | ReviewBundle | N≥ / Morris | accepted\|rejected | nouvelle version / reopen | `ReviewReopened` | `STATE_CONFLICT` |
| `ProposeMaturity` | MaturityAssessment | système | claims/evidence | status proposed ; autoPromoted=false | `MaturityProposed` | `MATURITY_BLOCKED_BY_RESERVATION` |
| `ConfirmMaturity` | MaturityAssessment | humain / Morris | proposed ; pas HARD block | → confirmed | `MaturityConfirmed` | `MATURITY_CONFIRMATION_REQUIRED`, `MATURITY_AUTO_PROMOTION_FORBIDDEN`, `MATURITY_BLOCKED_BY_RESERVATION` |
| `DowngradeMaturity` | MaturityAssessment | humain / Morris | evidence/claim invalidé | supersession + downgradeReason | `MaturityDowngraded` | `MATURITY_DOWNGRADE_REQUIRED` |
| `RegisterDebt` / `CloseDebt` / `ReopenDebt` | DebtItem (docs) | humain / Morris | — | dette review | `DebtRegistered` / `DebtClosed` / `ReserveMaintainedOpen` | — |

**Interdit :** toute commande T-A6 → auto-launch T-A7 (`T_A7_AUTO_LAUNCH_FORBIDDEN`) · auto-confirm Critical · auto-close réserve humaine · auto next cycle.

---

## Événements (extrait)

IntentSubmitted · DoctrinePackageResolved/Failed · ProjectMatched/Created · CycleQualificationProposed/Acknowledged · CkcResolved · EpistemicItemRecorded · ContradictionDetected · LivingProjectStateVersioned · TrajectoryProposed/Replanned · HumanDecisionRecorded/Superseded · ConfirmationRequested/Granted/Expired · ExecutionContractBuilt · ExecutionContractValidated · ExecutionContractConfirmationRequired · ExecutionContractConfirmed · ExecutionContractSuperseded · ExecutionContractCancelled · ExecutionAgentProposed · ExecutionAgentSelected · ExecutionAttemptAccepted · ExecutionStarted · ExecutionResultPending · ExecutionSucceeded · ExecutionFailed · ExecutionTimedOut · ExecutionCancellationRequested · ExecutionCancelled · ExecutionCancellationFailed · ExecutionAuthorizationDenied · ExecutionRetryAuthorized · EvidenceRegistered · EvidenceIntegrityVerified · EvidenceRejected · ReviewBundleFrozen · ReviewStarted · FindingRecorded · ClaimEvaluationProposed · ClaimEvaluationConfirmed · ClaimEvaluationRejected · ReviewCompleted · ReviewReopened · MaturityProposed · MaturityConfirmed · MaturityDowngraded · DebtRegistered · DebtClosed · ReserveMaintainedOpen · CycleInstanceClosed · NextCycleProposed.

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

Payload minimal : `aggregateId` · `attemptId` · `executionContractId` · `executionContractVersion` · `correlationId` · `causationId?` · actor/provenance · `previousStatus` · `newStatus` · `selectedAgentRef?` · `reason?`. **Interdits :** secrets, tokens, Confirmation complète, authority evidence complète, payloads métier non nécessaires. (Legacy `agentRef?` retiré — utiliser `selectedAgentRef?`.)

---

## Matrice d'autorité T-A5 (D08)

| Action | Autorité métier | Notes |
|--------|-----------------|-------|
| **SelectExecutionAgent** | N≥ `requiredAuthority` ; système **seulement** si non-Critical + `capabilities_deterministic` fermé | pas Morris spoof ; pas launch |
| **StartExecution** | même barre + relecture T-A3 ; Critical = Confirmation agent | persist-then-launch ; TTL revalidate |
| **CancelExecutionAttempt** (métier) | N≥ `requiredAuthority` | best-effort ; pas rollback métier implicite |
| **Emergency stop Morris** | **Morris only** = N3 ∧ `canActAsMorris: true` (server) | **N3 ≠ Morris** ; displayName spoof refusé |
| **auto-safety** (timeout / kill borné) | système borné policy | jamais équivalent Morris ; bornes explicites |
| **RecordExecutionResult / Failure** | adaptateur authentifié lié à **son** Attempt | foreign Attempt → deny |
| **RetryExecutionAttempt** | auth explicite = Start | nouvel Attempt ; budget |

**Anti-spoof :** jamais trust client `canActAsMorris` / displayName « Morris ». Système ≠ Morris.

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
| `accepted` | StartExecution (launch fail / persist fail pre-launch) | `failed` | **confirmed** (inchangé) ou policy cancel | ExecutionFailed | post-launch sans `launchedAt` hors codes launch/persist |
| `accepted` | CancelExecutionAttempt | `cancelled` | → cancelled (si policy) | ExecutionCancelled | — |
| `running` | RecordExecutionResult (ok) | `succeeded` | → **completed** | ExecutionSucceeded | sans resultRef durable |
| `running` | Record* / failure | `failed` | → **failed** | ExecutionFailed | — |
| `running` | timeout engine | `timeout` | → **failed** | ExecutionTimedOut | — |
| `running` | CancelExecutionAttempt | `cancelled` | → **cancelled** | ExecutionCancelled | — |
| `running` | Record persist fail | `result_pending` | **stays `executing`** | ExecutionResultPending | completed spéculatif |
| `result_pending` | Record retry ok | `succeeded` | → **completed** | ExecutionSucceeded | — |
| `result_pending` | Record retry fail / budget | `failed` | → **failed** | ExecutionFailed | — |
| `result_pending` | CancelExecutionAttempt (si policy) | `cancelled` | → **cancelled** | ExecutionCancelled | completed spéculatif ; cancel mid-record hors policy |

**Transitions interdites (non exhaustif) :** `accepted`→`succeeded` ; `accepted`→`result_pending` ; `result_pending`→`completed` (contrat) direct / spéculatif ; `succeeded`→* ; `failed`→`running` (in-place) ; `*→partial` ; `*→blocked` ; `*→starting` ; `*→planned` ; launch sans `accepted` persisté (**anti launch-then-persist**).

**persist-then-launch invariant :** pas de `running` / pas de launch adaptateur sans Attempt `accepted` durable. **launch-then-persist** interdit.

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

### Erreurs catalog T-A6 (conceptuelles — pas de doublon ErrorRecord enum)

| Code T-A6 | Notes |
|-----------|-------|
| `EVIDENCE_SOURCE_REQUIRED` | source/sourceKind manquant |
| `EVIDENCE_BINDING_REQUIRED` | bindings vides |
| `EVIDENCE_DIGEST_REQUIRED` | verifiable/verified sans digest |
| `EVIDENCE_UNAVAILABLE` | indisponible ; ne peut supporter PASS |
| `EVIDENCE_SECRET_FORBIDDEN` | secret/token en clair |
| `REVIEW_BUNDLE_NOT_FROZEN` | verdict ou review avant freeze |
| `REVIEW_BUNDLE_INCOMPLETE` | incomplete vs PASS final exigeant complétude |
| `REVIEW_BUNDLE_VERSION_MISMATCH` | claim lié à mauvaise version |
| `CLAIM_EVIDENCE_MISSING` | PASS sans Evidence requise |
| `CLAIM_NOT_PROVEN` | NOT_PROVEN (≠ FAIL) |
| `CLAIM_SELF_REVIEW_FORBIDDEN` | auteur = confirmer Critical |
| `CLAIM_CONFIRMATION_REQUIRED` | Critical/structural sans confirm |
| `CLAIM_AUTHORITY_MISMATCH` | N3 spoof Morris ; système confirme Critical |
| `WAIVER_AUTHORITY_REQUIRED` | waiver non autorisé |
| `MATURITY_BLOCKED_BY_RESERVATION` | HARD reserve |
| `MATURITY_CONFIRMATION_REQUIRED` | confirm manquante |
| `MATURITY_AUTO_PROMOTION_FORBIDDEN` | autoPromoted |
| `MATURITY_DOWNGRADE_REQUIRED` | evidence/claim invalidé |
| `T_A7_AUTO_LAUNCH_FORBIDDEN` | T-A6 ne lance pas T-A7 |

## Transitions LPS

active --stale--> stale ; active --conflict--> conflict ; * --version--> superseded + new active.

### Transitions ReviewBundle (T-A6)

| Source | Commande | Cible | Notes |
|--------|----------|-------|-------|
| (new) | CreateReviewBundle | draft | mutable sous OCC |
| draft | FreezeReviewBundle | ready_for_review | frozenAt ; refs gelées |
| ready_for_review | StartReview | under_review | reviewStartedAt |
| under_review | CompleteReview | accepted\|rejected\|incomplete | validatedAt |
| *frozen* | ReopenReview / nouvelle version | superseded + new | pas de mutation in-place post-freeze |
