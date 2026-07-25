# SFIA Review Pack FULL — T-A5 Materialization Option A

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | `2026-07-25 15:12:35 CEST (+0200)` |
| **Cycle / profil** | Materialization T-A5 — **Critical** |
| **Gate** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **HEAD initial** | `57de65f90023674bb51e2105ad7858971cb52430` |
| **HEAD final** | `de9cc5d37c7230f7762a39436949972f44ab5a3f` |
| **merge-base** | `6bfef839…` |
| **Truth Check** | **PASS** |
| **status** | `## framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution...origin/main [ahead 5]
?? .tmp-sfia-review/` |
| **Template** | FULL |
| **Handoff source** | `.tmp-sfia-review/chatgpt-review.md` |
| **CKC** | pilots/01-cadrage.md — candidate ; `executionAuthority=false` ; aucune autorité décisions |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED` |
| **Gate suivant** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Morris decisions D01–D10 (EXACT)

| ID | Decision |
|----|----------|
| D01 | APPROVE A — Attempt separate aggregate |
| D02 | APPROVE C WITH CONDITION — Critical: system propose + human confirm; Option A capabilities only non-Critical closed profile |
| D03 | APPROVE A WITH CONDITION — Select and Start separate; TTL + revalidate at Start |
| D04 | APPROVE B — accepted → running → succeeded\|failed\|timeout\|cancelled; no blocked/starting durable; + result_pending per D06 |
| D05 | APPROVE A — persist-then-launch; launch-then-persist forbidden |
| D06 | APPROVE C — result_pending; no speculative completed |
| D07 | APPROVE B+D — stop conditions + cancel best-effort; no implicit business rollback |
| D08 | APPROVE A WITH CONDITIONS — authority matrix; Morris emergency; auto-safety bounded; RecordResult adapter bound to own Attempt; system never Morris |
| D09 | APPROVE A — Attempt timeout → contract failed; retry = new Attempt + retryOf + budget + explicit auth |
| D10 | APPROVE A+C — T-A5 technical only; Evidence/Claim/maturity = T-A6 |

Reserves B5, R1, R-T-A3-1..4 **OPEN**. R-T-A3-1/2 blockers real execution. No runtime. No DB selected.

## Inventaire modeled initial / écarts / versionnement

| Artefact | Avant | Après |
|----------|-------|-------|
| ExecutionAttempt | `0.1.0-oa` | `0.2.0-oa` **BREAKING** |
| AgentDescriptor | absent | `0.1.0-oa` docs-first (not live registry) |
| ExecutionContract | `0.2.0-oa` | inchangé |
| ErrorRecord enum | 14 | inchangé (T-A5 codes in catalog 09) |

Breaking Attempt: renames contractId→executionContractId, agentRef→selectedAgentRef; status enum replaces partial with accepted|result_pending; required provenance/idempotency/correlation/version/createdAt; selection/retry/timestamps.

## Sélection / lifecycle / persist / result_pending / autorité / T-A5↔T-A6

- Critical: human_confirmed_proposal + agentConfirmationRef at Start+
- Non-Critical closed: capabilities_deterministic (standard|light|capitalization)
- TTL selectionExpiresAt; Select ≠ Start
- Lifecycle: accepted → running → terminals; running → result_pending → succeeded|failed
- Mapping: accepted→contract confirmed; running→executing; result_pending→**stays executing**; succeeded→completed; failed/timeout→failed; cancelled→cancelled
- persist-then-launch only; launch-then-persist forbidden
- No speculative completed; succeeded requires resultRef
- Authority: Select/Start = requiredAuthority; Cancel N≥; Morris emergency; auto-safety bounded; RecordResult adapter-bound; system never Morris; N3 ≠ Morris
- Timeout Attempt → contract failed; retry = new Attempt + retryOfAttemptId + budget + auth
- T-A5 technical only; Evidence/Claim/maturity = T-A6; partial removed from Attempt

## Commandes (T-A5)

SelectExecutionAgent · StartExecution · CancelExecutionAttempt (alias CancelExecution post-start dual-context) · RecordExecutionResult · RecordExecutionFailure (mergeable) · RetryExecutionAttempt · GetExecutionAttempt · ListExecutionAttempts · CheckAttemptAuthorization

## Événements (T-A5)

ExecutionAgentProposed · ExecutionAgentSelected · ExecutionAttemptAccepted · ExecutionStarted · ExecutionResultPending · ExecutionSucceeded · ExecutionFailed · ExecutionTimedOut · ExecutionCancellationRequested · ExecutionCancelled · ExecutionCancellationFailed · ExecutionAuthorizationDenied · ExecutionRetryAuthorized

## Erreurs (§21 catalog)

EXECUTION_CONTRACT_NOT_CONFIRMED · EXECUTION_CONTRACT_STALE · EXECUTION_CONTRACT_SUPERSEDED · EXECUTION_CONTRACT_CANCELLED · AGENT_NOT_FOUND · AGENT_DISABLED · AGENT_CAPABILITY_MISMATCH · AGENT_SCOPE_MISMATCH · AGENT_SELECTION_EXPIRED · AGENT_CONFIRMATION_REQUIRED · EXECUTION_ALREADY_ACTIVE · ATTEMPT_NOT_FOUND · ATTEMPT_STATE_CONFLICT · AUTHORITY_DENIED (reuse) · CRITICAL_NOT_ACKNOWLEDGED · EXECUTION_PERSISTENCE_FAILED · EXECUTION_LAUNCH_REJECTED · EXECUTION_LAUNCH_FAILED · EXECUTION_TIMEOUT (reuse) · EXECUTION_CANCEL_FAILED · RESULT_RECORDING_FAILED · RETRY_NOT_AUTHORIZED · RETRY_BUDGET_EXHAUSTED · CONCURRENCY_CONFLICT · + EXECUTION_FAILED / CAPABILITY_MISSING / STATE_CONFLICT reuse mapping

## Tests

| Suite | Count |
|-------|-------|
| execution-attempt-governance.test.mjs | **20 pass** |
| execution-contract-governance.test.mjs | **18 pass** |
| **Total** | **38 pass / 0 fail** |

`git diff --check`: clean. Runtime/app/method/prompts/package/SQL/UI: untouched.

## Commits (local only — no project push)

```
de9cc5d test(modeled): validate T-A5 modeled governance
bfe82c2 feat(modeled): define ExecutionAttempt 0.2.0-oa governance
4254ff2 docs(sfia-studio): materialize T-A5 Morris decisions
```

SHAs:
- `4254ff280054e433d2b5b3ddc9b40c9ba0e37e27` docs(sfia-studio): materialize T-A5 Morris decisions
- `bfe82c2bb7c5c064827699af5dba1f678b472096` feat(modeled): define ExecutionAttempt 0.2.0-oa governance
- `de9cc5d37c7230f7762a39436949972f44ab5a3f` test(modeled): validate T-A5 modeled governance

## Diff name-status (57de65f..HEAD)

```
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/02-arbitration.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/03-materialization.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/README.md
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/07-execution-contract-attempt-and-agent-model.md
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/09-command-event-error-and-transition-catalog.md
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/10-validation-versioning-provenance-and-security-rules.md
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/README.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/agent-descriptor.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-accepted.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-cancelled.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-critical-selection.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-failed.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-noncritical-capabilities.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-result-pending.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-retry.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-running.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-selection-expired.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-succeeded.valid.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-timeout.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/agent-descriptor.additional-properties.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.additional-properties.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.bad-schema-version.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.critical-capabilities.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.missing-required.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.partial-status.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.result-pending-without-ts.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.succeeded-without-result.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/agent-descriptor.schema.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-attempt.schema.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs
```

## Diffstat

```
.../02-arbitration.md                              |  61 ++-
 .../03-materialization.md                          | 188 ++++++++++
 .../t-a5-agent-selection-execution/README.md       |  65 ++--
 ...7-execution-contract-attempt-and-agent-model.md | 111 +++++-
 ...9-command-event-error-and-transition-catalog.md | 184 +++++++--
 ...ion-versioning-provenance-and-security-rules.md |   5 +-
 .../sfia-v3-modeled/v3-native-option-a/README.md   |  10 +-
 .../examples/agent-descriptor.valid.json           |  38 ++
 .../examples/execution-attempt-accepted.valid.json |  28 ++
 .../execution-attempt-cancelled.valid.json         |  35 ++
 ...execution-attempt-critical-selection.valid.json |  33 ++
 .../examples/execution-attempt-failed.valid.json   |  36 ++
 ...ion-attempt-noncritical-capabilities.valid.json |  28 ++
 .../execution-attempt-result-pending.valid.json    |  37 ++
 .../examples/execution-attempt-retry.valid.json    |  31 ++
 .../examples/execution-attempt-running.valid.json  |  31 ++
 ...xecution-attempt-selection-expired.narrative.md |   9 +
 .../execution-attempt-succeeded.valid.json         |  38 ++
 .../examples/execution-attempt-timeout.valid.json  |  38 +-
 ...t-descriptor.additional-properties.invalid.json |  39 ++
 ...tion-attempt.additional-properties.invalid.json |  29 ++
 ...ecution-attempt.bad-schema-version.invalid.json |  28 ++
 ...tion-attempt.critical-capabilities.invalid.json |  28 ++
 ....human-confirm-running-without-cnf.invalid.json |  29 ++
 ...execution-attempt.missing-required.invalid.json |   5 +
 .../execution-attempt.partial-status.invalid.json  |  25 ++
 ...-attempt.result-pending-without-ts.invalid.json |  25 ++
 ...n-attempt.succeeded-without-result.invalid.json |  26 ++
 .../schemas/execution/agent-descriptor.schema.json | 116 ++++++
 .../execution/execution-attempt.schema.json        | 318 ++++++++++++++--
 .../tests/execution-attempt-governance.test.mjs    | 411 +++++++++++++++++++++
 31 files changed, 1953 insertions(+), 132 deletions(-)
