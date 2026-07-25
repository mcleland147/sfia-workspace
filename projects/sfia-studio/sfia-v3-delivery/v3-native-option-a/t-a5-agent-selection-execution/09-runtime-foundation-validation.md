# 09 — T-A5 Runtime Foundation Validation (QA indépendante)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 20:47:54 CEST (+0200) — Europe/Paris |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | QA / validation (+ archi tech / sécurité / intégration / perf mémoire / RUN readiness) |
| **Profil** | Critical |
| **Gate** | `GO VALIDATE T-A5 RUNTIME FOUNDATION — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD initial** | `ddddb66cbeb59b99fafa0d05434ee3289830ec28` |
| **Handoff source** | blob `d3cf2185149456c3fffb081133e345cbdaaef989` — DELIVERED — QA VALIDATION REQUIRED |
| **Statut** | **CORRECTED AND VALIDATED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 RUNTIME FOUNDATION CORRECTED AND VALIDATED — PR READINESS MAY OPEN WITH MORRIS GO` |
| **Gate suivant** | `GO PREPARE T-A5 PR READINESS — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Méthode

Pour chaque invariant RTA5 :

1. lire l’implémentation (pas le document 08 seul) ;
2. identifier le test existant ;
3. ajouter un test adversatif si preuve insuffisante ;
4. mutation ciblée du garde-fou ;
5. vérifier l’échec du test sous mutation ;
6. restaurer ;
7. qualifier PASS / PASS AFTER CORRECTION / FAIL / NOT PROVEN.

## 2. Périmètre

- `app/lib/oa/execution-attempt/**`
- `__tests__/oa/execution-attempt/**`
- docs QA `09` + README
- **Interdit** : modeled, package/lockfiles, adapters réels, push/PR/merge projet

## 3. Preuves RTA5-01…10

| ID | Qualification | Preuve |
|----|---------------|--------|
| RTA5-01 | **PASS** | Confirmation `agent_selection` binding/TTL/consume/replay ; distinction Confirm contrat |
| RTA5-02 | **PASS** | Repo séparé ; OCC ; compensation fail-closed |
| RTA5-03 | **PASS AFTER CORRECTION** | Factories Test/NoOp only ; **+** vérif `LaunchAck.adapterId` |
| RTA5-04 | **PASS** | Select ≠ Start ; accepted persisté ; pas de launch ; Critical ≠ deterministic |
| RTA5-05 | **PASS** | activeByContractId ; rebuild ; drift ; concurrence Promise.all |
| RTA5-06 | **PASS** | result_pending ; Contract executing ; pas de completed spéculatif |
| RTA5-07 | **PASS** | TriggerAttemptTimeout + Clock ; pas de scheduler |
| RTA5-08 | **PASS** | Timeout only ; stale detect sans auto-cancel |
| RTA5-09 | **PASS AFTER CORRECTION** | Ordre running→executing ; **+** writer lit Attempt repo (ne fait plus confiance au claim) |
| RTA5-10 | **PASS** | Factories fermées ; registry immutable ; ports T-A3/T-A4 |

## 4. Findings

### Critical

Aucun restant après correction.

### Major (corrigés)

1. **`ExecutionContractStatusWriter` faisait confiance au statut `running` fourni par l’appelant** sans lire le repository Attempt → `Contract.executing` possible sans Attempt réellement `running`.
   **Correction** : vérification `attempts.findById` + status `running` + même `executionContractId`.
   **Mutation** : retrait de la vérif → test QA échoue ; restauration → PASS.

2. **`StartExecution` ne vérifiait pas `LaunchAck.adapterId`** contre l’adapter injecté.
   **Correction** : fail-closed `adapter_identity_binding_mismatch`.
   **Mutation** : retrait du check → test QA échoue ; restauration → PASS.

### Minor / dette acceptable

1. **LaunchRequest** sans `action`/`target`/`scope` explicites — les adapters ne peuvent pas élargir (surface minimale). Dette documentaire, pas de contournement prouvé.
2. **Retry post-contract-`failed`** (après launch fail) refusé (`EXECUTION_CONTRACT_NOT_CONFIRMED`) — dette signalée en delivery ; **conforme au scope actuel** (retry ouvert après launch reject où Contract reste `confirmed`). **Pas un blocker QA**.

## 5. Mutations ciblées

| Mutation | Résultat |
|----------|----------|
| Writer : trust claim only | test « refuses executing… » **FAIL** |
| Start : remove adapterId check | test « spoofs foreign adapterId » **FAIL** |
| Restauration | tests **PASS** |

## 6. Corrections

| Fichier | Change |
|---------|--------|
| `executionContractStatusWriter.ts` | inject Attempt repo ; verify persisted running |
| `index.ts` factory | passe `attempts` au writer |
| `startExecution.ts` | refuse LaunchAck avec mauvais `adapterId` |
| `testExecutionAdapter.ts` | hook QA `spoofAdapterIdOnAck` |

## 7. Tests

| Phase | Count |
|-------|------:|
| T-A5 initiaux (delivery) | 76 |
| Ajoutés (QA adversariaux) | 12 |
| **T-A5 finaux** | **88 PASS** |
| T-A3+T-A4+T-A5 combined run | 199 PASS |
| Modeled Attempt+Contract | 46 PASS |

Suite ajoutée : `qaAdversarialValidation.test.ts`.

## 8. Commandes

| Commande | Résultat |
|----------|----------|
| `tsc --noEmit` | **PASS** |
| `next lint` | **PASS** |
| `next build` | **PASS** (Next.js 15.5.20, compiled OK) |
| `git diff --check` | **PASS** |
| APIs runtime interdites | absentes (seuls commentaires anti-claims) |

## 9. Sécurité / concurrence / compensation

- Spoof Morris / N1 + displayName : refusé
- Factories : foreign adapter object refusé (`isInjectableExecutionAdapter`)
- Concurrent Start : cohérence Attempt/Contract (jamais executing sans running)
- Concurrent Result/Timeout : terminal cohérent, pas de completed spéculatif
- Compensation Contract fail : 1 seul launch, Attempt failed

## 10. Dette retry

**Qualifiée : dette acceptable / hors blocker QA.**
Retry exige Contract `confirmed` ; path launch-reject OK ; path launch-fail (Contract `failed`) volontairement fermé jusqu’à arbitrage Morris ultérieur.

## 11. Réserves (OPEN)

B5, R1, R-T-A3-1, R-T-A3-2, R-T-A3-3, R-T-A3-4 — **aucune fermée**.

## 12. Blockers

- **Mémoire fake-only** : aucun
- **Exécution réelle** : R-T-A3-1/2 HARD ; pas d’adapter réel ; pas DB/scheduler

## 13. Anti-claims

Pas d’exécution réelle, pas d’adapter réel, pas production/merge ready, pas réserves fermées, pas Option A complète, pas push/PR/merge projet.

## 14. Gate suivant

`GO PREPARE T-A5 PR READINESS — SFIA STUDIO V3-NATIVE — OPTION A` — **NOT consumed**.
