# 08 — T-A5 Runtime Foundation Delivery (mémoire)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 20:33:40 CEST (+0200) — Europe/Paris |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Delivery / architecture technique / QA / sécurité / observabilité (Critical) |
| **Gate** | `GO DELIVER T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD initial** | `64a037d305ab0b84e8b5dfc177e303deca49610d` |
| **Merge-base** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Module** | `projects/sfia-studio/app/lib/oa/execution-attempt/**` |
| **Tests** | `projects/sfia-studio/app/__tests__/oa/execution-attempt/**` |
| **Statut** | **RUNTIME FOUNDATION DELIVERED (mémoire, fake-only)** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME FOUNDATION DELIVERED — QA VALIDATION REQUIRED` |
| **Gate suivant** | `GO VALIDATE T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources

- Handoff matérialisation RTA5 blob `fcd35ecb2fc2de02371774a68d77ae4114cab252`
- `07-runtime-arbitrations-materialization.md` — RTA5-01…10 **APPROVED BY MORRIS**
- Modeled ExecutionAttempt `0.2.0-oa`, AgentDescriptor `0.1.0-oa`, ExecutionContract `0.2.0-oa`
- Runtime T-A3 `decision/**`, T-A4 `execution-contract/**`
- CKC `pilots/03-architecture-technique.md` — **candidate** ; `executionAuthority=false` ; guidance cognitive expérimentale uniquement

## 2. Cycle Knowledge Contract

| Champ | Valeur |
|-------|--------|
| Cycle qualifié | delivery + architecture technique |
| Path CKC | `pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| executionAuthority | **false** |
| Autorité décision/exécution | **aucune** |
| Limites | pas d’autorité de merge, push projet, adapter réel, DB |
| Fallback | conventions T-A3/T-A4 repo + décisions RTA5 |

## 3. Matrice patterns T-A3/T-A4 → T-A5

| Pattern existant | Implémentation T-A5 |
|------------------|---------------------|
| Barrel `index.ts` (pas `public.ts`) | `execution-attempt/index.ts` |
| `Memory*Store` + `runInTransaction` | `MemoryExecutionAttemptStore` |
| Repository OCC + clone | `MemoryExecutionAttemptRepository` |
| `createInMemory*` / `createTest*` | factories fermées Test/NoOp only |
| `Memory*AuditJournal` | `MemoryExecutionAttemptAuditJournal` |
| `create*Error` + detailCode | `createAttemptError` |
| `AuthorityResolverPort` + ignore displayName | `attemptSupport.verifyAttemptAuthority` |
| Confirmation consume Option B | consume `agent_selection` après Start réussi ; skip si déjà consumed (replay) |
| Contract statuses T-A5 refusés par T-A4 use-cases | `ExecutionContractStatusWriter` écrit via repo T-A4 partagé |
| FixedClock / ClockPort | injectés ; timeout commande explicite |
| Anti-legacy / adversarial tests | registry/adapters + lifecycle + Morris spoof |

## 4. Architecture réelle

```
execution-attempt/
  domain/     types, errors, invariants (+ binding agent_selection)
  ports/      repository, registry, adapter, audit
  application/ Select, Start, Cancel, RecordResult/Failure, Retry,
               TriggerTimeout, Get, List, CheckAuth, ContractStatusWriter
  infrastructure/ memory store/repo, immutable registry,
                  TestExecutionAdapter, NoOpExecutionAdapter, audit journals
  index.ts    barrel + factories fermées
```

Aucun shell, réseau, MCP, Cursor, worker, queue, scheduler, SQL, UI, endpoint.

## 5. Décisions RTA5 implémentées

| ID | Implémentation |
|----|----------------|
| RTA5-01 | Confirmation scope exact `agent_selection` ; binding `act:agent_selection:<contractId>:v<version>:<agent>` ; TTL vs `selectionExpiresAt` ; consume au Start réussi |
| RTA5-02 | Repository Attempt séparé ; OCC ; compensation fail-closed documentée |
| RTA5-03 | `ExecutionAdapterPort` + Test + NoOp uniquement ; union fermée factories |
| RTA5-04 | Select → Attempt `accepted` avec stratégie/profil/TTL/refs |
| RTA5-05 | `activeByContractId` invariant + rebuild + drift fail-closed |
| RTA5-06 | `result_pending` ; Contract reste `executing` ; pas de completed spéculatif |
| RTA5-07 | `TriggerAttemptTimeout` + Clock ; pas de scheduler |
| RTA5-08 | Auto-safety = timeout only ; stale = détection + refuse ; pas d’auto-cancel |
| RTA5-09 | Persist accepted → fake launch → Attempt `running` **puis** Contract `executing` ; compensate si Contract update échoue |
| RTA5-10 | `createInMemoryExecutionAttemptServices` + `createTestExecutionAttemptServices` |

## 6. Domaine Attempt

États : `accepted` → `running` → (`result_pending` →) `succeeded` \| `failed` \| `timeout` \| `cancelled`.

Interdits : `planned`, `blocked`, `starting`, `partial`, `completed` (Attempt).

## 7. Repository / OCC / activeByContractId / rebuild

- `create` / `getById` / `list` / `update(expectedVersion)` / `findActiveByContractId`
- `reserveActiveContract` / `releaseActiveContract` / `rebuildActiveIndex` / `assertActiveIndexConsistent`
- Au plus un Attempt non-terminal par contrat
- Drift détecté fail-closed

## 8. Registry

`MemoryAgentRegistry` — immutable à la construction ; deny-by-default ; health/enabled simulés ; sélection déterministe (`agentId` lexicographique). Critical + `capabilities_deterministic` refusé.

## 9. Confirmation Critical

- Scope : `agent_selection` (string T-A3, pas de nouveau modeled)
- Binding actionRef : `act:agent_selection:{executionContractId}:v{executionContractVersion}:{selectedAgentRef}`
- Distinct de Confirm contrat (scope = `contract.scope`)
- Consommée uniquement après Start réussi ; replay Start ne re-consomme pas (déjà `consumed`)

## 10. Select / Start (RTA5-09)

**Select** : contrat confirmed → auth → registry → Attempt `accepted` persisté → réserve active → audit → **aucun** adapter.

**Start** : préconditions → TTL → Confirmation si Critical → fake `launch(attemptId)` → reject/fail fail-closed → ack → **Attempt running d’abord** → Contract `executing` → consume Confirmation → audit. Si update Contract échoue après running → compensation Attempt `failed` + audit.

**Invariant** : `Contract.executing` ⇒ Attempt `running` correspondant.

## 11. Adapters

Port : `launch` / `cancel` uniquement. Test (scripté, journal) + NoOp. Interdits : shell, réseau, MCP, Cursor, payload métier, élargissement scope, autorité auto-déclarée.

## 12. result_pending / RecordResult / RecordFailure

Persist terminal échoue → Attempt `result_pending` (commande `ok:false` / `RESULT_RECORDING_FAILED`) ; Contract reste `executing` ; retry Record borné ; succeeded → Contract `completed` ; failed → Contract `failed`. AdapterId doit matcher `agent.adapterRef`.

## 13. Timeout / auto-safety / cancellation / retry

- Timeout : `startedAt + policy.attemptTimeoutMs` ; Attempt `timeout` ; Contract `failed`
- Stale : détecter + refuser ; **pas** d’auto-cancel
- Cancel : autorité contrat / Morris emergency ; spoof displayName refusé ; N3 sans `canActAsMorris` refusé ; adapter best-effort si running/result_pending
- Retry : **toujours** nouvel Attempt (`priorAttemptId` → `newAttemptId`) ; budget ; nouvelle idempotencyKey ; contrat doit rester `confirmed` (ex. après launch reject)

## 14. Crash windows (documentés)

1. Après accepted, avant launch — replay Start
2. Après launch, avant ack — adapter memoize
3. Après ack, avant running — compensation / refuse double Start
4. Après running, avant Contract executing — compensation Attempt
5. Après executing, avant audit — audit best-effort ; état déjà cohérent
6. Non-durabilité mémoire — perte au restart (R-T-A3-2 OPEN)

## 15. Audit / factories / API publique

Journal mémoire append-only (refs bornées, pas de secrets/payloads).

Factories : injection explicite ; adapters Test\|NoOp seulement ; registry immutable.

Exports : types/errors/invariants, ports, use-cases, infra fake, factories. **Pas** de mutation registry, **pas** d’adapter générique.

## 16. Tests

| Suite | Count |
|-------|------:|
| `attemptRepository.test.ts` | 33 |
| `registryAndAdapters.test.ts` | 19 |
| `lifecycleFoundation.test.ts` | 24 |
| **Total T-A5** | **76** |

Régression : T-A3/T-A4 **111 PASS** ; modeled Attempt+Contract **46 PASS** ; `tsc --noEmit` PASS ; `next lint` PASS ; `git diff --check` PASS.

## 17. Réserves (toutes OPEN)

| Reserve | Mémoire fake-only | Exec réelle |
|---------|-------------------|-------------|
| B5 | Soft | Soft |
| R1 | Soft (compensation documentée) | Hard |
| R-T-A3-1 | Non-blocker si fail-closed Critical non-ack | **HARD** |
| R-T-A3-2 | Non-blocker mémoire | **HARD** |
| R-T-A3-3 | Soft | Soft |
| R-T-A3-4 | Soft | Soft |

## 18. Dette / blockers

**Blockers runtime mémoire** : aucun bloquant pour cette tranche fake-only.

**Blockers exécution réelle** : R-T-A3-1, R-T-A3-2 ; absence d’adapter réel (volontaire) ; pas de DB/scheduler ; pas d’endpoint.

**Dette** : Retry exige Contract `confirmed` (launch reject path) — mapping post-`failed` contract pour retry à arbitrer plus tard ; non-durabilité mémoire acceptée.

## 19. Anti-claims

- Pas d’exécution réelle autorisée
- Pas d’agent opérationnel réel / Attempt opérationnel réel
- Pas d’adapter shell/réseau/MCP/Cursor
- Pas T-A5 production/merge ready
- Pas réserves fermées
- Pas Option A complète
- Pas push/PR/merge branche projet

## 20. Gate suivant

`GO VALIDATE T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A`

Ce gate n’est **pas** consommé. Il autoriserait une validation QA indépendante du runtime mémoire, pas une exécution réelle.