```

## Anti-claims

- Pas MODELED VALIDATED (validate gate not consumed)
- Pas T-A5 runtime / delivery ready / implemented
- Pas agent/Attempt opérationnel / exécution lancée
- Pas DATABASE SELECTED / réserves CLOSED
- Pas push projet / PR / merge
- Système ≠ Morris ; N3 ≠ Morris

## Blockers

| Surface | Verdict |
|---------|---------|
| Modeled | non-blocker (materialized; validation pending) |
| Runtime | not started (forbidden) |
| Exec réelle | **R-T-A3-1** + **R-T-A3-2** HARD blockers |

## Working tree final

`## framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution...origin/main [ahead 5]
?? .tmp-sfia-review/` — only `?? .tmp-sfia-review/` expected after handoff source write.

Push projet: **NON**. PR: **NON**.

---

# Contenu complet — fichiers créés / schémas clés


## FILE: `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/03-materialization.md`

```
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

Conditionnels Draft-07 : TTL si accepted+strategy ; `resultPendingAt` si result_pending ; `resultRef`+`completedAt` si succeeded ; Critical ⇒ human_confirmed_proposal ; agentConfirmationRef si human_confirmed_proposal au-delà d’accepted ; retry fields si `retryOfAttemptId`.

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

Valides : accepted, running, result_pending, succeeded, failed, timeout, cancelled, retry, critical-selection, noncritical-capabilities, agent-descriptor.

Invalid : additionalProperties, bad schemaVersion `0.1.0-oa`, partial status, missing required, succeeded-without-result, result_pending-without-ts, critical+capabilities, human-confirm running sans cnf, agent-descriptor additionalProperties.

Narrative : `execution-attempt-selection-expired.narrative.md` (TTL Start refuse).

---

## 9. Tests

- `tests/execution-attempt-governance.test.mjs` — suite T-A5
- `tests/execution-contract-governance.test.mjs` — inchangé (18)

