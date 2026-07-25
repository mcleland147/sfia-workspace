# SFIA Review Pack FULL — T-A5 Runtime Arbitrations Materialization

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Cycle / profil** | Materialization RTA5 — Critical |
| **Gate** | `GO MATERIALIZE T-A5 RUNTIME ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **HEAD initial** | `42c48325a13c25ea3577e87b60a5b69f9cf82e22` |
| **HEAD final** | `64a037d305ab0b84e8b5dfc177e303deca49610d` |
| **merge-base** | `6bfef839…` |
| **Truth Check** | **PASS** |
| **status** | clean tracked ; `?? .tmp-sfia-review/` |
| **Push / PR** | **NONE** |
| **Runtime / modeled** | **NONE** |
| **Verdict** | **SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATIONS MATERIALIZED — RUNTIME FOUNDATION DELIVERY MAY OPEN WITH MORRIS GO** |

## Handoff source

blob `7fce413b…` — RUNTIME ARBITRATION PACK COMPLETED

## CKC

`03-architecture-technique.md` — candidate — executionAuthority=false

## Décisions RTA5 (APPROVED BY MORRIS)

RTA5-01 A WITH CONDITIONS · 02 A · 03 A · 04 A · 05 A WITH CONDITIONS · 06 A · 07 A · 08 A WITH CONDITIONS · 09 A WITH CONDITIONS · 10 A

Voir contenu complet 07 ci-dessous.

## Réserves OPEN

B5, R1, R-T-A3-1..4. Delivery mémoire non-blocker ; exec réelle HARD R-T-A3-1/2.

## Fichiers

- Created: 07-runtime-arbitrations-materialization.md
- Modified: 06-runtime-arbitration.md (§0 APPROVED), README.md
- Commit: 64a037d305ab0b84e8b5dfc177e303deca49610d

## Gate suivant

`GO DELIVER T-A5 RUNTIME FOUNDATION` — NOT consumed

## Exact verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATIONS MATERIALIZED — RUNTIME FOUNDATION DELIVERY MAY OPEN WITH MORRIS GO**

---

## Contenu complet — 07-runtime-arbitrations-materialization.md

```markdown
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
```

## Sections 06 modifiées (APPROVED BY MORRIS §0 + verdicts)
```markdown
# 06 — Runtime Arbitration Pack T-A5

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Runtime arbitration (Critical) |
| **Gate arbitration** | `GO ARBITRATE T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A5 RUNTIME ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base** | `origin/main` @ `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD arbitration pack** | `42c48325a13c25ea3577e87b60a5b69f9cf82e22` |
| **Statut** | **RUNTIME ARBITRATIONS APPROVED BY MORRIS — MATERIALIZED** |
| **Runtime / modeled** | **NONE modifié** (ce pack) |
| **Décisions Morris RTA5** | **APPROVED BY MORRIS** — voir ci-dessous + [07-runtime-arbitrations-materialization.md](./07-runtime-arbitrations-materialization.md) |
| **Verdict arbitration (historique)** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATION PACK COMPLETED — MORRIS DECISIONS REQUIRED` |
| **Verdict materialization** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATIONS MATERIALIZED — RUNTIME FOUNDATION DELIVERY MAY OPEN WITH MORRIS GO` |

---

## 0. Morris decisions — APPROVED BY MORRIS

Matérialisation normative : [07-runtime-arbitrations-materialization.md](./07-runtime-arbitrations-materialization.md).

