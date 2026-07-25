# 05 — Runtime Framing T-A5 Agent Selection and Execution

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Runtime framing (Critical) |
| **Gate** | `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD modeled validation** | `f320208fdf4583035a6d0d49efeb302cec037989` |
| **Modeled** | Attempt `0.2.0-oa` + AgentDescriptor `0.1.0-oa` — **CORRECTED AND VALIDATED** |
| **Runtime code** | **NONE** (interdit ce cycle) |
| **Statut** | **RUNTIME FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY` |
| **Gate suivant candidat** | `GO ARBITRATE T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Question structurante

> Comment implémenter ultérieurement un runtime mémoire T-A5 capable de sélectionner un agent, de persister un Attempt, puis de demander un lancement borné, tout en restant fail-closed, idempotent, auditable et incapable de produire une exécution réelle tant que les blockers R-T-A3-1 et R-T-A3-2 ne sont pas levés ?

**Réponse candidate :** module `oa/execution-attempt` miroir T-A4 ; ports T-A3/T-A4 réutilisés ; registre d’agents **immutable injecté** ; `ExecutionAdapterPort` avec **seul** `TestExecutionAdapter` / `NoOpExecutionAdapter` dans la première tranche ; persist-then-launch ; OCC + compensation cross-store documentée ; fail-closed Critical ; **aucun** side-effect externe.

---

## 2. Sources

| Source | Usage |
|--------|-------|
| Handoff validation blob `71be2944…` | MODELED CORRECTED AND VALIDATED |
| Docs T-A5 01–04 | décisions D01–D10 |
| Modeled Attempt 0.2.0-oa / AgentDescriptor / catalog 09 | SoT lifecycle |
| Runtime T-A4 `app/lib/oa/execution-contract/**` | patterns hex, OCC, Option B |
| Runtime T-A3 `app/lib/oa/decision/**` | AuthorityResolver, Confirmation |
| CKC | `method/.../pilots/03-architecture-technique.md` — **candidate** ; `executionAuthority=false` |

### CKC

| Item | Valeur |
|------|--------|
| Cycle | Architecture technique |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | guidance cognitive expérimentale |
| Limites | ne valide pas l’architecture ; n’autorise pas runtime/exécution |

---

## 3. Frontières

| Tranche | Possède | Ne possède pas |
|---------|---------|----------------|
| **T-A4** | Build→Confirm ; CheckAuth ; cancel pré-exec ; supersession | Start ; agent ; Attempt |
| **T-A5 runtime** | Select/Start/Attempt lifecycle ; registry lecture ; fake adapter ack ; timeout/retry/cancel post-start ; audit technique | Decision create ; Morris identity ; Evidence/Claim ; DB ; side-effects réels |
| **T-A6** | Evidence / Review / Claim / maturité | |
| **T-A7** | Cutover MethodMode / OPS1 | |

---

## 4. Architecture globale candidate

```
[Actor] → SelectExecutionAgent / StartExecution / Cancel / Record / Retry
                │
                ▼
     ExecutionAttempt application services
                │
    ┌───────────┼───────────────┬────────────────┐
    ▼           ▼               ▼                ▼
 AttemptRepo  AgentRegistry  AdapterPort    T-A3/T-A4 ports
 (memory)     (immutable)    (Test/NoOp)    (Auth, Decision,
                                            CheckAuth, Contract,
                                            Cycle, Clock)
                │
                ▼
         AuditSink (memory journal)
```

**Pas** de bus d’événements domaine (convention OA = audit journal only).

---

## 5. Modules candidats (paths — ne pas créer)

Convention T-A3/T-A4 : **`index.ts` barrel** (pas de `public.ts`).

```
app/lib/oa/execution-attempt/
  index.ts
  domain/{types,errors,invariants}.ts
  application/
    selectExecutionAgent.ts
    startExecution.ts
    cancelExecutionAttempt.ts
    recordExecutionResult.ts
    recordExecutionFailure.ts
    retryExecutionAttempt.ts
    getExecutionAttempt.ts
    listExecutionAttempts.ts
    checkAttemptAuthorization.ts
    triggerAttemptTimeout.ts          # testable, no real scheduler
  ports/
    executionAttemptRepository.ts
    agentRegistryPort.ts
    executionAdapterPort.ts
    executionAttemptAudit.ts
  infrastructure/
    memoryExecutionAttemptStore.ts
    memoryExecutionAttemptRepository.ts
    memoryAgentRegistry.ts
    testExecutionAdapter.ts
    noOpExecutionAdapter.ts
    observability.ts
```

| Élément | Décision candidate |
|---------|-------------------|
| Modules nouveaux | `execution-attempt/**` uniquement |
| Réutilisés | `decision` (Authority, Confirmation), `execution-contract` (CheckAuth, Get, Cancel pré-exec), `cycle`, `doctrine` Clock |
| Interdits à modifier | T-A4 ownership invariants ; method/prompts ; modeled sans GO |
| API publique | `createInMemoryExecutionAttemptServices` / `createTestExecutionAttemptServices` |
| Dépendances | Attempt → Contract/Decision/Cycle (sens unique) |

---

## 6. Composants — responsabilités

| Composant | Rôle | Fusion possible ? |
|-----------|------|-------------------|
| `ExecutionAgentSelectionService` | Select + TTL + strategy | Oui ⊂ application `selectExecutionAgent` |
| `ExecutionAttemptService` | Start/Record/Cancel/Retry/Timeout | Split use-cases (pattern T-A4) **préféré** |
| `ExecutionAttemptRepository` | CRUD OCC + idempotency index | Requis séparé |
| `ExecutionAgentRegistry` | Deny-by-default lecture | Port + memory impl |
| `ExecutionAdapterPort` | launch/cancel/ack bornés | Interface seule + Test/NoOp |
| `ExecutionAuthorizationPort` | thin façade | **Réutiliser** AuthorityResolver + CheckAuth — pas de double port sauf façade |
| `ExecutionContractReader` | Get + currency | Réutiliser GetExecutionContract / repo |
| `DecisionFreshnessPort` | décisions accepted | Réutiliser DecisionServices |
| `ConfirmationReader` | grantée agent_selection | Réutiliser Decision confirmations |
| `Clock` / `IdGenerator` | injectés | Doctrine Clock + id helpers existants |
| `EventPublisher` | **Non** — AuditSink suffit | Éviter |
| `AuditSink` | journal append | Pattern T-A4 |
| `AttemptConcurrencyGuard` | double Start | Index mémoire `activeByContractId` dans repo |
| `ExecutionCancellationPort` | ⊂ AdapterPort.cancel | Fusion Adapter |

**Anti-surarchitecture :** pas d’EventPublisher séparé ; pas d’AuthorizationPort doublon ; SelectionService = use-case.

---

## 7. Runtime mémoire uniquement

| Autorisé | Interdit |
|----------|----------|
| Memory Attempt store + OCC | SQL / migrations |
| Registry immutable injecté (fixtures) | Registry live / secrets / endpoints |
| `TestExecutionAdapter` / `NoOpExecutionAdapter` | Shell, réseau, Cursor, MCP, queue, worker |
| Clock injectée ; timeout via commande testable | Scheduler réel |
| Audit journal mémoire | Side-effects externes |

**Démonstration d’invariants sans exécution réelle :** adapter fake retourne `LaunchAck` / `CancelAck` / `TechnicalResult` déterministes ; tests adversariaux prouvent fail-closed sans I/O.

---

## 8. Séquence SelectExecutionAgent

1. Lire contrat (`GetExecutionContract`)
2. `status=confirmed` ; version ; non superseded/cancelled ; pas T-A5 status
3. Decision freshness (accepted)
4. `requiredAuthority` via AuthorityResolver
5. Critical : cycle ack (fail-closed R-T-A3-1)
6. Stratégie :
   - Critical → `human_confirmed_proposal` (proposition + Confirmation `scope=agent_selection`)
   - non-Critical fermé → `capabilities_deterministic` (profil standard|light|capitalization)
7. Registry : candidats ∩ capabilities ∩ action/target/scope ∩ enabled ∩ health
8. TTL `selectionExpiresAt` = now + policy
9. Persister sélection **dans Attempt `accepted`** (recommandation RTA5-04) **ou** staging — voir arbitrages
10. Événement audit `ExecutionAgentProposed` / `ExecutionAgentSelected`
11. **Ne pas** appeler Adapter.launch

**Idempotence :** `idempotencyKey` Select + fingerprint (contractId, version, strategy, agent).
**Multi-candidats :** tie-break déterministe (agentId lexico) documenté ; sinon erreur `AGENT_AMBIGUOUS` (candidate).
**Aucun candidat :** `AGENT_NOT_FOUND` / capability mismatch.

---

## 9. Séquence StartExecution

1. Relire contrat + CheckExecutionAuthorization (**obligatoire**)
2. Relire Decision / Critical / authority
3. Si Critical : `agentConfirmationRef` granted, scope `agent_selection`, binding agent+contractVersion
4. Vérifier sélection + TTL non expiré
5. Relire AgentDescriptor (enabled/health/caps/scope)
6. Vérifier aucun Attempt actif incompatible (`running|result_pending|accepted` non expiré)
7. Construire Attempt `accepted` (si pas déjà) ; **persister** ; audit `ExecutionAttemptAccepted`
8. Appeler **uniquement** `ExecutionAdapterPort.launch` (fake) → `LaunchAck`
9. Si ack conforme → `running` + `launchedAt` + contrat `executing` (+ `selectedAgentRef` si policy)
10. Si reject/fail → `failed` (launch-fail sans speculative completed) ou `cancelled`
11. OCC `expectedVersion` sur Attempt et Contract

**Interdit :** launch avant persist ; trust client authority ; re-consume Confirmation contrat.

---

## 10. Persist-then-launch et atomicité

| Fenêtre | Comportement |
|---------|--------------|
| Persist accepted OK, launch non appelé | Reconcile Start idempotent ou cancel TTL |
| Launch ack perdu | Replay launch idempotent (adapter key=attemptId) |
| Ack OK, persist running KO | Retry persist running ; Attempt reste accepted ; **pas** effets réels (fake) |
| Double Start | `EXECUTION_ALREADY_ACTIVE` / CONCURRENCY_CONFLICT |

**Stratégie mémoire recommandée (RTA5-02/09) :**
- Unit of work **intra-store** Attempt (txn mémoire T-A4-like)
- Mise à jour Contract **après** Attempt transition réussie ; si Contract fail → compensate Attempt (cancel/failed) — **même famille Option B**
- **Pas** d’outbox durable ; journal intention mémoire optionnel pour tests

**R1 / R-T-A3-2 :** cross-store non atomique → HARD pour exécution réelle ; mémoire fake = fail-closed documenté acceptable pour foundation.

---

## 11. ExecutionAgentRegistry

| Propriété | Règle |
|-----------|-------|
| Mode | Deny-by-default ; lecture seule |
| Contenu | AgentDescriptor validés ; **aucun** secret/token/endpoint/shell |
| Injection | Liste fermée au bootstrap tests / config mémoire |
| Health | simulée (`healthy`/`unhealthy`) |
| Live | **interdit** |

Forme : `AgentRegistryPort` + `MemoryAgentRegistry` (immutable map).

---

## 12. ExecutionAdapterPort

```ts
// candidate — docs only
interface ExecutionAdapterPort {
  launch(req: LaunchRequest): Promise<LaunchAck | LaunchReject>;
  cancel(req: CancelRequest): Promise<CancelAck | CancelFail>;
  // prepare / getStatus / recordResult — OPTIONNELS ; challenge: recordResult côté application, pas adapter
}
```

| Méthode | Verdict candidate |
|---------|-------------------|
| `launch` | **Requis** |
| `cancel` | **Requis** (best-effort) |
| `prepare` | Reporté (dette) |
| `getStatus` | Reporté |
| `recordResult` | **Non** — Record* = use-cases applicatifs (anti-spoof) |

**Anti-spoof :** ack porte `adapterId` + `attemptId` ; Record vérifie identité ; adapter ne mute pas contrat ; ne choisit pas autorité ; ≠ Morris.

**Première tranche :** seulement `TestExecutionAdapter` / `NoOpExecutionAdapter`.

---

## 13. Lifecycle runtime

| Transition | Commande / trigger | Contract |
|------------|-------------------|----------|
| → accepted | Select / Start (persist) | confirmed |
| accepted → running | Start + LaunchAck | executing |
| accepted → failed | LaunchFail / PersistFail | failed |
| accepted → cancelled | Cancel | cancelled |
| running → result_pending | Record path persist fail | **stays executing** |
| running → succeeded/failed/timeout/cancelled | Record / Timeout / Cancel | completed / failed / failed / cancelled |
| result_pending → succeeded/failed | Retry Record | completed / failed |
| result_pending → cancelled | Cancel if authorized | cancelled |

**Interdit :** blocked/starting/planned ; launch-then-persist ; completed spéculatif ; retour terminal → running.

---

## 14. result_pending

1. Adapter (via application) fournit résultat technique borné
2. Validation anti-fuite T-A6
3. Persist terminal échoue → status `result_pending` + `resultPendingAt` + refs minimales en mémoire Attempt
4. Contrat **reste executing**
5. `RecordExecutionResult` retry borné ; budget épuisé → `failed` + `RESULT_RECORDING_FAILED`
6. Stockage temporaire : **champs Attempt mémoire** (pas DB) — RTA5-06

---

## 15. Matrice d’autorité runtime

| Action | Autorité |
|--------|----------|
| Select | N≥ `requiredAuthority` ; système only si non-Critical capabilities |
| Start | Même barre + relecture |
| Cancel métier | N≥ |
| Emergency stop | Morris (N3 ∧ canActAsMorris server-side) |
| Auto-safety | Système borné (timeout/health) ; ≠ Morris ; auditable |
| Record Result/Failure | Adapter authentifié **lié** attemptId |
| Retry | Autorisation explicite = Start |
| Get/List/CheckAuth | Lecteur autorisé / système |

Resolver T-A3 : `verify` exact scope ; ignore displayName ; N3 ≠ Morris.

---

## 16. Confirmation Critical (sélection)

| Item | Règle candidate |
|------|-----------------|
| Scope | `"agent_selection"` (string libre T-A3 — **pas** de nouvel objet modeled) |
| Binding | contractId + contractVersion + selectedAgentRef |
| Cycle de vie | request → grant → Start vérifie granted ; **ne re-consume pas** Confirm contrat |
| Consommation | Option A : consume à Start réussi ; Option B : leave granted+TTL — **RTA5-01** |
| Invalidation | TTL / supersede / mauvais agent / mauvaise version |

**Blocker modeled ?** Non si scope libre suffit. Si enum scope requis → stop arbitrage.

---

## 17. Idempotence et concurrence

| Opération | Key / garde |
|-----------|-------------|
| Select | idempotencyKey + fingerprint |
| Start | contractId + key ; index active Attempt |
| Launch ack | attemptId (adapter) |
| Record | attemptId + result hash |
| Timeout vs success | OCC version ; first writer wins ; loser STATE_CONFLICT |
| Cancel vs success | idem |
| Retry | **nouvel** Attempt ; refuse in-place |
| Deux actifs | refuse |

OCC : `expectedVersion` Attempt + Contract.

---

## 18. Timeout et retry

| | Règle |
|--|-------|
| Timeout | Deadline Attempt ; **commande** `triggerAttemptTimeout` (tests) — **pas** de scheduler réel (RTA5-07) |
| Mapping | Attempt `timeout` → contrat `failed` |
| Retry | Nouvel Attempt + `retryOfAttemptId` + budget + auth ; pas auto-retry réel |

---

## 19. Cancellation et obsolescence

| Catégorie | Comportement |
|-----------|--------------|
| Cancel métier | N≥ → Adapter.cancel best-effort → cancelled |
| Emergency Morris | Toujours → cancel + audit |
| Auto-safety | Timeout/health → failed/cancelled |
| Contract/Decision superseded | Cancel best-effort ; flag `irreversibleEffectsPossible` |
| Critical invalide | Fail-closed refuse Start ; mid-flight cancel |
| Stop conditions | Compose cancel |

**Pas** de rollback métier ; cancel **non** garanti effectif côté adapter réel (future).

---

## 20. Erreurs runtime (mapping)

Réutiliser codes modeled ; enveloppe `{ ok, error: { code, detailCode, blocking, retryable } }` pattern OA.

Inclure : CONTRACT_* · AGENT_* · SELECTION_EXPIRED · CONFIRMATION_* · AUTHORITY_DENIED · CRITICAL_NOT_ACKNOWLEDGED · ATTEMPT_* · EXECUTION_ALREADY_ACTIVE · PERSISTENCE/LAUNCH_* · TIMEOUT · CANCEL_FAILED · RESULT_RECORDING_FAILED · RETRY_* · CONCURRENCY_CONFLICT.

---

## 21. Observabilité

**Log/metric min :** correlationId, attemptId, contractId, contractVersion, agentRef, command, status, expectedVersion, duration, errorCode, stopReason, authorityEvidenceRef, confirmationRef, retryIndex.

**Interdit :** secrets, tokens, Confirmation/authority evidence complètes, payloads sensibles, maturité métier.

Audit : `ExecutionAttemptAuditPort.append` (événements nommés catalog).

---

## 22. Performance (hypothèses)

Dizaines d’Attempts mémoire ; contention un writer/contractId ; payloads refs ; pas de SLA.

---

## 23. Tests futurs (candidats)

| Suite | Contenu |
|-------|---------|
| Unit | services, repo OCC, registry, TestAdapter, clock, mappers |
| Intégration mémoire | Select Critical/non-Critical, Start, persist-then-launch, lifecycle, result_pending, timeout, retry, cancel, mapping Contract |
| Adversarial | spoof Morris, N3, Critical caps, mauvais agent/version, TTL, double Start, foreign adapter, dup result, launch-then-persist, speculative completed, Evidence inject, budget, cancel/timeout races, stale contract/Decision |

**Seuil candidat (non imposé) :** ≥ 40–60 tests runtime Attempt (ordre T-A4 61).

---

## 24. Réserves

| Reserve | Mémoire foundation | Garde-fou | Exec réelle |
|---------|-------------------|-----------|-------------|
| B5 | Soft | projectId snapshot ; LPS inactive fail-closed | Soft |
| R1 | Soft documenté | OCC + compensate | Hard |
| **R-T-A3-1** | **Non-blocker** si tests refuse Start Critical non-ack | CheckAuth + Cycle | **HARD** |
| **R-T-A3-2** | **Non-blocker** mémoire fake (pas d’effets) | Option B pattern | **HARD** |
| R-T-A3-3 | Soft | MemoryAuthorityResolver + tests | Soft |
| R-T-A3-4 | Soft | mapping AUTHORITY_DENIED | Soft |

**Aucune réserve fermée.**

---

## 25. Arbitrages techniques résiduels RTA5-01…10

| ID | Question | Options | Reco | GO Morris ? |
|----|----------|---------|------|-------------|
| **RTA5-01** | Confirmation sélection | A réutiliser Confirmation scope `agent_selection` · B nouvel objet | **A** | **Oui** (binding consume) |
| **RTA5-02** | Persistence | A repo Attempt séparé · B UoW multi-agrégat | **A** + compensate Contract | Oui léger |
| **RTA5-03** | Adapter | A interface + Test/NoOp · B NoOp only | **A** | Non si A |
| **RTA5-04** | Où vit la sélection | A dans Attempt accepted · B staging séparé | **A** | Oui léger |
| **RTA5-05** | Double Start lock | A index repo · B mutex process | **A** | Non |
| **RTA5-06** | result_pending payload | A champs Attempt · B side buffer | **A** | Non |
| **RTA5-07** | Timeout | A commande testable · B scheduler | **A** | Non |
| **RTA5-08** | Auto-safety v1 | A timeout only · B hors scope | **A** (timeout) | Oui léger |
| **RTA5-09** | Contract+Attempt write | A séquentiel + compensate · B single txn magique | **A** | Oui (R-T-A3-2) |
| **RTA5-10** | API publique | A services factory miroir T-A4 · B surface minimale Start only | **A** | Non |

**Contre-arguments clés :** A Confirmation risque confusion avec Confirm contrat — mitiger scope distinct ; A compensate laisse fenêtre R-T-A3-2 ouverte (acceptable mémoire).

---

## 26. Anti-claims

- Pas runtime T-A5 **authorized** / **implemented**
- Pas agent/Attempt/exécution opérationnels
- Pas DATABASE SELECTED / réserves closed / Option A complete
- Pas push / PR / merge / code `app/**` ce cycle

---

## 27. Gate suivant

`GO ARBITRATE T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

Après arbitrage RTA5 : candidat `GO DELIVER T-A5 RUNTIME FOUNDATION` — **pas acquis**.

---

## 28. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY**
