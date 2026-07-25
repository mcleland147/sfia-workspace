# FULL Review Pack — T-A5 Runtime Foundation Delivery

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 20:34:37 CEST (+0200) |
| **Cycle** | Delivery / architecture technique / QA / sécurité / observabilité |
| **Profil** | Critical |
| **Gate** | `GO DELIVER T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Branche** | framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution |
| **HEAD initial** | `64a037d305ab0b84e8b5dfc177e303deca49610d` |
| **HEAD final** | `ddddb66cbeb59b99fafa0d05434ee3289830ec28` |
| **Merge-base** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Status** | tracked clean ; `?? .tmp-sfia-review/` only |
| **Staged** | none (post-commit) |
| **Untracked** | `.tmp-sfia-review/` |
| **Worktrees** | tech: sfia-workspace-v3-native-option-a-tech ; handoff: sfia-workspace/sfia-review-handoff |
| **Template** | prompts/templates/sfia-cycle-execution-template.md |
| **Handoff source** | sfia/review-handoff blob `fcd35ecb2fc2de02371774a68d77ae4114cab252` (pre-delivery) |
| **CKC** | pilots/03-architecture-technique.md — candidate ; executionAuthority=false |

## Sources consultées

07-runtime-arbitrations-materialization.md ; 06/05/04/03/02/01 ; ExecutionAttempt 0.2.0-oa ; AgentDescriptor 0.1.0-oa ; ExecutionContract 0.2.0-oa ; catalogues 07/09/10 ; T-A3 decision/** ; T-A4 execution-contract/** ; conventions tests OA.

## Patterns T-A3/T-A4

Barrel index.ts ; MemoryStore+txn ; OCC repository ; createInMemory/createTest factories ; MemoryAuditJournal ; AuthorityResolverPort ; Confirmation consume ; ContractStatusWriter via shared T-A4 repo (T-A4 use-cases refuse T-A5 statuses).

## Décisions RTA5

RTA5-01…10 APPROVED BY MORRIS — toutes implémentées (voir 08-runtime-foundation-delivery.md).

## Architecture réelle

`app/lib/oa/execution-attempt/{domain,ports,application,infrastructure,index.ts}`

## Fichiers créés

- projects/sfia-studio/app/lib/oa/execution-attempt/** (27 files)
- projects/sfia-studio/app/__tests__/oa/execution-attempt/** (4 files)
- projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/08-runtime-foundation-delivery.md

## Fichiers modifiés

- projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/README.md

## Fichiers supprimés

Aucun.

## Contenu documentaire 08

Voir fichier complet `08-runtime-foundation-delivery.md` (delivery pack). Statut README mis à jour : fondation mémoire ≠ autorisation d'exécution réelle ; gate suivant VALIDATE.

## Domaine / Repository / Registry / Confirmation / Select / Start

Voir 08 §§6–10. Binding Confirmation : `act:agent_selection:{contractId}:v{version}:{agent}`. Persist-then-launch prouvé. Attempt running avant Contract executing prouvé. Double Start refusé (EXECUTION_ALREADY_ACTIVE / replay Start).

## Adapter / result_pending / timeout / cancel / retry

TestExecutionAdapter + NoOpExecutionAdapter only. result_pending sans completed spéculatif. Timeout sans scheduler. Stale detect without auto-cancel. Morris emergency ; spoof N3 sans canActAsMorris refusé. Retry = nouvel Attempt ; budget.

## Factories / API publique

createInMemoryExecutionAttemptServices ; createTestExecutionAttemptServices ; InjectableExecutionAdapter = Test|NoOp only.

## Tests

| Suite | N |
|-------|--:|
| attemptRepository | 33 |
| registryAndAdapters | 19 |
| lifecycleFoundation | 24 |
| **T-A5 total** | **76 PASS** |
| T-A3/T-A4 régression | **111 PASS** |
| Modeled Attempt+Contract | **46 PASS** |

- type-check: PASS (`tsc --noEmit`)
- lint: PASS (`next lint`)
- build: non rejoué (Next build non requis ; réserve qualifiée — typecheck+lint+tests suffisent pour fondation mémoire)
- diff-check: PASS

## Réserves

B5, R1, R-T-A3-1, R-T-A3-2, R-T-A3-3, R-T-A3-4 — **OPEN**. Aucune fermée.

## Blockers

- Mémoire fake-only : aucun bloquant
- Exécution réelle : R-T-A3-1/2 HARD ; pas d'adapter réel ; pas DB/scheduler/endpoint

## Dette

Retry post-contract-`failed` non ouvert (exige confirmed — path launch reject). Non-durabilité mémoire acceptée.

## Diff stat (ce cycle delivery, 3 commits)

```
feat: 27 files, +5406 (execution-attempt module)
test: 4 files, +1803
docs: 2 files, +227/-80
```

Branche ahead 14 vs origin/main (11 docs + 3 delivery).

## Commits delivery

1. `6a5153a3ec55351460358ff168ed7f90de4b46aa` feat(sfia-studio): add T-A5 execution attempt foundation
2. `99b020e4b82fba173106b25f90ae2a45f8410c67` test(sfia-studio): validate T-A5 runtime foundation
3. `ddddb66cbeb59b99fafa0d05434ee3289830ec28` docs(sfia-studio): document T-A5 runtime foundation delivery

## Working tree final

tracked clean ; `?? .tmp-sfia-review/` only

## Anti-claims vérifiés

- push projet : **NON**
- PR : **NON**
- shell/réseau/MCP/Cursor : **NON**
- agent réel / Attempt opérationnel réel / exécution réelle : **NON**

## Verdict exact

SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME FOUNDATION DELIVERED — QA VALIDATION REQUIRED

## Gate suivant (non consommé)

GO VALIDATE T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A

## Contenu complet — 08-runtime-foundation-delivery.md

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

## Contenu complet — README T-A5 (post-delivery)

# T-A5 — Agent Selection and Execution (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gate framing → RTA5 materialize** | **CONSUMED** (voir historique ci-dessous) |
| **Gate runtime foundation** | `GO DELIVER T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **Runtime** | `app/lib/oa/execution-attempt/**` — **mémoire / Test+NoOp only** |
| **Modeled** | Attempt `0.2.0-oa` + AgentDescriptor `0.1.0-oa` — validés (non modifiés ce cycle) |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **RUNTIME FOUNDATION DELIVERED — QA VALIDATION REQUIRED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME FOUNDATION DELIVERED — QA VALIDATION REQUIRED` |
| **Gate suivant** | `GO VALIDATE T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Livrer la première fondation runtime mémoire T-A5 conforme aux décisions Morris RTA5-01…10 — sélection d’agent, Attempt, fake adapters — **sans** effet externe ni exécution réelle.

La fondation mémoire **ne constitue pas** une autorisation d’exécution réelle.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) … [07-runtime-arbitrations-materialization.md](./07-runtime-arbitrations-materialization.md) — packs antérieurs
3. [08-runtime-foundation-delivery.md](./08-runtime-foundation-delivery.md) — **delivery fondation runtime**
4. Code : `projects/sfia-studio/app/lib/oa/execution-attempt/**`
5. Tests : `projects/sfia-studio/app/__tests__/oa/execution-attempt/**` (76 tests)

## Gates consommés (historique)

- GO FRAME / ARBITRATE / MATERIALIZE T-A5 (modeled)
- GO VALIDATE T-A5 MODELED
- GO FRAME / ARBITRATE / MATERIALIZE T-A5 RUNTIME
- **GO DELIVER T-A5 RUNTIME FOUNDATION** (ce cycle)

## Réserves (héritées — OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (HARD exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |

## Anti-claims

- Pas exécution réelle / agent opérationnel réel / adapter réel
- Pas T-A5 production ready / merge ready
- Pas réserves fermées / Option A complète
- Pas push / PR / merge branche projet
- Pas shell / réseau / MCP / Cursor / SQL / UI / scheduler réel