| ID | Décision Morris |
|----|-----------------|
| **RTA5-01** | **APPROVE A WITH CONDITIONS** — Confirmation T-A3 scope `agent_selection` ; binding contractId+version+selectedAgentRef ; TTL=`selectionExpiresAt` ; consume au Start réussi ; pas de reuse silencieuse expired/superseded ; distinct de Confirm contrat |
| **RTA5-02** | **APPROVE A** — AttemptRepository séparé ; OCC ; écritures séquentielles ; compensation fail-closed ; pas d’atomicité durable ; R1/R-T-A3-2 OPEN |
| **RTA5-03** | **APPROVE A** — ExecutionAdapterPort + TestExecutionAdapter + NoOpExecutionAdapter only ; interdits shell/réseau/MCP/Cursor/commande arbitraire/générique/effet externe |
| **RTA5-04** | **APPROVE A** — sélection dans Attempt `accepted` ; TTL ; abandon/expire → cancelled/failed ; pas d’AgentSelectionRecord |
| **RTA5-05** | **APPROVE A WITH CONDITIONS** — `activeByContractId` invariant repo + OCC ; rebuild boot ; tests dérive/concurrence/reconstruction |
| **RTA5-06** | **APPROVE A** — result_pending dans Attempt ; refs bornées ; pas payload sensible ; pas completed spéculatif ; retry budget ; non-durabilité mémoire |
| **RTA5-07** | **APPROVE A** — TriggerAttemptTimeout + Clock ; pas de scheduler ; idempotent ; autorité auto-safety/N≥/Morris |
| **RTA5-08** | **APPROVE A WITH CONDITIONS** — auto-safety = timeout only ; stale = détection ; Cancel = humain/Morris ; pas d’auto-cancel générique |
| **RTA5-09** | **APPROVE A WITH CONDITIONS** — séquence : preconditions → persist accepted → Contract confirmed → fake launch → (fail: Attempt+Contract failed/cancelled, never executing) / (ack: Attempt running then Contract executing) → compensate si Contract update fail ; invariant executing ⇒ Attempt running |
| **RTA5-10** | **APPROVE A** — createInMemoryExecutionAttemptServices + createTestExecutionAttemptServices ; config fermée ; Test/NoOp only ; pas d’extension silencieuse T-A4 |

**Conditions globales :** mémoire only ; aucun effet externe ; réserves OPEN ; R-T-A3-1/2 HARD exec réelle ; pas d’implémentation runtime par le gate materialize ; pas push/PR/merge.

L’analyse et le formulaire ci-dessous restent l’historique d’arbitrage ; le statut décisionnel SoT est §0 + document 07.

---

## 1. Sources

| Source | Usage |
|--------|-------|
| Handoff framing blob `4c25f369…` | RUNTIME FRAMING COMPLETED |
| `05-runtime-framing.md` | SoT recommandations initiales RTA5 |
| `01`–`04` T-A5 + D-T-A5-01…10 | cohérence décisions Morris |
| Attempt 0.2.0-oa / AgentDescriptor / Contract 0.2.0-oa | conformité |
| Runtime T-A3/T-A4 | patterns Confirmation, OCC, Option B |
| CKC | `pilots/03-architecture-technique.md` — candidate ; `executionAuthority=false` |

### CKC
```

## README — lignes statut
```
17:| **Runtime `app/lib/oa/**`** | **NONE** (interdit — docs only) |
20:| **Statut pack** | **RUNTIME ARBITRATIONS MATERIALIZED — DELIVERY GATE REQUIRED** |
21:| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME ARBITRATIONS MATERIALIZED — RUNTIME FOUNDATION DELIVERY MAY OPEN WITH MORRIS GO` |
22:| **Gate suivant** | `GO DELIVER T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed / NOT presumed**) |
35:- Runtime arbitration (`06-runtime-arbitration.md`) — **APPROVED BY MORRIS**
36:- Runtime arbitrations materialization (`07-runtime-arbitrations-materialization.md`) — **MATERIALIZED**
59:3. [02-arbitration.md](./02-arbitration.md) — pack d’arbitrage + **APPROVED BY MORRIS**
63:7. [06-runtime-arbitration.md](./06-runtime-arbitration.md) — arbitrage RTA5 — **APPROVED BY MORRIS**
64:8. [07-runtime-arbitrations-materialization.md](./07-runtime-arbitrations-materialization.md) — **matérialisation RTA5 + contrat delivery**
95:## Décisions Morris runtime (RTA5) — APPROVED BY MORRIS
97:Voir [06-runtime-arbitration.md](./06-runtime-arbitration.md) §0 et [07-runtime-arbitrations-materialization.md](./07-runtime-arbitrations-materialization.md).
106:- Pas `GO DELIVER T-A5 RUNTIME FOUNDATION` consommé
```