Exécution : `node --test tests/execution-attempt-governance.test.mjs tests/execution-contract-governance.test.mjs` → **38 pass** (20 + 18).

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

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/agent-descriptor.schema.json`

```
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/execution/agent-descriptor.schema.json",
  "title": "AgentDescriptor",
  "description": "Docs-first modeled descriptor of an execution agent/adapter capability envelope (T-A5). schemaVersion 0.1.0-oa. NOT an operational live registry, NOT a health probe endpoint, NOT runtime configuration. Used for modeled examples, intersection rules (capabilities ∩ action/target/scope), and future delivery design. Deny-by-default semantics are normative in docs; this schema only shapes fields.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "agentId",
    "agentType",
    "adapterRef",
    "supportedCapabilities",
    "allowedActions",
    "allowedTargets",
    "allowedScopes",
    "trustLevel",
    "executionMode",
    "healthStatus",
    "version",
    "enabled",
    "provenance",
    "createdAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-oa"
    },
    "agentId": {
      "$ref": "../common/identifier.schema.json"
    },
    "agentType": {
      "type": "string",
      "minLength": 1
    },
    "adapterRef": {
      "$ref": "../common/identifier.schema.json"
    },
    "supportedCapabilities": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "../common/identifier.schema.json"
      }
    },
    "allowedActions": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string",
        "minLength": 1
      }
    },
    "allowedTargets": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string",
        "minLength": 1
      }
    },
    "allowedScopes": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string",
        "minLength": 1
      }
    },
    "trustLevel": {
      "type": "string",
      "enum": [
        "fixture",
        "bounded",
        "elevated",
        "restricted"
      ]
    },
    "executionMode": {
      "type": "string",
      "enum": [
        "dry_run",
        "simulated",
        "adapter_async",
        "adapter_sync_fixture"
      ]
    },
    "healthStatus": {
      "type": "string",
      "enum": [
        "unknown",
        "healthy",
        "degraded",
        "unhealthy"
      ],
      "description": "Modeled snapshot field only — not a live probe."
    },
    "version": {
      "type": "integer",
      "minimum": 1
    },
    "enabled": {
      "type": "boolean"
    },
    "provenance": {
      "$ref": "../common/provenance-record.schema.json"
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "updatedAt": {
      "$ref": "../common/timestamp.schema.json"
    }
  }
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-attempt.schema.json`

```
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/execution/execution-attempt.schema.json",
  "title": "ExecutionAttempt",
  "description": "Separate aggregate for a single bounded execution try against a confirmed ExecutionContract (T-A5; Morris D01 A). schemaVersion 0.2.0-oa is a BREAKING bump from 0.1.0-oa: renames contractId→executionContractId + agentRef→selectedAgentRef; adds executionContractVersion, idempotencyKey, correlationId, version, createdAt, provenance (required); status enum replaces partial with accepted|result_pending; removes endedAt/cancellation/timeout boolean/retryOf in favour of typed timestamps + retryOfAttemptId. Ownership: T-A5 only. Multiple Attempts per contract allowed. Persist-then-launch: status accepted is persisted before any launch; running only after compliant launch ack. result_pending = technical exit captured, durable RecordResult not yet persisted — never speculative contract completed. partial evidence interpretation is T-A6 (removed from Attempt). Anti-claims: not operational runtime, not Evidence/Claim, not live agent registry.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "attemptId",
    "executionContractId",
    "executionContractVersion",
    "selectedAgentRef",
    "status",
    "idempotencyKey",
    "correlationId",
    "version",
    "createdAt",
    "provenance"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.2.0-oa",
      "description": "Breaking vs 0.1.0-oa — see schema description."
    },
    "attemptId": {
      "description": "Canonical Attempt id; must use xat: prefix.",
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^xat:"
        }
      ]
    },
    "executionContractId": {
      "description": "Bound confirmed ExecutionContract; must use xct: prefix.",
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^xct:"
        }
      ]
    },
    "executionContractVersion": {
      "type": "integer",
      "minimum": 1,
      "description": "Immutable binding to contract OCC version at Select/Start."
    },
    "selectedAgentRef": {
      "$ref": "../common/identifier.schema.json",
      "description": "Selected agent id (after Select; revalidated at Start)."
    },
    "status": {
      "type": "string",
      "enum": [
        "accepted",
        "running",
        "result_pending",
        "succeeded",
        "failed",
        "timeout",
        "cancelled"
      ],
      "description": "Lifecycle (D04 B + D06 C): accepted → running → succeeded|failed|timeout|cancelled; running → result_pending → succeeded|failed. No blocked/starting/planned durable. No partial (T-A6)."
    },
    "idempotencyKey": {
      "type": "string",
      "minLength": 8,
      "description": "Distinct per Attempt (including retries)."
    },
    "correlationId": {
      "$ref": "../common/identifier.schema.json"
    },
    "version": {
      "type": "integer",
      "minimum": 1,
      "description": "Monotone Attempt OCC version."
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "provenance": {
      "$ref": "../common/provenance-record.schema.json"
    },
    "selectionStrategy": {
      "type": "string",
      "enum": [
        "capabilities_deterministic",
        "human_confirmed_proposal"
      ],
      "description": "Closed strategies (D02). Critical profile MUST use human_confirmed_proposal (enforced when selectionProfile=critical). capabilities_deterministic only for closed non-Critical profiles (standard|light|capitalization policy)."
    },
    "selectionProfile": {
      "type": "string",
      "enum": [
        "critical",
        "standard",
        "light",
        "capitalization"
      ]
    },
    "proposedAgentRef": {
      "$ref": "../common/identifier.schema.json",
      "description": "System proposal before human confirm (Critical path)."
    },
    "agentConfirmationRef": {
      "$ref": "../common/identifier.schema.json",
      "description": "Confirmation scope agent_selection. Required when selectionStrategy=human_confirmed_proposal and status is beyond accepted (Start+)."
    },
    "selectionExpiresAt": {
      "$ref": "../common/timestamp.schema.json",
      "description": "TTL for selection (D03). Required when status=accepted and selectionStrategy is present. Revalidated at Start."
    },
    "retryOfAttemptId": {
      "description": "Prior Attempt id when this is an authorized retry (D09). Pattern xat:.",
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^xat:"
        }
      ]
    },
    "retryIndex": {
      "type": "integer",
      "minimum": 1,
      "description": "1-based retry ordinal when retryOfAttemptId set."
    },
    "maxRetriesBudget": {
      "type": "integer",
      "minimum": 0,
      "description": "Bound retry budget reference on Attempt (policy/contract may also constrain)."
    },
    "startedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "completedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "failedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "timedOutAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "cancelledAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "resultPendingAt": {
      "$ref": "../common/timestamp.schema.json",
      "description": "Required when status=result_pending."
    },
    "resultRef": {
      "$ref": "../common/identifier.schema.json",
      "description": "Technical result artefact ref (not Evidence/Claim). Required when status=succeeded."
    },
    "errorRef": {
      "$ref": "../common/identifier.schema.json"
    },
    "stopReason": {
      "type": "string",
      "minLength": 1,
      "pattern": ".*\\S.*"
    },
    "technicalExitCode": {
      "type": "integer"
    },
    "durationMs": {
      "type": "integer",
      "minimum": 0
    },
    "logRefs": {
      "type": "array",
      "maxItems": 16,
      "items": {
        "$ref": "../common/identifier.schema.json"
      }
    },
    "cancellationRequested": {
      "type": "boolean",
      "description": "Cancel requested (best-effort); does not imply cancel completed."
    },
    "irreversibleEffectsPossible": {
      "type": "boolean",
      "description": "Set when mid-flight cancel cannot undo effects (D07); no implicit business rollback."
    },
    "updatedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "launchedAt": {
      "$ref": "../common/timestamp.schema.json",
      "description": "Wall-clock of compliant launch ack (persist-then-launch)."
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "status": {
            "const": "accepted"
          },
          "selectionStrategy": {
            "type": "string"
          }
        },
        "required": [
          "status",
          "selectionStrategy"
        ]
      },
      "then": {
        "required": [
          "selectionExpiresAt"
        ],
        "description": "accepted + selectionStrategy ⇒ selectionExpiresAt (TTL)."
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "result_pending"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "resultPendingAt"
        ]
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "succeeded"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "resultRef",
          "completedAt"
        ],
        "description": "No speculative succeeded without durable resultRef."
      }
    },
    {
      "if": {
        "properties": {
          "selectionProfile": {
            "const": "critical"
          }
        },
        "required": [
          "selectionProfile"
        ]
      },
      "then": {
        "properties": {
          "selectionStrategy": {
            "const": "human_confirmed_proposal"
          }
        },
        "required": [
          "selectionStrategy"
        ],
        "description": "Critical ⇒ human_confirmed_proposal only (D02)."
      }
    },
    {
      "if": {
        "properties": {
          "selectionStrategy": {
            "const": "human_confirmed_proposal"
          },
          "status": {
            "enum": [
              "running",
              "result_pending",
              "succeeded",
              "failed",
              "timeout",
              "cancelled"
            ]
          }
        },
        "required": [
          "selectionStrategy",
          "status"
        ]
      },
      "then": {
        "required": [
          "agentConfirmationRef"
        ],
        "description": "human_confirmed_proposal beyond accepted ⇒ agentConfirmationRef required at Start+."
      }
    },
    {
      "if": {
        "required": [
          "retryOfAttemptId"
        ]
      },
      "then": {
        "required": [
          "retryIndex",
          "maxRetriesBudget"
        ]
      }
    }
  ]
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs`

```
/**
 * Modeled-only ExecutionAttempt / AgentDescriptor governance validation (T-A5).
 * Uses ajv@6 from projects/sfia-studio/app/node_modules — no package.json changes.
 * Forbidden: app/lib/oa/** runtime, app/__tests__/oa/**, SQL, UI, shell adapters.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { createRequire } from "node:module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACK = path.resolve(__dirname, "..");
const SCHEMA_ROOT = path.join(PACK, "schemas");
const EXAMPLES = path.join(PACK, "examples");
const APP_REQUIRE = createRequire(
  path.join(PACK, "../../app/package.json"),
);
const Ajv = APP_REQUIRE("ajv");

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function collectSchemas(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) collectSchemas(full, out);
    else if (ent.name.endsWith(".schema.json")) out.push(full);
  }
  return out;
}

function buildAjv() {
  const ajv = new Ajv({
    allErrors: true,
    schemaId: "auto",
    meta: true,
  });
  for (const file of collectSchemas(SCHEMA_ROOT)) {
    const schema = loadJson(file);
    if (schema.$id) ajv.addSchema(schema);
  }
  return ajv;
}

const ATTEMPT_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/execution/execution-attempt.schema.json";
const AGENT_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/execution/agent-descriptor.schema.json";

const VALID_ATTEMPTS = [
  "execution-attempt-accepted.valid.json",
  "execution-attempt-running.valid.json",
  "execution-attempt-result-pending.valid.json",
  "execution-attempt-succeeded.valid.json",
  "execution-attempt-failed.valid.json",
  "execution-attempt-timeout.valid.json",
  "execution-attempt-cancelled.valid.json",
  "execution-attempt-retry.valid.json",
  "execution-attempt-critical-selection.valid.json",
  "execution-attempt-noncritical-capabilities.valid.json",
];

const INVALID_ATTEMPTS = [
  "invalid/execution-attempt.additional-properties.invalid.json",
  "invalid/execution-attempt.bad-schema-version.invalid.json",
  "invalid/execution-attempt.partial-status.invalid.json",
  "invalid/execution-attempt.missing-required.invalid.json",
  "invalid/execution-attempt.succeeded-without-result.invalid.json",
  "invalid/execution-attempt.result-pending-without-ts.invalid.json",
  "invalid/execution-attempt.critical-capabilities.invalid.json",
  "invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json",
];

const LIFECYCLE = [
  "accepted",
  "running",
  "result_pending",
  "succeeded",
  "failed",
  "timeout",
  "cancelled",
];

function acceptedBase() {
  return loadJson(path.join(EXAMPLES, "execution-attempt-accepted.valid.json"));
}

test("ExecutionAttempt schema compiles with resolved $refs", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  assert.ok(validate, "schema registered");
  assert.equal(typeof validate, "function");
});

test("AgentDescriptor schema compiles with resolved $refs", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(AGENT_SCHEMA_ID);
  assert.ok(validate, "schema registered");
});

test("ExecutionAttempt schemaVersion is 0.2.0-oa breaking bump", () => {
  const schema = loadJson(
    path.join(SCHEMA_ROOT, "execution/execution-attempt.schema.json"),
  );
  assert.equal(schema.properties.schemaVersion.const, "0.2.0-oa");
  assert.equal(schema.additionalProperties, false);
  assert.deepEqual(schema.properties.status.enum, LIFECYCLE);
  assert.ok(!schema.properties.status.enum.includes("partial"));
  assert.ok(!schema.properties.contractId);
  assert.ok(!schema.properties.agentRef);
  assert.ok(schema.properties.executionContractId);
  assert.ok(schema.properties.selectedAgentRef);
  assert.ok(
    /BREAKING|breaking/i.test(schema.description),
    "breaking documented in description",
  );
});

test("valid Attempt examples accept under 0.2.0-oa schema", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const rel of VALID_ATTEMPTS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid Attempt examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const rel of INVALID_ATTEMPTS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("agent-descriptor.valid.json accepts; additionalProperties fails", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(AGENT_SCHEMA_ID);
  const ok = loadJson(path.join(EXAMPLES, "agent-descriptor.valid.json"));
  assert.equal(validate(ok), true, JSON.stringify(validate.errors));
  const bad = loadJson(
    path.join(
      EXAMPLES,
      "invalid/agent-descriptor.additional-properties.invalid.json",
    ),
  );
  assert.equal(validate(bad), false);
});

test("lifecycle status enum closed; partial rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const status of LIFECYCLE) {
    // structural presence only — full fixtures cover conditionals
    assert.ok(LIFECYCLE.includes(status));
  }
  const data = acceptedBase();
  data.status = "partial";
  assert.equal(validate(data), false);
  data.status = "blocked";
  assert.equal(validate(data), false);
  data.status = "starting";
  assert.equal(validate(data), false);
  data.status = "completed";
  assert.equal(validate(data), false);
});

test("additionalProperties rejected on Attempt", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const data = acceptedBase();
  data.runtimeShell = "forbidden";
  assert.equal(validate(data), false);
  assert.ok(
    (validate.errors || []).some((e) => e.keyword === "additionalProperties"),
  );
});

test("schemaVersion 0.1.0-oa rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const ver of ["0.1.0-oa", "0.2.0-OA", "0.2.0", ""]) {
    const data = acceptedBase();
    data.schemaVersion = ver;
    assert.equal(
      validate(data),
      false,
      `schemaVersion=${JSON.stringify(ver)} must fail`,
    );
  }
});

test("multiple Attempts same executionContractId are schema-valid", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const a = acceptedBase();
  const b = acceptedBase();
  b.attemptId = "xat:oa-002";
  b.idempotencyKey = "idem-xat-oa-002";
  assert.equal(a.executionContractId, b.executionContractId);
  assert.equal(validate(a), true, JSON.stringify(validate.errors));
  assert.equal(validate(b), true, JSON.stringify(validate.errors));
});

test("retryOfAttemptId requires retryIndex and maxRetriesBudget", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const ok = loadJson(
    path.join(EXAMPLES, "execution-attempt-retry.valid.json"),
  );
  assert.equal(validate(ok), true, JSON.stringify(validate.errors));
  const bad = acceptedBase();
  bad.retryOfAttemptId = "xat:oa-fail-001";
  assert.equal(validate(bad), false);
});

test("Critical selection requires human_confirmed_proposal", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const bad = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-attempt.critical-capabilities.invalid.json",
    ),
  );
  assert.equal(validate(bad), false);
  const ok = loadJson(
    path.join(EXAMPLES, "execution-attempt-critical-selection.valid.json"),
  );
  assert.equal(validate(ok), true, JSON.stringify(validate.errors));
  assert.equal(ok.selectionStrategy, "human_confirmed_proposal");
  assert.ok(ok.agentConfirmationRef);
});

test("human_confirmed_proposal beyond accepted requires agentConfirmationRef", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const bad = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json",
    ),
  );
  assert.equal(validate(bad), false);
});

test("result_pending requires resultPendingAt; succeeded requires resultRef", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  assert.equal(
    validate(
      loadJson(
        path.join(
          EXAMPLES,
          "invalid/execution-attempt.result-pending-without-ts.invalid.json",
        ),
      ),
    ),
    false,
  );
  assert.equal(
    validate(
      loadJson(
        path.join(
          EXAMPLES,
          "invalid/execution-attempt.succeeded-without-result.invalid.json",
        ),
      ),
    ),
    false,
  );
  assert.equal(
    validate(
      loadJson(
        path.join(EXAMPLES, "execution-attempt-result-pending.valid.json"),
      ),
    ),
    true,
  );
});

test("catalog documents T-A5 commands events errors and persist-then-launch", () => {
  const catalog = fs.readFileSync(
    path.join(PACK, "09-command-event-error-and-transition-catalog.md"),
    "utf8",
  );
  for (const token of [
    "SelectExecutionAgent",
    "StartExecution",
    "CancelExecutionAttempt",
    "RecordExecutionResult",
    "RecordExecutionFailure",
    "RetryExecutionAttempt",
    "GetExecutionAttempt",
    "ListExecutionAttempts",
    "CheckAttemptAuthorization",
    "ExecutionAgentProposed",
    "ExecutionAgentSelected",
    "ExecutionAttemptAccepted",
    "ExecutionStarted",
    "ExecutionResultPending",
    "ExecutionSucceeded",
    "ExecutionFailed",
    "ExecutionTimedOut",
    "ExecutionCancellationRequested",
    "ExecutionCancelled",
    "ExecutionCancellationFailed",
    "ExecutionAuthorizationDenied",
    "ExecutionRetryAuthorized",
    "result_pending",
    "persist-then-launch",
    "launch-then-persist",
    "AGENT_SELECTION_EXPIRED",
    "RESULT_RECORDING_FAILED",
    "RETRY_BUDGET_EXHAUSTED",
    "N3 ≠ Morris",
    "canActAsMorris",
  ]) {
    assert.ok(catalog.includes(token), `missing ${token}`);
  }
  assert.ok(
    catalog.includes("contract stays executing") ||
      catalog.includes("reste executing") ||
      catalog.includes("stays `executing`") ||
      catalog.includes("reste `executing`"),
    "result_pending must not complete contract",
  );
});

test("doc 07 documents Attempt 0.2.0-oa ownership and T-A5/T-A6 boundary", () => {
  const doc07 = fs.readFileSync(
    path.join(PACK, "07-execution-contract-attempt-and-agent-model.md"),
    "utf8",
  );
  for (const token of [
    "0.2.0-oa",
    "0.1.0-oa",
    "accepted",
    "result_pending",
    "persist-then-launch",
    "T-A6",
    "partial",
    "AgentDescriptor",
    "not a live registry",
  ]) {
    assert.ok(doc07.includes(token), `07 missing ${token}`);
  }
  assert.ok(
    !/MODELED VALIDATED/.test(doc07) ||
      /Pas MODELED VALIDATED|not MODELED VALIDATED|Anti-claims/i.test(doc07),
    "must not claim MODELED VALIDATED without anti-claim",
  );
});

test("T-A5 modeled docs do not own Evidence/Claim maturity", () => {
  const doc07 = fs.readFileSync(
    path.join(PACK, "07-execution-contract-attempt-and-agent-model.md"),
    "utf8",
  );
  assert.ok(/T-A6/.test(doc07));
  assert.ok(
    /Evidence|Claim|maturité|maturity/i.test(doc07),
    "boundary must mention Evidence/Claim/maturity as out of T-A5",
  );
  const attemptSchema = fs.readFileSync(
    path.join(SCHEMA_ROOT, "execution/execution-attempt.schema.json"),
    "utf8",
  );
  assert.ok(!/"claimId"/.test(attemptSchema));
  assert.ok(!/"evidenceId"/.test(attemptSchema));
  assert.ok(!/"maturity"/.test(attemptSchema));
});

test("anti-runtime strings present on AgentDescriptor and Attempt descriptions", () => {
  const agent = loadJson(
    path.join(SCHEMA_ROOT, "execution/agent-descriptor.schema.json"),
  );
  const attempt = loadJson(
    path.join(SCHEMA_ROOT, "execution/execution-attempt.schema.json"),
  );
  assert.ok(/NOT an operational|not a live registry|NOT.*live registry/i.test(agent.description));
  assert.ok(/not operational runtime|Anti-claims/i.test(attempt.description));
});

test("attemptId and executionContractId prefixes enforced", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const badId = acceptedBase();
  badId.attemptId = "att:oa-001";
  assert.equal(validate(badId), false);
  const badXct = acceptedBase();
  badXct.executionContractId = "contract:oa-001";
  assert.equal(validate(badXct), false);
});

test("expired selection narrative documents runtime Start refuse", () => {
  const narrative = fs.readFileSync(
    path.join(EXAMPLES, "execution-attempt-selection-expired.narrative.md"),
    "utf8",
  );
  assert.ok(narrative.includes("AGENT_SELECTION_EXPIRED"));
  assert.ok(narrative.includes("selectionExpiresAt"));
});

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/agent-descriptor.valid.json`

```
{
  "schemaVersion": "0.1.0-oa",
  "agentId": "agent:cursor-docs",
  "agentType": "docs_adapter",
  "adapterRef": "adapter:cursor-md-export",
  "supportedCapabilities": [
    "cap:git-docs"
  ],
  "allowedActions": [
    "publish-modeled-pack"
  ],
  "allowedTargets": [
    "sfia-v3-modeled/v3-native-option-a"
  ],
  "allowedScopes": [
    "docs+schemas+examples only"
  ],
  "trustLevel": "bounded",
  "executionMode": "adapter_async",
  "healthStatus": "healthy",
  "version": 1,
  "enabled": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:agent-desc-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "system",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "createdAt": "2026-07-23T21:00:00.000Z",
  "updatedAt": "2026-07-25T12:00:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-accepted.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "accepted",
  "idempotencyKey": "idem-xat-oa-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-running.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-running-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "running",
  "idempotencyKey": "idem-xat-running-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "startedAt": "2026-07-25T12:01:00.000Z",
  "launchedAt": "2026-07-25T12:01:00.000Z",
  "updatedAt": "2026-07-25T12:01:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-result-pending.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-rp-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "result_pending",
  "idempotencyKey": "idem-xat-rp-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "light",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "startedAt": "2026-07-25T12:01:00.000Z",
  "launchedAt": "2026-07-25T12:01:00.000Z",
  "resultPendingAt": "2026-07-25T12:10:00.000Z",
  "technicalExitCode": 0,
  "durationMs": 540000,
  "logRefs": [
    "log:oa-rp-001"
  ],
  "updatedAt": "2026-07-25T12:10:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-succeeded.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-ok-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "succeeded",
  "idempotencyKey": "idem-xat-ok-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "startedAt": "2026-07-25T12:01:00.000Z",
  "launchedAt": "2026-07-25T12:01:00.000Z",
  "completedAt": "2026-07-25T12:08:00.000Z",
  "resultRef": "res:oa-tech-001",
  "technicalExitCode": 0,
  "durationMs": 420000,
  "logRefs": [
    "log:oa-ok-001"
  ],
  "updatedAt": "2026-07-25T12:08:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-failed.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-fail-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "failed",
  "idempotencyKey": "idem-xat-fail-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "startedAt": "2026-07-25T12:01:00.000Z",
  "launchedAt": "2026-07-25T12:01:00.000Z",
  "failedAt": "2026-07-25T12:05:00.000Z",
  "errorRef": "err:exec-fail-001",
  "stopReason": "adapter_error",
  "technicalExitCode": 1,
  "durationMs": 240000,
  "updatedAt": "2026-07-25T12:05:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-timeout.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-timeout-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "timeout",
  "idempotencyKey": "idem-xat-timeout-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "startedAt": "2026-07-25T12:00:00.000Z",
  "launchedAt": "2026-07-25T12:00:00.000Z",
  "timedOutAt": "2026-07-25T12:30:00.000Z",
  "errorRef": "err:timeout-001",
  "stopReason": "attempt_deadline_exceeded",
  "durationMs": 1800000,
  "updatedAt": "2026-07-25T12:30:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-cancelled.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-cancel-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "cancelled",
  "idempotencyKey": "idem-xat-cancel-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "startedAt": "2026-07-25T12:01:00.000Z",
  "launchedAt": "2026-07-25T12:01:00.000Z",
  "cancelledAt": "2026-07-25T12:03:00.000Z",
  "cancellationRequested": true,
  "stopReason": "contract_superseded_mid_flight",
  "irreversibleEffectsPossible": true,
  "updatedAt": "2026-07-25T12:03:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-retry.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-retry-002",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "accepted",
  "idempotencyKey": "idem-xat-retry-002",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T13:00:00.000Z",
  "retryOfAttemptId": "xat:oa-fail-001",
  "retryIndex": 1,
  "maxRetriesBudget": 2
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-critical-selection.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-crit-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "running",
  "idempotencyKey": "idem-xat-crit-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-crit-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "approver",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "confirmation",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "human_confirmed_proposal",
  "selectionProfile": "critical",
  "proposedAgentRef": "agent:cursor-docs",
  "agentConfirmationRef": "cnf:agent-sel-001",
  "selectionExpiresAt": "2026-07-25T12:20:00.000Z",
  "startedAt": "2026-07-25T12:02:00.000Z",
  "launchedAt": "2026-07-25T12:02:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-noncritical-capabilities.valid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-std-cap-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "accepted",
  "idempotencyKey": "idem-xat-std-cap-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:10:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-selection-expired.narrative.md`

```
# Narrative — expired selection (schema-valid accepted; Start must refuse)

An Attempt may remain `accepted` with `selectionExpiresAt` in the past.
JSON Schema Draft-07 cannot compare timestamps to "now".

Runtime / future delivery MUST refuse `StartExecution` with `AGENT_SELECTION_EXPIRED`
when `selectionExpiresAt < now`, then require a fresh `SelectExecutionAgent`.

This file is documentation only — not a JSON Schema example.

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.additional-properties.invalid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "accepted",
  "idempotencyKey": "idem-xat-oa-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "hostileExtraField": "must-fail"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.bad-schema-version.invalid.json`

```
{
  "schemaVersion": "0.1.0-oa",
  "attemptId": "xat:oa-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "accepted",
  "idempotencyKey": "idem-xat-oa-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.critical-capabilities.invalid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "accepted",
  "idempotencyKey": "idem-xat-oa-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionProfile": "critical",
  "selectionStrategy": "capabilities_deterministic",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-hc-bad-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "running",
  "idempotencyKey": "idem-xat-hc-bad-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "human_confirmed_proposal",
  "selectionProfile": "critical",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "startedAt": "2026-07-25T12:01:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.missing-required.invalid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-miss-001",
  "status": "accepted"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.partial-status.invalid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "partial",
  "idempotencyKey": "idem-xat-oa-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  }
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.result-pending-without-ts.invalid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-rp-bad-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "result_pending",
  "idempotencyKey": "idem-xat-rp-bad-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  }
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.succeeded-without-result.invalid.json`

```
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-spec-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "succeeded",
  "idempotencyKey": "idem-xat-spec-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "completedAt": "2026-07-25T12:08:00.000Z"
}

```


## FILE: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/agent-descriptor.additional-properties.invalid.json`

```
{
  "schemaVersion": "0.1.0-oa",
  "agentId": "agent:cursor-docs",
  "agentType": "docs_adapter",
  "adapterRef": "adapter:cursor-md-export",
  "supportedCapabilities": [
    "cap:git-docs"
  ],
  "allowedActions": [
    "publish-modeled-pack"
  ],
  "allowedTargets": [
    "sfia-v3-modeled/v3-native-option-a"
  ],
  "allowedScopes": [
    "docs+schemas+examples only"
  ],
  "trustLevel": "bounded",
  "executionMode": "adapter_async",
  "healthStatus": "healthy",
  "version": 1,
  "enabled": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:agent-desc-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "system",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "createdAt": "2026-07-23T21:00:00.000Z",
  "updatedAt": "2026-07-25T12:00:00.000Z",
  "liveRegistryEndpoint": "http://evil"
}

```


## FILE (modified full): `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/README.md`

```
# T-A5 — Agent Selection and Execution (Framing Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout (AT `12-delivery-slices…`) |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate arbitration** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **HEAD cadrage** | `f6cb8f39c772c2adf02e93933dbb2ceef096764f` |
| **Runtime `app/lib/oa/**`** | **NONE** (interdit) |
| **Modeled schemas / catalogues** | **MATERIALIZED** Attempt `0.2.0-oa` + AgentDescriptor `0.1.0-oa` + catalogs — **MODELED VALIDATION REQUIRED** |
| **Push / PR / merge** | **NONE** (projet) |
| **Statut pack** | **MATERIALIZED — MODELED VALIDATION REQUIRED** |
| **Verdict materialization** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED` |
| **Gate suivant** | `GO VALIDATE T-A5 MODELED — …` (**NOT consumed / NOT presumed**) |

## Objectif

Cadrer, arbitrer, puis **matérialiser** les décisions Morris T-A5 (agent, Attempt, exécution) en modeled + docs — **sans** runtime, agent opérationnel, Attempt exécutable, shell, réseau, Cursor/MCP, SQL, UI.

## Périmètre

- Framing (`01-framing.md`)
- Arbitration (`02-arbitration.md`) — décisions Morris **APPROVED**
- Materialization (`03-materialization.md`) — schemas / catalogs / exemples / tests
- Réserves héritées maintenues OPEN
- Commits locaux + handoff review

## Hors périmètre

- Runtime T-A5 / delivery exécutable
- Push branche projet, PR, merge
- Fermeture de réserves
- Cutover SFIA v2.6 / MethodMode / OPS1
- Evidence / Claim / maturité (T-A6)

## Sources

- Décisions Morris D01–D10 (voir ci-dessous et `03-materialization.md`)
- Modeled 07/09 ; Attempt `0.2.0-oa` ; ExecutionContract `0.2.0-oa`
- Runtime T-A4 `execution-contract/**` (lecture seule)
- CKC cadrage pilot (candidate, `executionAuthority=false`)

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage
3. [02-arbitration.md](./02-arbitration.md) — pack d’arbitrage + **APPROVED BY MORRIS**
4. [03-materialization.md](./03-materialization.md) — **matérialisation**

## Réserves (héritées — OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (blocker exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (blocker exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-T-A4-1/2/3 | resolved-by-modeled (non fermées globalement) |

## Décisions Morris (APPROVED — materialization)

| ID | Approval |
|----|----------|
| D01 | APPROVE A — Attempt separate aggregate |
| D02 | APPROVE C WITH CONDITION — Critical: system propose + human confirm; Option A capabilities only non-Critical closed profile |
| D03 | APPROVE A WITH CONDITION — Select and Start separate; TTL + revalidate at Start |
| D04 | APPROVE B — accepted → running → terminals ; + result_pending ; no blocked/starting durable |
| D05 | APPROVE A — persist-then-launch ; launch-then-persist forbidden |
| D06 | APPROVE C — result_pending ; no speculative completed |
| D07 | APPROVE B+D — stop conditions + cancel best-effort ; no implicit business rollback |
| D08 | APPROVE A WITH CONDITIONS — authority matrix ; Morris emergency ; auto-safety bounded ; RecordResult adapter-bound ; system never Morris |
| D09 | APPROVE A — timeout → contract failed ; retry = new Attempt + retryOf + budget + auth |
| D10 | APPROVE A+C — T-A5 technical only ; Evidence/Claim/maturity = T-A6 |

Détail : [03-materialization.md](./03-materialization.md) · marquage : [02-arbitration.md](./02-arbitration.md).

## Anti-claims

- Pas T-A5 **MODELED VALIDATED** (gate validate non consommé)
- Pas T-A5 **AUTHORIZED** runtime / **DELIVERY READY** / **IMPLEMENTED**
- Pas agent **selected** opérationnel / Attempt **operational** / execution **enabled**
- Pas DATABASE SELECTED / réserves **CLOSED**
- Pas Option A **complete**
- Pas push / PR / merge / force-push projet ce cycle

```


## FILE (modified full): `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/02-arbitration.md`

```
# 02 — Arbitration Pack T-A5 Agent Selection and Execution

## Morris decisions APPROVED (materialization cycle)

Gate materialize consommé : `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A`.

Livrable de matérialisation : [03-materialization.md](./03-materialization.md).

| ID | Décision Morris (EXACT) |
|----|-------------------------|
| **D01** | **APPROVE A** — Attempt separate aggregate |
| **D02** | **APPROVE C WITH CONDITION** — Critical: system propose + human confirm; Option A capabilities only non-Critical closed profile |
| **D03** | **APPROVE A WITH CONDITION** — Select and Start separate; TTL + revalidate at Start |
| **D04** | **APPROVE B** — Attempt lifecycle: accepted → running → succeeded\|failed\|timeout\|cancelled; no blocked/starting durable; + result_pending per D06 |
| **D05** | **APPROVE A** — persist-then-launch; launch-then-persist forbidden |
| **D06** | **APPROVE C** — result_pending; no speculative completed |
| **D07** | **APPROVE B+D** — stop conditions + cancel best-effort; no implicit business rollback |
| **D08** | **APPROVE A WITH CONDITIONS** — authority matrix; Morris emergency; auto-safety bounded; RecordResult adapter bound to own Attempt; system never Morris |
| **D09** | **APPROVE A** — Attempt timeout → contract failed; retry = new Attempt + retryOf + budget + explicit auth |
| **D10** | **APPROVE A+C** — T-A5 technical only; Evidence/Claim/maturity = T-A6 |

Réserves B5, R1, R-T-A3-1…4 restent **OPEN** (non fermées par ce cycle).

**Statut pack (post-materialize) :** décisions **APPROVED BY MORRIS** · modeled **MATERIALIZED** · **MODELED VALIDATION REQUIRED** (gate validate non consommé).

L’analyse candidate ci-dessous est **conservée** comme historique d’arbitrage ; elle ne remplace pas les décisions APPROVED ci-dessus.

---

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Arbitration (Critical) → Materialization |
| **Gate arbitration** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD cadrage** | `f6cb8f39c772c2adf02e93933dbb2ceef096764f` |
| **Statut** | **MORRIS DECISIONS APPROVED — MATERIALIZED** (voir `03-materialization.md`) |
| **Runtime** | **NONE** |
| **Décisions Morris** | **D01–D10 APPROVED BY MORRIS** (table ci-dessus) |
| **Verdict arbitration (historique)** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED` |
| **Verdict materialization** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED` |

---

## 1. Sources

| Source | Usage |
|--------|-------|
| Handoff cadrage blob `d4923b58…` | Verdict FRAMING COMPLETED |
| `01-framing.md` + `README.md` | SoT recommandations initiales |
| Modeled 07 / 09 ; Attempt `0.1.0-oa` ; Contract `0.2.0-oa` | Compatibilité (lecture) |
| Runtime T-A4 `execution-contract/**` | Gate CheckAuth, ownership |
| T-A3 Authority / Confirmation / Critical | Matrice autorité |
| Réserves B5, R1, R-T-A3-1…4 | Contraintes |
| CKC `pilots/01-cadrage.md` | candidate ; `executionAuthority=false` ; **aucune autorité sur décisions** |

---

## 2. Rappel cadrage

Question structurante inchangée : transformer un ExecutionContract **confirmé** en Attempt borné + agent autorisé, sans contourner l’autorité humaine ni élargir le contrat.

Recommandations initiales (`01-framing.md`) à challenger : D01=A, D02=C(+A dérogation), D03=A, D04=A, D05=A, D06=A, D07=B, D08=A+Morris cancel, D09=A, D10=A+C.

### Évolutions tracées vs cadrage (recommandations arbitration ≠ silent edits)

| ID | Cadrage | Arbitration (candidate) | Nature |
|----|---------|-------------------------|--------|
| D04 | running→terminal only | Ajouter état préparatoire **`accepted`** (persist pré-launch) puis `running` | **Challenge accepté** — cohérence D05 |
| D06 | rester `running` + retry | Préférer **`result_pending`** léger **ou** flag `resultCaptureState=pending` sans machine lourde ; fallback A | **Challenge ops** |
| D02 | C Critical / A dérogation | Règle **dépendante du profil**, fermée (pas libre config) | **Précision** |
| D07 | B cancel best-effort | B **par défaut** + table par cause (D/A/C selon stop) | **Précision** |
| D08 | A + Morris cancel | Distinguer cancel métier / emergency stop / auto-safety borné | **Précision** |
| Autres | inchangés en substance | Confirmés après challenge | — |

---

## 3. Méthode

Pour chaque D-T-A5-0N : reformuler → exhaustivité options → dépendances → grille (simplicité, sécurité, autorité humaine, déterminisme, atomicité, concurrence, réversibilité, testabilité, obs, modeled, T-A4, T-A6/7, dette, coût) → reco candidate + contre-argument + risques + conséquence rejet + gate futur.

**Aucune reco ≠ décision Morris.**

---

## 4. Analyse D-T-A5-01 — Modèle Attempt

**Question :** ExecutionAttempt agrégat autonome ou intégré au contrat ?

| Critère | A séparé | B embarqué | C events-only |
|---------|----------|------------|---------------|
| Cardinalité N Attempts / contrat | Naturel | Array lourd | Historique faible |
| Retry / historique | Fort | Moyen | Faible |
| Concurrence | OCC Attempt | Contension contrat | Difficile |
| Invariants inter-agrégats | Dette sync | Plus local | Aucun état |
| Persistence | Dual write | Mono | Logs only |
| Compat Attempt 0.1.0-oa | **Aligné** | Breaking embedding | Ignore schema |

**Reco arbitration :** **A** (inchangé).

**Contre-argument :** dual-write Attempt↔contrat (R1 / R-T-A3-2).

**Si Morris rejette A :** B force modeled breaking ; C bloque retries auditables → HOLD modeled.

**Réserves :** R1, R-T-A3-2 contraignent ; garde-fou OCC + compensate.

**Gate futur :** modeled Attempt si champs manquants ; pas blocker modeled minimal si A.

---

## 5. Analyse D-T-A5-02 — Sélection d’agent

**Question :** Comment lier un agent au contrat avant/pendant Start ?

| | A capabilities | B fixé dans contrat | C confirm humaine |
|--|----------------|---------------------|-------------------|
| Autorité humaine | Faible | Haute (via Confirm T-A4) | Haute (scope dédié) |
| Déterminisme | Haut si registry figé | Haut | Moyen |
| Impact T-A4 | Faible | **Élevé** (`selectedAgentRef` aujourd’hui T-A5) | Moyen (Confirmation scope) |
| Critical | Risqué sans humain | OK si Confirm | **Meilleur** |

**Forme de règle :** **dépendante du profil**, **fermée** (pas stratégie libre runtime) :
- Critical / Capitalization → **C** obligatoire
- Standard / Light → **A** autorisé seulement si policy pack + audit + allowlist agents
- **B** = option Morris séparée (implique rework ownership T-A4)

**Autorité pour confirmer agent (C) :** même barre que `requiredAuthority` du contrat (N1|N2|N3|MORRIS via resolver T-A3) ; Confirmation scope `agent_selection` **distincte** de Confirm contrat (déjà consommée).

**Reco :** **C par défaut Critical** ; **A dérogation profil** ; **B HOLD** sauf GO T-A4 ownership.

**Contre-argument C :** latence / double Confirmation.

**Si rejet C :** A seul → risque surprise agent en Critical.

---

## 6. Analyse D-T-A5-03 — Select et Start

**Question :** Une ou deux commandes ?

| | A séparées | B SelectAndStart | C Select optionnel |
|--|------------|------------------|-------------------|
| Audit | Meilleur | Moyen | Variable |
| TOCTOU Select→Start | Fenêtre | Atomique | Selon D02 |
| Changer d’agent | Oui avant Start | Non sans cancel | Oui |
| Sélection non démarrée | Dette + **TTL** requis | N/A | N/A |

**Reco :** **A** + **expiration sélection** (TTL candidat : minutes configurées au contrat / défaut court) + revalidation agent au Start.

**Contre-argument :** complexité ops vs B.

**Dépendances :** D02 (si B-contrat, C plus naturel) ; D05 (Start = persist+launch).

---

## 7. Analyse D-T-A5-04 — Lifecycle

**Challenge cadrage :** `running` avant launch trompe si persist-then-launch.

**Lifecycle Attempt recommandé (candidate) :**

```
accepted → running → succeeded | failed | timeout | cancelled
         ↘ (launch fail) → failed | cancelled
```

| Point | Verdict candidate |
|-------|-------------------|
| `accepted` (= persist pré-launch) | **Oui** — requis par D05 A |
| `timeout` état distinct Attempt | **Oui** (schema 0.1.0-oa) ; contrat mappe → **`failed`** |
| `blocked` | **Erreur / event**, pas état |
| `succeeded` ↔ contrat `completed` | Vocabulaire dual OK ; mapping 1:1 documenté |
| Launch non démarré après persist | Reste `accepted` ; reconciler/launch ou cancel ; **pas** `running` |

**Contrat T-A5 (inchangé substance) :** `confirmed → executing → completed | failed | cancelled`
Passage `executing` **au moment du launch réussi** (transition `accepted→running`), pas à la seule création Attempt.

**Évolution vs cadrage D04 A :** ajout `accepted` — tracé §2.

**Compat modeled :** schema Attempt n’a pas `accepted` aujourd’hui → **blocker modeled soft** (rework Attempt statuses) avant runtime strict ; runtime mémoire peut mapper localement sous GO modeled.

**Contre-argument :** un état de plus = dette ; alternative = `running` + flag `launched=false` (moins clair).

---

## 8. Analyse D-T-A5-05 — Persist / launch

| | A persist-then-launch | B launch-then-persist | C outbox durable | D lease puis launch |
|--|----------------------|----------------------|------------------|---------------------|
| Agent orphelin | Évite | **Risque majeur** | Évite | Réduit |
| Crash mid | Attempt `accepted` sans effet | Effets sans audit | Rejouable | Lease expire |
| DB absente | OK mémoire + reconcile | Dangereux | Dette SQL | OK mémoire |

**Reco :** **A** ; **C** = évolution post-DATABASE (non selected) ; **B rejeté** ; D optionnel raffinement de A.

**Crash entre persist et launch :** reconciler idempotent (re-launch si `accepted` + key) ou cancel après TTL.

**Dette sans DB :** journal append-only mémoire / process ; R-T-A3-2 OPEN.

---

## 9. Analyse D-T-A5-06 — Échec RecordResult

**Challenge :** Attempt terminé mais `running` trompe les ops.

| | A stay running + retry | B failed immédiat | C `result_pending` | D outbox technique |
|--|------------------------|-------------------|--------------------|--------------------|
| Honnêteté ops | Faible | Trompe « échec agent » | **Bonne** | Bonne |
| Complexité | Faible | Faible | Faible-moyenne | Haute |
| Completed spéculatif | Interdit | Interdit | Interdit | Interdit |

**Reco arbitration :** **C** (état Attempt `result_pending` **ou** champ `resultCaptureState=pending` sur Attempt `running` — Morris choisit forme) + retry Record borné ; après budget → `failed` technique `RESULT_RECORDING_FAILED` **sans** claim métier.

**Évolution vs cadrage :** A → C préféré ; A acceptable si Morris refuse nouvel état.

**Contre-argument C :** divergence schema 0.1.0-oa (pas `result_pending`) → modeled.

---

## 10. Analyse D-T-A5-07 — Obsolescence mid-flight

**Reco base :** **B cancel best-effort**, affinée par cause :

| Cause | Comportement candidat |
|-------|----------------------|
| Contrat superseded | Cancel best-effort ; pas de nouvel Start sur ancien |
| Decision superseded | Cancel best-effort (aligné modeled 07) |
| Perte d’autorité | Cancel / refuse Record non autorisé |
| Critical non conforme | Cancel fail-closed (R-T-A3-1) |
| Morris stop | **Emergency stop** obligatoire (D08) |
| Action irréversible engagée | Cancel best-effort + Attempt `failed`/`cancelled` + flag `irreversibleEffectsPossible` ; **pas** rollback métier T-A5 |

Option **D** (stop conditions contrat) **compose** B : le contrat peut autoriser A (terminer + stale) **seulement** si stop condition explicite non-Critical.

**Contre-argument B :** effets partiels orphelins — acceptable vs continuer aveugle.

---

## 11. Analyse D-T-A5-08 — Autorités

### Matrice fermée candidate

| Action | Acteur autorisé | Notes |
|--------|-----------------|-------|
| SelectExecutionAgent | Humain N≥ `requiredAuthority` ; système **uniquement** si D02=A dérogation | Resolver T-A3 ; jamais claim client Morris |
| StartExecution | Même barre que contrat | Recheck TOCTOU |
| CancelExecutionAttempt (métier) | N≥ **ou** initiateur Start si policy | |
| Emergency stop | **Morris toujours** (+ automate safety borné ci-dessous) | |
| RecordExecutionResult / Failure | **Adaptateur authentifié lié à `attemptId`+`agentRef`** | Un adaptateur = **son** Attempt seulement |
| Retry (nouvel Attempt) | Même barre que Start | Pas auto sans Decision/policy |
| Kill switch | Morris | Prioritaire |

**Auto-safety sans autorité équivalente ?**
**Oui, borné :** timeout engine / health kill / invariant violation → transition technique `failed`/`cancelled` **sans** élargir scope ; audit `systemSafety` ; **ne pas** se déclarer Morris.

**Distinctions :**
- cancel préventif (pré-`running`) ≠ cancel métier (running) ≠ emergency stop (Morris/safety)

**Reco :** matrice ci-dessus (A cadrage + précisions).

---

## 12. Analyse D-T-A5-09 — Timeout et retry

| Sujet | Reco candidate |
|-------|----------------|
| Timeout | Par **Attempt** (deadline) ; plafond optionnel au **contrat** (budget cumulé) |
| Mapping contrat | Attempt `timeout` → contrat `failed` (≠ succès, ≠ cancelled) |
| Retry | **Toujours nouvel Attempt** + `retryOf` ; **pas** in-place |
| Auto-retry | **Interdit** sans Decision/policy explicite non-Critical |
| Autorité retry | = Start |
| IdempotencyKey | **Distincte** par Attempt |
| Boucle | `maxRetries` dans contrat / doctrine ; défaut bas |
| Non réversible | Retry refusé ou exige Confirmation additionnelle |

**Reco :** **A** cadrage confirmée + budget cumulé.

---

## 13. Analyse D-T-A5-10 — Frontière T-A5 / T-A6

**T-A5 peut enregistrer :** statut technique, exit code, durée, refs logs, résultat brut **borné**, erreur technique, `resultRef`/`errorRef`.

**T-A5 ne décide pas :** conformité métier, acceptation finale, preuve suffisante, claim, maturité, readiness produit.

**Handoff minimal vers T-A6 :**

```
{ attemptId, executionContractId, contractVersion, agentRef,
  technicalStatus, resultRef?, errorRef?, correlationId,
  startedAt, endedAt, stopReason? }
```

**Reco :** **A** (+ `partial` interprété seulement en T-A6 si présent).

---

## 14. Matrice de dépendances

```
D02 ──► D03 ──► D05 ──► D04
  │                │
  └──────────────► D08
D01 ──► D09 ──► D04
D05 ──► D06 ──► D10
D07 ──► D08
D04 ◄── D06
```

**Ordre recommandé de décision Morris :**

1. **D10** (frontière résultat — cadre le reste)
2. **D01** (agrégat)
3. **D02** (sélection)
4. **D08** (autorité)
5. **D05** (persist/launch)
6. **D04** (lifecycle — dépend D05/D06)
7. **D06** (record failure)
8. **D03** (Select/Start)
9. **D09** (timeout/retry)
10. **D07** (obsolescence mid-flight)

---

## 15. Réserves × décisions

| Reserve | Contraintes | Avant modeled | Avant runtime | Avant exec réelle | Garde-fou si OPEN |
|---------|-------------|---------------|---------------|-------------------|-------------------|
| B5 | D07 mid-flight LPS | Non | Soft | Soft | fail-closed LPS inactive |
| R1 | D01 dual-write, D05/D06 | Soft | Soft | **Hard** | OCC + compensate |
| **R-T-A3-1** | D07/D08/Start Critical | Non (doc fail-closed) | Soft (tests) | **HARD blocker** Critical réel | refuse Start si non-ack |
| **R-T-A3-2** | D05/D06 multi-agrégat | Soft | Soft mémoire | **HARD** exec réelle | persist-then-launch + reconcile |
| R-T-A3-3 | D08 resolver | Non | Soft | Soft | port + tests anti-spoof |
| R-T-A3-4 | D02/D08 errors | Soft catalog | Soft | Soft | mapping AUTHORITY_DENIED |

### Blockers qualifiés

| Surface | R-T-A3-1 | R-T-A3-2 |
|---------|----------|----------|
| Modeled T-A5 | **Non-blocker** (doc fail-closed suffit) | **Non-blocker** |
| Runtime T-A5 mémoire | **Non-blocker** si tests refuse Start | **Non-blocker** avec compensate documenté |
| Exécution réelle / adapters non-fixture | **BLOCKER** jusqu’à ack path | **BLOCKER** jusqu’à stratégie multi-store acceptée |

**Aucune réserve fermée.**

---

## 16. Trajectoire candidate globale (non validée)

1. Attempt **agrégat séparé** (D01 A)
2. Sélection **C Critical** ; **A** dérogation profil fermée (D02)
3. Select et Start **séparés** + TTL sélection (D03 A)
4. Lifecycle Attempt : **`accepted → running → terminals`** (D04 évolué)
5. **Persist-then-launch** (D05 A)
6. Capture résultat : **`result_pending` / flag pending** + retry Record ; jamais completed spéculatif (D06 C)
7. Obsolescence : **cancel best-effort** + table par cause ; Morris emergency stop (D07/D08)
8. Matrice autorité fermée ; adaptateur = son Attempt seulement (D08)
9. Timeout Attempt → contrat failed ; retry = nouvel Attempt + budget (D09 A)
10. T-A5 technique only → handoff refs T-A6 (D10 A)

---

## 17. Formulaire d’arbitrage Morris (copier-répondre)

Répondre pour chaque décision : `APPROVE A` / `APPROVE B` / `APPROVE C` / `APPROVE D` (si présent) / `REWORK` / `HOLD` + conditions.

---

### D-T-A5-01 — Attempt autonome ou intégré ?
- Option A : agrégat ExecutionAttempt séparé
- Option B : Attempt embarqué dans ExecutionContract
- Option C : Attempt purement événementiel
- Recommandation : **A**
- Impacts : retries/historique naturels ; dual-write ; aligné schema 0.1.0-oa
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-02 — Stratégie de sélection d’agent ?
- Option A : déterministe par capabilities
- Option B : agent fixé dans ExecutionContract (impact T-A4)
- Option C : proposition système + confirmation humaine (scope dédié)
- Recommandation : **C obligatoire Critical** ; **A dérogation Standard/Light fermée** ; B = HOLD sauf GO T-A4
- Impacts : Confirmation agent distincte ; autorité = `requiredAuthority`
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles : (ex. « C only Critical ; A allowed if … »)

### D-T-A5-03 — Select et Start ?
- Option A : commandes séparées + TTL sélection
- Option B : SelectAndStart atomique
- Option C : Select optionnel / Start sélectionne
- Recommandation : **A**
- Impacts : audit ; fenêtre TOCTOU mitigée par revalidation Start + TTL
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-04 — Lifecycle Attempt / contrat ?
- Option A : `running → terminals` seulement (cadrage initial)
- Option B : `accepted → running → terminals` (cohérent persist-then-launch)
- Option C : + états `agent_selected` / `starting` / `blocked` durables
- Recommandation : **B** (`timeout` état Attempt ; contrat mappe timeout→failed ; `blocked`=erreur)
- Impacts : modeled Attempt statuses à aligner ; vocabulaire succeeded↔completed
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-05 — Ordre persistance / lancement ?
- Option A : persist Attempt puis launch
- Option B : launch puis persist
- Option C : outbox / transaction durable
- Option D : lease préparatoire puis launch
- Recommandation : **A** (D raffine A ; C post-DB ; B rejeté)
- Impacts : Attempt `accepted` sans effet possible ; reconcile idempotent
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-06 — Agent terminé mais résultat non persisté ?
- Option A : rester `running` + retry Record
- Option B : passer `failed` immédiat
- Option C : `result_pending` (état ou flag) + retry puis failed technique
- Option D : outbox technique
- Recommandation : **C** (A acceptable si refus nouvel état ; completed spéculatif interdit)
- Impacts : honnêteté ops ; possible modeled
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-07 — Obsolescence mid-flight ?
- Option A : laisser terminer + marquer stale
- Option B : cancel best-effort (défaut)
- Option C : interruption obligatoire always
- Option D : selon stop conditions contrat (compose B)
- Recommandation : **B + D** (table par cause ; Morris stop = obligatoire)
- Impacts : effets partiels possibles ; pas rollback métier T-A5
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / APPROVE D / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-08 — Matrice d’autorités ?
- Option A : Select/Start = barre contrat ; Cancel métier N≥ ; Morris emergency ; Result = adaptateur lié Attempt
- Option B : Select barre inférieure à Start
- Option C : Cancel uniquement Morris
- Recommandation : **A** + auto-safety technique borné (timeout/health) sans claim Morris
- Impacts : anti-spoof Record ; distinctions cancel types
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-09 — Timeout et retry ?
- Option A : timeout Attempt → contrat failed ; retry = nouvel Attempt + budget ; pas auto-retry
- Option B : auto-retry in-place
- Option C : timeout = cancelled contrat
- Recommandation : **A**
- Impacts : `retryOf` ; maxRetries ; idempotencyKey distincte
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

### D-T-A5-10 — Frontière T-A5 / T-A6 ?
- Option A : T-A5 technique only (refs) ; Evidence/Claim/maturité = T-A6
- Option B : T-A5 ouvre Evidence
- Option C : `partial` interprété seulement en T-A6
- Recommandation : **A + C**
- Impacts : handoff JSON minimal ; empêche fuite maturité
- Décision Morris : APPROVE A / APPROVE B / APPROVE C / REWORK / HOLD
- Conditions éventuelles :

---

## 18. Anti-claims

- Décisions D-T-A5-01…10 **APPROVED BY MORRIS** (materialization) — voir table en tête + `03-materialization.md`
- Pas T-A5 **MODELED VALIDATED** / delivery **authorized** / runtime **implemented**
- Pas agent selected / Attempt implemented / execution enabled (opérationnel)
- Pas DATABASE SELECTED / réserves fermées
- Pas push projet / PR / merge

---

## 19. Gate potentiel (historique arbitration) / gate suivant

Après réponses Morris (fait) : gate materialize **CONSUMED**.

Gate suivant (non consommé) :

`GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A`

Ce gate **n’est pas consommé** et **n’est pas présumé**.

---

## 20. Verdict

**Historique arbitration :** `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED`

**Materialization :** `SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED`

```


## FILE (modified full): `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/07-execution-contract-attempt-and-agent-model.md`

```
# 07 — ExecutionContract, Attempt et agents

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise · **T-A4 supersession rework aligned** · **T-A5 Attempt 0.2.0-oa materialization** |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Rework gate T-A4** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **Materialize gate T-A5** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (pack baseline)** | `0.1.0-oa` |
| **ExecutionContract schemaVersion** | `0.2.0-oa` (**breaking** vs `0.1.0-oa`) |
| **ExecutionAttempt schemaVersion** | `0.2.0-oa` (**breaking** vs `0.1.0-oa`) |
| **AgentDescriptor schemaVersion** | `0.1.0-oa` (docs-first ; **not a live registry**) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME · Pas T-A5 RUNTIME · Pas agent opérationnel · Pas Attempt opérationnel · Pas exécution lancée |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `07-execution-contract-attempt-and-agent-model.md` |
| **Schemas** | `schemas/execution/execution-contract.schema.json` · `execution-attempt.schema.json` · `agent-descriptor.schema.json` |

## ExecutionContract (F) — Option A single schema

Statuts (enum conservée) : draft · proposed · validated · confirmation_required · confirmed · executing · completed · failed · cancelled · superseded.

### Ownership (Morris VALIDATED T-A4 + T-A5 materialization)

| Tranche | Produit / possède |
|---------|-------------------|
| **T-A4** | gouvernance : draft → proposed → validated → confirmation_required → **confirmed** ; cancelled (pré-exec) ; superseded ; Build / Validate / Confirm / Supersede / Cancel(pre-exec) |
| **T-A5** | agent selection (`selectedAgentRef` sur Attempt + event ; champ contrat `selectedAgentRef` reste ownership T-A5) ; Select / Start ; Attempt lifecycle ; **executing** \| **completed** \| **failed** \| **cancelled** (post-start) ; Cancel post-start ; RecordExecutionResult / Failure ; Retry |

T-A4 ne produit pas les statuts T-A5 ; T-A5 ne réécrit pas les états de gouvernance antérieurs.

### Versioning before/after (T-A4 rework)

| | Avant | Après |
|--|-------|-------|
| `schemaVersion` | `0.1.0-oa` | `0.2.0-oa` |
| `requiredAuthority` | string libre | enum `N1` \| `N2` \| `N3` \| `MORRIS` |
| Supersession | status `superseded` seul | `supersedesExecutionContractId` + `supersessionReason` |
| Confirm | implicite / Validate mélangé | `ConfirmExecutionContract` consomme Confirmation |
| Reverse link | — | **dérivé runtime** (une direction seulement) |

Autres objets du pack restent `0.1.0-oa` jusqu’à rework dédié **sauf** ExecutionAttempt (ci-dessous).

### requiredAuthority (mapping T-A3)

| Valeur | Sens |
|--------|------|
| `N1` | Confirmation/Authority level N1 |
| `N2` | Confirmation/Authority level N2 |
| `N3` | Confirmation/Authority level N3 — **≠ Morris** ; ne confère pas `canActAsMorris` |
| `MORRIS` | N3 vérifié **et** `canActAsMorris=true` (normatif ; pas un niveau hiérarchique au-dessus de N3) |

Autorité réelle toujours via T-A3 `AuthorityResolverPort`.

### Confirmation

- Build / Validate : **ne consomment pas**
- `ConfirmExecutionContract` : **consomme** une Confirmation grantée, unique ; `confirmationRef` obligatoire si `confirmed`
- Confirmation refusée / annulée / expirée / déjà consommée → pas de `confirmed`

### Critical (R-T-A3-1 OPEN)

Cycle Critical encore `proposed` / non acknowledged → contrat **ne peut pas** atteindre `confirmed` (fail-closed). T-A4 n’ack pas le cycle. T-A5 refuse Start si Critical non-ack.

### Décision source

Contrats structurants : ≥1 `decisionRef` accepted, même Project, non superseded à build et confirm. Après confirm, si décision source superseded → pas de nouvelle exécution T-A5 tant que contrat non superseded/cancelled.

### Supersession

- Champ forward : `supersedesExecutionContractId` (préfixe `xct:`)
- `supersessionReason` requis si supersède **ou** `status=superseded` ; **≥1 non-whitespace**
- Self-supersession : **interdit** (invariant runtime)
- Lien inverse `supersededBy*` : **non stocké** ; dérivé au runtime
- Contenu confirmé immutable ; successeur = nouvel id + version monotone

### Invariants

MD Cursor = export G seulement · adaptateur ne mute pas · caps+authority+stops obligatoires · immutable après confirm sauf supersession explicite · completed ⇒ résultats+preuves min (preuve métier = **T-A6**) · retry ⇒ Attempt distinct.

---

## ExecutionAttempt — `0.2.0-oa` (T-A5 Morris D01–D10)

### Before / after (breaking)

| | Avant `0.1.0-oa` | Après `0.2.0-oa` |
|--|------------------|------------------|
| Agrégat | Séparé (déjà) | Séparé **confirmé** (D01 A) |
| Ids | `contractId`, `agentRef` | `executionContractId` (`xct:`), `selectedAgentRef` + `executionContractVersion` |
| Status | `running\|succeeded\|failed\|timeout\|cancelled\|partial` | `accepted\|running\|result_pending\|succeeded\|failed\|timeout\|cancelled` — **`partial` retiré** (T-A6) |
| Required | attemptId, contractId, agentRef, startedAt, status | + idempotencyKey, correlationId, version, createdAt, provenance ; `startedAt` optionnel (post-launch) |
| Retry | `retryOf` | `retryOfAttemptId` + `retryIndex` + `maxRetriesBudget` |
| Timestamps | `endedAt` | `completedAt` / `failedAt` / `timedOutAt` / `cancelledAt` / `resultPendingAt` / `launchedAt` |
| Sélection | — | `selectionStrategy`, `selectionProfile`, `proposedAgentRef`, `agentConfirmationRef`, `selectionExpiresAt` |

### Ownership

Attempt = **agrégat autonome** T-A5. Plusieurs Attempts par `executionContractId` autorisés. Pas d’AgentSelectionRecord autonome — sélection capturée dans Attempt + events.

### Lifecycle Attempt (D04 B + D06 C)

```
accepted → running → succeeded | failed | timeout | cancelled
                   ↘ result_pending → succeeded | failed
```

- **accepted** : persist pré-launch (D05) ; contrat reste **confirmed**
- **running** : après ack launch conforme ; contrat → **executing**
- **result_pending** : sortie technique connue, Record durable non persisté ; contrat **reste executing** (jamais completed spéculatif)
- **succeeded** → contrat **completed** (exige `resultRef`)
- **failed** / **timeout** → contrat **failed**
- **cancelled** → contrat **cancelled**

Interdits durables : `blocked`, `starting`, `planned`, `partial`.

### Sélection (D02 / D03)

| Profil | Stratégie |
|--------|-----------|
| **critical** | `human_confirmed_proposal` obligatoire (système propose + humain confirme) |
| **standard \| light \| capitalization** | `capabilities_deterministic` autorisé **seulement** sous policy pack fermée Option A |

Select et Start **séparés** ; TTL `selectionExpiresAt` ; revalidation à Start. `agentConfirmationRef` requis dès que `human_confirmed_proposal` et status **au-delà** de `accepted`.

### Persist-then-launch (D05 A)

Invariant **persist-then-launch** :

1. Persister Attempt `accepted` (identité + version stables)
2. Demander launch
3. Passer `running` seulement après ack conforme

**launch-then-persist** interdit.

### result_pending (D06 C)

Pas de `succeeded` / contrat `completed` sans Record durable. Retry Record borné → sinon `failed` technique `RESULT_RECORDING_FAILED` sans claim métier.

### Timeout / retry (D09 A)

Timeout Attempt → contrat `failed`. Retry = **nouvel** Attempt + `retryOfAttemptId` + budget + autorité explicite ; pas auto-retry ; idempotencyKey distincte.

### Obsolescence / cancel (D07 B+D)

Cancel best-effort + stop conditions contrat ; `cancellationRequested` / `irreversibleEffectsPossible` ; **pas** de rollback métier implicite T-A5. Emergency stop = Morris ; auto-safety borné sans claim Morris (D08).

### Frontière T-A5 / T-A6 (D10 A+C)

T-A5 : statut technique, exit code, durée, logRefs, resultRef/errorRef techniques, corrélation.
T-A5 **ne décide pas** : conformité métier, Evidence, Claim, maturité, readiness.
`partial` (preuves partielles) = **interprétation T-A6** uniquement — retiré de l’enum Attempt.

Handoff minimal conceptuel : `{ attemptId, executionContractId, executionContractVersion, selectedAgentRef, technicalStatus, resultRef?, errorRef?, correlationId, startedAt, completedAt?, stopReason? }`.

---

## AgentDescriptor — `0.1.0-oa` (docs-first)

Champs : `agentId`, `agentType`, `adapterRef`, `supportedCapabilities[]`, `allowedActions[]`, `allowedTargets[]`, `allowedScopes[]`, `trustLevel`, `executionMode`, `healthStatus` (`unknown|healthy|degraded|unhealthy`), `version`, `enabled`, `provenance`, `createdAt`, `updatedAt?`.

**Anti-claim :** **not a live registry** — descripteur modeled seulement ; pas de sonde health runtime, pas d’endpoint, pas de configuration opérationnelle.

## AgentCapability vs AgentAuthority

capability ≠ authority · manque = stop (`CAPABILITY_MISSING` / `AUTHORITY_DENIED` / codes T-A5 catalog) · agent ne redéfinit pas le contrat. Sélection agent = **T-A5**. Système **jamais** Morris.

```


## FILE (modified full): `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/09-command-event-error-and-transition-catalog.md`

```
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

```


## FILE (modified full): `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/10-validation-versioning-provenance-and-security-rules.md`

```
# 10 — Validation, versioning, provenance, sécurité

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
| **Document** | `10-validation-versioning-provenance-and-security-rules.md` |

## Versioning

- schemaVersion objets (baseline pack) : `0.1.0-oa`
- **Exception T-A4 rework** : `ExecutionContract.schemaVersion` = `0.2.0-oa` (breaking : enum `requiredAuthority` + champs supersession). Avant = `0.1.0-oa` free-string authority / pas de `supersedes*`.
- **Exception T-A5 materialization** : `ExecutionAttempt.schemaVersion` = `0.2.0-oa` (breaking vs `0.1.0-oa` : renames `contractId`/`agentRef`, status enum `accepted`+`result_pending`, retrait `partial`, required provenance/idempotency/correlation/version/createdAt, champs sélection/retry/timestamps). `AgentDescriptor` = `0.1.0-oa` (nouveau, docs-first).
- versions LPS / trajectory / contract / attempt entières monotones
- DoctrinePackage version + digest
- breaking change ⇒ nouvelle version schema
- pas de mutation silencieuse contrat confirmé
- schemas historiques D1 conservés (HISTORICAL-ONLY / ADAPT)
- Exemples / validateurs ExecutionContract **et** ExecutionAttempt doivent cibler `0.2.0-oa` ; autres agrégats restent `0.1.0-oa` (sauf AgentDescriptor nouveau `0.1.0-oa`)

## Provenance / audit

Objets structurants portent provenance ou refs. AuditEvent append-only conceptuel couvre décision, confirmation, LPS, contrat, exécution, erreur, preuve, claim, maturité, replan.

## Sécurité conceptuelle

PII · secrets · chemins protégés · PJ · décisions · preuves · journaux · rétention · redaction · minimisation.
Secrets interdits Evidence claire · séparation lecture/écriture · pas de choix IAM technique ici.

## Validation locale

ajv@6 Draft-07 depuis `projects/sfia-studio/app/node_modules` existant (autre worktree si besoin) — aucune install.

```


## FILE (modified full): `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/README.md`

```
# Modeled — Option A v3-native

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **VALIDATED BY MORRIS** |
| **Gate AT (consommé)** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (baseline)** | `0.1.0-oa` |
| **ExecutionContract** | `0.2.0-oa` (T-A4 modeled rework — breaking) |
| **ExecutionAttempt** | `0.2.0-oa` (T-A5 materialization — breaking vs `0.1.0-oa`) |
| **AgentDescriptor** | `0.1.0-oa` (docs-first ; not a live registry) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED (pack gate historique ≠ T-A5 Attempt validated) · Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME · Pas T-A5 RUNTIME |
| **Code / SQL / Figma** | **Interdits** |

## Objectif

Contrats modeled versionnables pour la chaîne Option A (intention → LPS → décision → N1–N3 → ExecutionContract → Evidence/ReviewBundle → maturité).

## Index

| # | Fichier |
|---|---------|
| 01 | Principes & frontières d’agrégats |
| 02 | Entités, VOs, identifiants |
| 03 | Living Project State |
| 04 | DoctrinePackage & CKC |
| 05 | Cycle, trajectoire, épistémologie |
| 06 | Décision, confirmation, autorité |
| 07 | ExecutionContract, Attempt, agents |
| 08 | Evidence, ReviewBundle, maturité, dette |
| 09 | Commandes, événements, erreurs, transitions |
| 10 | Validation, versioning, provenance, sécurité |
| 11 | Réemploi / migration actifs existants |
| 12 | Decision pack M-OA |
| schemas/ | JSON Schema Draft-07 (`0.1.0-oa` baseline ; ExecutionContract + ExecutionAttempt `0.2.0-oa` ; AgentDescriptor `0.1.0-oa`) |
| examples/ | Exemples valides / invalid/ (ExecutionContract + ExecutionAttempt + AgentDescriptor) |
| tests/ | Validation ajv ExecutionContract + ExecutionAttempt governance (modeled-only) |

## Verdict

**SFIA STUDIO V3-NATIVE OPTION A MODELED CONTRACTS VALIDATED BY MORRIS — TECHNICAL ARCHITECTURE IN PROGRESS**

Réserves maintenues : ClaimEvaluation schema · AgentCapability/Authority · invariants sémantiques · volumétrie LPS · stockage Evidence · pas READY FOR DELIVERY · schemas non adoptés runtime · aucune implémentation.

```


---

## Verdict exact

**SFIA STUDIO V3-NATIVE OPTION A T-A5 ARBITRATIONS MATERIALIZED — MODELED VALIDATION REQUIRED**

Gate suivant (non consommé): `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A`
