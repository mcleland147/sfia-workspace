# 04 — Modeled Validation T-A5 Agent Selection and Execution

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | `2026-07-25 15:33:50 CEST (+0200)` |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Modeled validation (Critical) — **CORRECTED AND VALIDATED** |
| **Gate** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD initial** | `de9cc5d37c7230f7762a39436949972f44ab5a3f` |
| **Runtime** | **NONE** |
| **Statut** | **MODELED CORRECTED AND VALIDATED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 MODELED CORRECTED AND VALIDATED — RUNTIME FRAMING MAY OPEN WITH MORRIS GO` |
| **Gate suivant (non consommé)** | `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` |

---

## 1. Sources

- Morris D01–D10 (`02-arbitration.md`, `03-materialization.md`)
- Attempt schema `0.2.0-oa` ; AgentDescriptor `0.1.0-oa` ; Contract `0.2.0-oa`
- Catalog `09` ; model `07` / `10`
- Gate validate prompt (§20–§29) + Borned corrections C1–C8
- Tests `execution-attempt-governance.test.mjs` + `execution-contract-governance.test.mjs`

---

## 2. Décisions Morris (exact — non réinterprétées)

| ID | Décision | Validation |
|----|----------|------------|
| D01 | Attempt agrégat séparé | **PASS** — schema autonome ; N Attempts / contrat |
| D02 | Critical propose+confirm ; capabilities non-Critical fermé | **PASS** — Critical⇒human_confirmed ; capabilities⇒standard\|light\|capitalization (critical FORBIDDEN) |
| D03 | Select ≠ Start ; TTL | **PASS** — accepted requires selection* ; narrative TTL |
| D04 | lifecycle + no blocked/starting | **PASS** — enum + invalid blocked/starting/planned |
| D05 | persist-then-launch | **PASS** — launchedAt/startedAt post-launch ; narrative forbidden |
| D06 | result_pending ; no speculative completed | **PASS** — conditionals + narrative |
| D07 | stop + cancel best-effort | **PASS** — cancelledAt ; irreversibleEffectsPossible |
| D08 | authority matrix | **PASS** — catalog Matrice d'autorité T-A5 |
| D09 | timeout→contract failed ; retry new Attempt | **PASS** — timedOutAt ; retryOf↔retryIndex |
| D10 | T-A5 technique ; T-A6 Evidence/Claim | **PASS** — claimId rejected ; boundary 07 |

Réserves B5, R1, R-T-A3-1…4 **OPEN**. R-T-A3-1/2 = blockers exécution réelle.

---

## 3. Inventaire / méthodologie

| Artefact | Avant validation | Après correction |
|----------|------------------|------------------|
| Attempt allOf | TTL/result/succeeded/Critical/cnf/retryOf only | + timeout/failed/cancelled timestamps ; launchedAt/startedAt ; accepted selection triad ; capabilities profile ban critical ; retryIndex⇒retryOf ; launch-fail exception |
| Catalog 09 | tokens T-A5 ; `agentRef?` payload | `selectedAgentRef?` ; authority matrix ; accepted→failed launch-fail ; result_pending cancel note |
| Exemples | 10 valid / 8 invalid | 11 valid (+launch-fail) / 23 invalid ; 9 narratives |
| Tests Attempt | 20 | 28 (+ adversarial C1 + narratives + authority matrix) |
| Contract tests | 18 | 18 (green) |

Méthodologie : AJV Draft-07 compile + fixtures + mutation adversarial + catalog phrase asserts + narrative existence (§25 runtime-only).

---

## 4. Résultats schémas

### Breaking change Attempt `0.2.0-oa`

Inchangé comme bump breaking (materialization). Ce cycle **durcit** les conditionnels sans nouveau bump de version (même `0.2.0-oa`).

### AgentDescriptor `0.1.0-oa`

Inchangé ; docs-first ; not a live registry.

### Attempt conditionnels (C1)

- `accepted` ⇒ `selectionStrategy` + `selectionProfile` + `selectionExpiresAt`
- `capabilities_deterministic` ⇒ profile ∈ {standard, light, capitalization} (**critical FORBIDDEN**)
- `timeout` ⇒ `timedOutAt`
- `cancelled` ⇒ `cancelledAt`
- `failed` ⇒ `failedAt` + (`errorRef` OR `stopReason`) ; launch-fail sans `launchedAt` si `stopReason` ∈ EXECUTION_LAUNCH_FAILED\|EXECUTION_PERSISTENCE_FAILED ; sinon `launchedAt`+`startedAt`
- post-launch `{running,result_pending,succeeded,timeout,cancelled}` ⇒ `launchedAt`+`startedAt`
- `result_pending` ⇒ `resultPendingAt` ; `succeeded` ⇒ `resultRef`+`completedAt`
- Critical ⇒ `human_confirmed_proposal` ; human_confirmed beyond accepted ⇒ `agentConfirmationRef`
- `retryOfAttemptId` ⇒ `retryIndex`+`maxRetriesBudget` ; `retryIndex` ⇒ `retryOfAttemptId`

Provenance nested `schemaVersion` `0.1.0-oa` OK. Root Attempt `0.2.0-oa`.

---

## 5. Sélection / TTL / lifecycle / mappings

- Critical : human_confirmed_proposal + agentConfirmationRef at Start+
- Non-Critical : capabilities_deterministic (standard|light|capitalization)
- TTL : selectionExpiresAt ; Start refuse if expired (narrative)
- Lifecycle : accepted → running → terminals ; running → result_pending → succeeded|failed ; accepted→failed (launch-fail) ; accepted→cancelled
- Mapping : accepted→confirmed ; running→executing ; result_pending→**stays executing** ; succeeded→completed ; failed/timeout→failed ; cancelled→cancelled

---

## 6. Persist / result_pending / autorité / timeout / retry / concurrence / obsolescence / cancel / T-A5↔T-A6

- persist-then-launch only ; launch-then-persist forbidden (catalog + narrative)
- result_pending : no speculative contract completed
- Authority matrix Select/Start/Cancel métier / Emergency Morris / auto-safety / Record / Retry
- N3 ≠ Morris ; spoof displayName refused (narrative)
- timeout Attempt → contract failed ; retry = new Attempt + budget
- Concurrency / double Start : runtime (narrative + catalog EXECUTION_ALREADY_ACTIVE)
- Mid-flight obsolescence / cancel best-effort : cancelledAt ; irreversibleEffectsPossible
- T-A5 technical only ; Evidence/Claim/maturity = T-A6 (`claimId` additionalProperties fail)

---

## 7. Commandes / événements / erreurs / transitions

Voir catalog 09 section T-A5. Corrections validation :

- payload `selectedAgentRef?` (legacy `agentRef?` retiré)
- Matrice d'autorité T-A5 ajoutée
- Transitions : `accepted`→`failed` (launch fail) ; `accepted`→`cancelled` ; `result_pending`→`cancelled` (policy) ; forbidden planned/blocked/starting ; anti launch-then-persist ; no speculative completed from result_pending

---

## 8. Exemples

**Valides (11) :** accepted, running, result_pending, succeeded, failed, timeout, cancelled, retry, critical-selection, noncritical-capabilities, **launch-fail**.

**Invalids (23) :** additionalProperties, bad-schema-version, partial, missing-required, succeeded-without-result, result-pending-without-ts, critical-capabilities, human-confirm-running-without-cnf, timeout-without-timedOutAt, failed-without-failedAt, cancelled-without-cancelledAt, running-without-launchedAt, accepted-without-selection, capabilities-on-critical-profile, capabilities-without-profile, legacy-contractId, legacy-agentRef, blocked/starting/planned-status, ta6-claimId, retry-index-without-retryOf, failed-without-error-or-stop.

**Narratives (9) :** selection-expired, ttl-expired, morris-displayname-spoof, n3-without-canActAsMorris, wrong-agent-confirmation, launch-then-persist.forbidden, adapter-foreign-attempt, result-pending-no-direct-completed, retry-budget-exhausted.

---

## 9. Tests

| Suite | Initial | Final |
|-------|---------|-------|
| execution-attempt-governance.test.mjs | 20 | **28** |
| execution-contract-governance.test.mjs | 18 | **18** |
| **Total** | **38** | **46** PASS / 0 fail |

`git diff --check` : PASS.

---

## 10. Analyse adversariale (§25)

| # | Cas | Couverture |
|---|-----|------------|
| 1 | spoof Morris | narrative + catalog |
| 2 | N3 sans canActAsMorris | narrative |
| 3 | Critical capabilities | invalid + adversarial mutate |
| 4 | Critical sans confirmation | human-confirm-running-without-cnf |
| 5–6 | wrong agent/version confirm | narrative |
| 7 | TTL expiré | narratives |
| 8 | double Start | catalog EXECUTION_ALREADY_ACTIVE (runtime) |
| 9 | launch-then-persist | narrative + launchedAt rules |
| 10 | result_pending→completed | narrative + succeeded requires resultRef |
| 11 | succeeded sans resultRef | invalid + adversarial |
| 12–13 | retry same / budget | retry rules + narrative |
| 14–15 | foreign adapter / dup result | narrative (runtime) |
| 16–17 | contract/decision superseded | catalog/runtime |
| 18–19 | emergency / auto-safety | authority matrix |
| 20 | Evidence/Claim inject | ta6-claimId + mutate |
| 21–22 | additionalProperties / old schemaVersion | fixtures |
| 23–25 | legacy fields / partial / blocked\|starting\|planned | fixtures + adversarial |

---

## 11. Défauts trouvés / corrections

| ID | Défaut | Correction |
|----|--------|------------|
| **C1** | Conditionnels timestamps / selection / launch-fail / retryIndex incomplets | allOf étendu sur Attempt schema |
| **C2** | Fixtures à aligner | launch-fail valid ; invalids enrichis ; launchedAt sur invalids ciblés |
| **C3** | `agentRef?` ; authority matrix absente ; transitions launch-fail | catalog 09 |
| **C4** | Invalids / narratives manquants | 15+ invalids + 8 narratives |
| **C5** | Couverture adversariale insuffisante | +8 tests ; INVALID list complète |
| **C6** | Doc validation absente | ce fichier + README/03 |

---

## 12. Réserves / blockers

| Reserve | Status | Modeled | Runtime | Exec réelle |
|---------|--------|---------|---------|-------------|
| B5 | OPEN | non-blocker | soft | soft |
| R1 | OPEN | soft | soft | hard |
| R-T-A3-1 | OPEN | non-blocker doc | soft | **HARD blocker** Critical réel |
| R-T-A3-2 | OPEN | soft | soft | **HARD blocker** |
| R-T-A3-3 | OPEN | — | soft | soft |
| R-T-A3-4 | OPEN | catalog | soft | soft |

**Blockers modeled :** none remaining for validation gate.
**Blockers runtime :** framing gate not consumed.
**Blockers exécution réelle :** R-T-A3-1/2 OPEN.

---

## 13. Fichiers (ce cycle validation)

**Créés :** `04-modeled-validation.md` ; `execution-attempt-launch-fail.valid.json` ; invalids C4 ; narratives §25.

**Modifiés :** Attempt schema ; catalog 09 ; tests Attempt ; invalids ciblés ; README ; `03-materialization.md` (factual conditionals).

**Interdits non touchés :** `app/**`, method, prompts, package/lockfiles, SQL, UI, runtime.

---

## 14. Anti-claims

- Pas T-A5 RUNTIME / DELIVERY READY / IMPLEMENTED
- Pas agent selected opérationnel / Attempt opérationnel / exécution lancée
- Pas DATABASE SELECTED / réserves CLOSED
- Pas push branche projet / PR / merge
- Pas `GO FRAME T-A5 RUNTIME` consommé
- Système ≠ Morris ; N3 ≠ Morris

---

## 15. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 MODELED CORRECTED AND VALIDATED — RUNTIME FRAMING MAY OPEN WITH MORRIS GO**

Gate suivant (non consommé) : `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A`
