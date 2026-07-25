# 03 — Materialization T-A5 Agent Selection and Execution

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Materialization (Critical) |
| **Gate** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD start** | `57de65f90023674bb51e2105ad7858971cb52430` |
| **Statut** | **MATERIALIZED — MODELED VALIDATION REQUIRED** |
| **Runtime** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED` |
| **Gate suivant (non consommé)** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |

---

## 1. Décisions Morris D01–D10 (EXACT)

| ID | Décision | Matérialisation |
|----|----------|-----------------|
| **D01** | **APPROVE A** — Attempt agrégat séparé | Schema Attempt autonome ; N Attempts / contrat |
| **D02** | **APPROVE C WITH CONDITION** — Critical : système propose + humain confirme ; Option A capabilities only non-Critical closed profile | `selectionStrategy` + `selectionProfile` ; Critical ⇒ `human_confirmed_proposal` |
| **D03** | **APPROVE A WITH CONDITION** — Select et Start séparés ; TTL + revalidate at Start | Commandes distinctes ; `selectionExpiresAt` |
| **D04** | **APPROVE B** — `accepted → running → succeeded\|failed\|timeout\|cancelled` ; no blocked/starting durable ; + `result_pending` per D06 | Enum status 0.2.0-oa |
| **D05** | **APPROVE A** — persist-then-launch ; launch-then-persist forbidden | Invariant catalog + schema `accepted`/`launchedAt` |
| **D06** | **APPROVE C** — `result_pending` ; no speculative completed | Status + mapping contrat stays executing |
| **D07** | **APPROVE B+D** — stop conditions + cancel best-effort ; no implicit business rollback | Events cancel ; `irreversibleEffectsPossible` |
| **D08** | **APPROVE A WITH CONDITIONS** — authority matrix ; Morris emergency ; auto-safety bounded ; RecordResult adapter bound to own Attempt ; system never Morris | Catalog matrice ; N3 ≠ Morris |
| **D09** | **APPROVE A** — Attempt timeout → contract failed ; retry = new Attempt + retryOf + budget + explicit auth | `timeout` mapping ; `retryOfAttemptId` |
| **D10** | **APPROVE A+C** — T-A5 technical only ; Evidence/Claim/maturity = T-A6 | Boundary 07 ; `partial` retiré |

Réserves **B5, R1, R-T-A3-1…4** restent **OPEN**. R-T-A3-1/2 = blockers exécution réelle. Pas de runtime. Pas de DB selected.

---

## 2. Sources

- `02-arbitration.md` (pack + formulaire) + décisions Morris explicites ci-dessus
- `01-framing.md` (cadrage)
- Modeled 07 / 09 / 10 ; Attempt `0.1.0-oa` initial ; Contract `0.2.0-oa`
- Gate materialize (prompt cycle)

---

## 3. Inventaire modeled initial → écarts

| Artefact | Avant | Écart |
|----------|-------|-------|
| Attempt schema | `0.1.0-oa` ; `contractId`/`agentRef` ; status incl. `partial` ; pas `accepted`/`result_pending` | **Breaking** → `0.2.0-oa` |
| AgentDescriptor | absent | **Nouveau** `0.1.0-oa` docs-first |
| Catalog 09 | T-A5 minimal (Select/Start/Cancel/Record) | Expand commandes/events/errors/transitions |
| Doc 07 | Attempt one-liner | Lifecycle + ownership + anti-claims T-A5 |
| Exemples Attempt | timeout seul `0.1.0-oa` | Suite valid/invalid `0.2.0-oa` |
| Tests | Contract only (18) | + Attempt governance suite |

---

## 4. Versionnement

| Objet | Initiale | Finale | Nature |
|-------|----------|--------|--------|
| ExecutionAttempt | `0.1.0-oa` | `0.2.0-oa` | **BREAKING** |
| AgentDescriptor | — | `0.1.0-oa` | nouveau |
| ExecutionContract | `0.2.0-oa` | inchangé | — |
| ErrorRecord enum | 14 codes | inchangé (codes T-A5 en catalog) | non-breaking ErrorRecord |

Justification breaking Attempt : renames, required set élargi, enum status incompatible (`partial` retiré ; `accepted`/`result_pending` ajoutés). Pas de compatibilité descendante.

---

## 5. Schémas

### ExecutionAttempt `0.2.0-oa`

Required : `schemaVersion`, `attemptId` (`^xat:`), `executionContractId` (`^xct:`), `executionContractVersion`, `selectedAgentRef`, `status`, `idempotencyKey`, `correlationId`, `version`, `createdAt`, `provenance`.

Status : `accepted` \| `running` \| `result_pending` \| `succeeded` \| `failed` \| `timeout` \| `cancelled`.

Conditionnels Draft-07 : `accepted` ⇒ selectionStrategy+selectionProfile+selectionExpiresAt ; `capabilities_deterministic` ⇒ profile standard|light|capitalization (**critical FORBIDDEN**) ; `resultPendingAt` si result_pending ; `resultRef`+`completedAt` si succeeded ; `timedOutAt` si timeout ; `cancelledAt` si cancelled ; `failedAt`+(errorRef|stopReason) si failed ; post-launch ⇒ launchedAt+startedAt (exception launch-fail failed sans launchedAt si stopReason EXECUTION_LAUNCH_FAILED|EXECUTION_PERSISTENCE_FAILED) ; Critical ⇒ human_confirmed_proposal ; agentConfirmationRef si human_confirmed_proposal au-delà d’accepted ; retryOfAttemptId ⇒ retryIndex+maxRetriesBudget ; retryIndex ⇒ retryOfAttemptId.

### AgentDescriptor `0.1.0-oa`

Docs-first ; **not a live registry** ; `healthStatus` snapshot modeled only.

---

## 6. Commandes / événements / erreurs / transitions

Voir [09-command-event-error-and-transition-catalog.md](../../../sfia-v3-modeled/v3-native-option-a/09-command-event-error-and-transition-catalog.md) section T-A5.

**Commandes :** SelectExecutionAgent · StartExecution · CancelExecutionAttempt (alias CancelExecution post-start) · RecordExecutionResult · RecordExecutionFailure (mergeable) · RetryExecutionAttempt · GetExecutionAttempt · ListExecutionAttempts · CheckAttemptAuthorization.

**Événements :** ExecutionAgentProposed · ExecutionAgentSelected · ExecutionAttemptAccepted · ExecutionStarted · ExecutionResultPending · ExecutionSucceeded · ExecutionFailed · ExecutionTimedOut · ExecutionCancellationRequested · ExecutionCancelled · ExecutionCancellationFailed · ExecutionAuthorizationDenied · ExecutionRetryAuthorized.

**Erreurs §21 :** listées en catalog avec réutilisation `AUTHORITY_DENIED` / `EXECUTION_TIMEOUT` / `EXECUTION_FAILED` / proches STATE_CONFLICT·CAPABILITY_MISSING.

**Mapping Attempt → Contract :**

| Attempt | Contract |
|---------|----------|
| accepted | confirmed (stays) |
| running | executing |
| result_pending | **stays executing** (NOT completed) |
| succeeded | completed |
| failed / timeout | failed |
| cancelled | cancelled |

**Forbidden :** launch sans accepted persisté ; completed spéculatif ; blocked/starting durables.

---

## 7. Lifecycle / sélection / autorité / TTL / persist / result_pending / timeout / retry / obsolescence / cancel / T-A5↔T-A6

Documentés dans [07-execution-contract-attempt-and-agent-model.md](../../../sfia-v3-modeled/v3-native-option-a/07-execution-contract-attempt-and-agent-model.md) et catalog 09. Synthèse :

- Select ≠ Start ; TTL `selectionExpiresAt` ; revalidate Start
- Critical = propose+confirm ; non-Critical capabilities fermé
- persist-then-launch only
- result_pending honnête ops
- timeout Attempt → contrat failed
- retry = nouvel Attempt + budget + auth
- cancel best-effort ; pas rollback métier
- T-A5 technique ; Evidence/Claim/maturité = T-A6 ; `partial` hors Attempt

---

## 8. Exemples

Valides : accepted, running, result_pending, succeeded, failed, timeout, cancelled, retry, critical-selection, noncritical-capabilities, launch-fail, agent-descriptor.

Invalid : additionalProperties, bad schemaVersion `0.1.0-oa`, partial status, missing required, succeeded-without-result, result_pending-without-ts, critical+capabilities, human-confirm running sans cnf, timeout/failed/cancelled timestamp gaps, running-without-launchedAt, accepted-without-selection, capabilities-on-critical / without-profile, legacy contractId/agentRef, blocked/starting/planned, ta6-claimId, retry-index-without-retryOf, failed-without-error-or-stop, agent-descriptor additionalProperties.

Narratives : selection-expired / ttl-expired ; morris-displayname-spoof ; n3-without-canActAsMorris ; wrong-agent-confirmation ; launch-then-persist.forbidden ; adapter-foreign-attempt ; result-pending-no-direct-completed ; retry-budget-exhausted.

---

## 9. Tests

- `tests/execution-attempt-governance.test.mjs` — suite T-A5
- `tests/execution-contract-governance.test.mjs` — inchangé (18)

Exécution : `node --test tests/execution-attempt-governance.test.mjs tests/execution-contract-governance.test.mjs` → **38 pass** à la materialization ; **46 pass** après validation correction (28 Attempt + 18 Contract). Voir `04-modeled-validation.md`.

---

## 10. Réserves / blockers

| Reserve | Status | Modeled | Runtime | Exec réelle |
|---------|--------|---------|---------|-------------|
| B5 | OPEN | non-blocker | soft | soft |
| R1 | OPEN | soft | soft | hard |
| R-T-A3-1 | OPEN | non-blocker doc | soft tests | **HARD blocker** Critical réel |
| R-T-A3-2 | OPEN | soft | soft mémoire | **HARD blocker** |
| R-T-A3-3 | OPEN | — | soft | soft |
| R-T-A3-4 | OPEN | catalog | soft | soft |

**Aucune réserve fermée.** Pas DATABASE SELECTED.

---

## 11. Fichiers (ce cycle)

**Créés :** `03-materialization.md` ; `schemas/execution/agent-descriptor.schema.json` ; exemples Attempt/Agent (+ invalid + narrative) ; `tests/execution-attempt-governance.test.mjs`.

**Modifiés :** `README.md`, `02-arbitration.md` (ce dossier) ; Attempt schema ; modeled `07`/`09`/`10`/`README` ; `execution-attempt-timeout.valid.json`.

**Interdits non touchés :** `app/**`, `method/**`, `prompts/**`, package/lockfiles, SQL, UI, runtime.

---

## 12. Anti-claims

- Pas MODELED VALIDATED (gate validate non consommé)
- Pas T-A5 RUNTIME / DELIVERY READY / IMPLEMENTED
- Pas agent selected opérationnel / Attempt opérationnel / exécution lancée
- Pas DATABASE SELECTED / réserves CLOSED
- Pas push branche projet / PR / merge
- Système ≠ Morris ; N3 ≠ Morris

---

## 13. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED**

Gate suivant (non consommé) : `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A`
