# 07 — Materialization of T-A5 Runtime Arbitrations (RTA5)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Materialization runtime arbitrations (Critical) |
| **Gate** | `GO MATERIALIZE T-A5 RUNTIME ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD arbitration pack** | `42c48325a13c25ea3577e87b60a5b69f9cf82e22` |
| **Runtime code** | **NONE** (interdit) |
| **Modeled** | **NONE modifié** |
| **Statut** | **RUNTIME ARBITRATIONS MATERIALIZED — DELIVERY GATE REQUIRED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATIONS MATERIALIZED — RUNTIME FOUNDATION DELIVERY MAY OPEN WITH MORRIS GO` |
| **Gate suivant** | `GO DELIVER T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources

| Source | Usage |
|--------|-------|
| Handoff blob `7fce413b…` | RUNTIME ARBITRATION PACK COMPLETED |
| `06-runtime-arbitration.md` | recommandations → **APPROVED BY MORRIS** |
| `05-runtime-framing.md` | architecture candidate |
| Modeled Attempt 0.2.0-oa / AgentDescriptor / Contract | lecture |
| Runtime T-A3/T-A4 | conventions factories / Confirmation / OCC |
| CKC | `pilots/03-architecture-technique.md` — candidate ; `executionAuthority=false` |

---

## 2. Décisions Morris RTA5-01…10 (normatives)

### Différences reco → décision

| ID | Reco cadrage/arbitrage | Décision Morris | Delta |
|----|------------------------|-----------------|-------|
| 01 | A | **APPROVE A WITH CONDITIONS** | Conditions binding/TTL/consume explicitées |
| 02 | A | **APPROVE A** | Conditions OCC/compensation |
| 03 | A | **APPROVE A** | Interdits adapter listés |
| 04 | A | **APPROVE A** | Abandon/expire → cancelled/failed |
| 05 | A WITH CONDITION | **APPROVE A WITH CONDITIONS** | Rebuild + tests dérive |
| 06 | A | **APPROVE A** | Non-durabilité + budget |
| 07 | A | **APPROVE A** | Autorité timeout |
| 08 | A WITH CONDITIONS | **APPROVE A WITH CONDITIONS** | Stale = détection only |
| 09 | A corrected sequence | **APPROVE A WITH CONDITIONS** | Séquence 7 étapes + invariant |
| 10 | A | **APPROVE A** | Factories fermées |

### RTA5-01 — APPROVE A WITH CONDITIONS

Réutiliser Confirmation T-A3 scope fermé `agent_selection`.

Conditions :
- binding obligatoire `executionContractId` + `executionContractVersion` + `selectedAgentRef` ;
- TTL aligné sur `selectionExpiresAt` ;
- consommation au **Start réussi** ;
- aucune réutilisation silencieuse d’une Confirmation expirée ou superseded ;
- Confirmation sélection **distincte** de Confirm contrat.

Contrat de vérification futur : Confirmation présente ; scope exact ; binding exact ; non expirée ; non consommée avant Start ; non superseded ; acteur autorisé ; consommation idempotente.

**Aucun nouveau type modeled.**

### RTA5-02 — APPROVE A

`ExecutionAttemptRepository` séparé ; OCC ; écritures séquentielles ; compensation fail-closed documentée ; **aucune** prétention d’atomicité durable ; R1 et R-T-A3-2 **OPEN**.

Responsabilités candidates (docs) : get ; list ; create accepted ; update(expectedVersion) ; findActiveByContract ; reserveActiveInvariant ; releaseOnTerminal ; rebuildIndex.

### RTA5-03 — APPROVE A

`ExecutionAdapterPort` futur avec **uniquement** `TestExecutionAdapter` et `NoOpExecutionAdapter`.

Surface max : `launch(request)` ; `cancel(request)`.
Non retenus v1 : prepare ; getStatus ; recordResult sur le port.

Interdits : shell ; réseau ; MCP ; Cursor ; commande arbitraire ; adapter générique configurable ; effet externe ; secret/endpoint/token ; HTTP ; processus enfant.

Identité adapter + binding `attemptId` obligatoires.

### RTA5-04 — APPROVE A

Select → Attempt `accepted` contenant au minimum : executionContractId, executionContractVersion, selectedAgentRef, selectionStrategy, selectionProfile, selectionExpiresAt, agentConfirmationRef (Critical), idempotencyKey, correlationId, provenance, version.

TTL obligatoire ; abandon/expiration → `cancelled` ou `failed` selon cause ; **pas** d’AgentSelectionRecord ; pas de mutation silencieuse d’agent ; re-sélection = nouvel Attempt.

### RTA5-05 — APPROVE A WITH CONDITIONS

`activeByContractId` = **invariant repository** (+ OCC primaire).

Conditions : rebuild au boot depuis Attempts non terminaux ; tests dérive/concurrence/reconstruction ; libération sur terminal ; concurrence Start/Cancel/Timeout/Result.
Mutex process **≠** source de vérité.

### RTA5-06 — APPROVE A

`result_pending` dans Attempt ; refs techniques bornées ; pas de payload sensible ; pas de completed spéculatif ; retry budget borné ; Contract **reste executing** ; non-durabilité mémoire documentée ; perte possible au restart ; R-T-A3-2 HARD pour exec réelle.

### RTA5-07 — APPROVE A

Future commande `TriggerAttemptTimeout` : Clock injectée ; idempotente ; auditée ; autorité auto-safety / N≥ / Morris ; Attempt non terminal → timeout ; Contract → failed ; **aucun scheduler réel**.

### RTA5-08 — APPROVE A WITH CONDITIONS

Auto-safety v1 = **timeout déterministe uniquement**.

Stale Contract/Decision/stop condition : **détection seule** ; Cancel = humain ou Morris ; pas d’auto-cancel générique ; pas d’arbitrage automatisé.

### RTA5-09 — APPROVE A WITH CONDITIONS

Séquence canonique normative :

1. Vérifier toutes les préconditions Start ;
2. Persister Attempt `accepted` (ou replay idempotent) ;
3. Contract reste `confirmed` ;
4. Fake adapter `launch(attemptId)` idempotent ;
5. Launch reject/failure → Attempt `failed|cancelled` ; Contract `failed|cancelled` selon cause ; **jamais** executing/completed ;
6. LaunchAck conforme → Attempt `running` **d’abord** ; puis Contract `executing` ;
7. Si update Contract échoue après running → compensation fail-closed Attempt + audit ; pas de rollback métier ; pas d’effet externe.

**Invariant :** `ExecutionContract.executing` ⇒ Attempt `running` correspondant déjà existant.

Crash windows : après accepted ; après launch avant ack ; après ack avant running ; après running avant Contract executing ; après Contract executing avant audit. Replay idempotent obligatoire.

### RTA5-10 — APPROVE A

Factories futures : `createInMemoryExecutionAttemptServices` ; `createTestExecutionAttemptServices`.

Câblage explicite Clock/IdGenerator/repos/registry/Test|NoOp/audit ; réutilisation T-A3/T-A4 ; config fermée ; pas de valeur permissive ; pas d’adapter arbitraire depuis payload ; pas d’extension silencieuse factory T-A4 ; pas de dépendance circulaire.

---

## 3. Conditions globales (validées Morris)

- runtime mémoire uniquement ; aucun effet externe ;
- aucun shell/réseau/worker/queue/scheduler réel/SQL/UI ;
- B5, R1, R-T-A3-1…4 **OPEN** ;
- R-T-A3-1/2 **HARD** pour exécution réelle ;
- aucune DB/infra sélectionnée ;
- **aucune** implémentation runtime par ce gate ;
- aucun push/PR/merge/exécution réelle.

---

## 4. Contrat de future delivery (sans code)

### Autorisé (sous `GO DELIVER T-A5 RUNTIME FOUNDATION`)

- `app/lib/oa/execution-attempt/**` ;
- repository mémoire ; registry immutable ; adapter port ; Test + NoOp ;
- Clock/ids injectés ; audit journal ; services ; factories fermées ;
- tests unitaires, intégration mémoire, adversariaux.

### Interdit

- shell/network/MCP/Cursor adapters ; worker ; queue ; scheduler ; DB ; SQL ; migration ; UI ; endpoint exécution réelle ; registre live ; exécution réelle.

---

## 5. Fichiers candidats vs interdits (delivery future)

| Candidats | Interdits |
|-----------|-----------|
| `app/lib/oa/execution-attempt/**` | tout autre adapter réel |
| `__tests__/oa/execution-attempt/**` | `method/**`, `prompts/**`, package/lockfiles |
| | modeled schemas (sauf GO modeled) |
| | SQL/UI/OPS1/sfia-context |

---

## 6. Stratégie de tests futurs (seuil candidat non imposé)

| Domaine | Cas |
|---------|-----|
| Confirmation | scope/contract/version/agent wrong ; expired ; superseded ; consumed ; silent reuse ; vs Confirm contrat |
| Repository | OCC ; active index ; rebuild ; dérive ; double Start ; concurrent ; release terminal ; replay |
| Adapter | Test/NoOp only ; foreign refuse ; no shell/network config ; attemptId binding |
| RTA5-09 | confirmed while accepted ; running before executing ; launch fail ; Contract fail + compensate ; crash windows |
| result_pending | bounded refs ; budget ; no payload ; no completed ; non-durability |
| timeout/auto-safety | command ; idempotence ; stale detect only ; no auto-cancel ; Morris emergency |

Seuil candidat (non décision) : ≥ 40–60 tests runtime Attempt.

---

## 7. Réserves

| Reserve | Delivery mémoire | Exec réelle |
|---------|------------------|-------------|
| B5 | Soft — LPS fail-closed | Soft |
| R1 | Soft — compensate documentée | Hard |
| R-T-A3-1 | Non-blocker si refuse Start Critical non-ack | **HARD** |
| R-T-A3-2 | Non-blocker fake/mémoire | **HARD** |
| R-T-A3-3 | Soft | Soft |
| R-T-A3-4 | Soft | Soft |

**Aucune réserve fermée.**

---

## 8. Dette

- Compensation cross-store (Option B-like)
- Index `activeByContractId` à reconstruire
- `result_pending` non durable au restart process
- Timeout sans scheduler (commande manuelle/tests)
- Auto-safety limitée (stale mid-flight = opérateur/Morris)

---

## 9. Anti-claims

- Pas runtime **authorized** / **implemented** / delivery **started**
- Pas agent/Attempt/exécution opérationnels
- Pas DATABASE SELECTED / réserves closed / Option A complete
- Pas push / PR / merge / code `app/**` ce cycle

---

## 10. Gate suivant

`GO DELIVER T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

Autoriserait uniquement fondation mémoire Test/NoOp sans effet externe.

---

## 11. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATIONS MATERIALIZED — RUNTIME FOUNDATION DELIVERY MAY OPEN WITH MORRIS GO**
