# SFIA STUDIO — P6 HUMAN QA
# FRESH ATELIERNOVA — REAL-FIRST RUNTIME QUALIFICATION
# Critical Review Pack (FULL)

## 0. Horodatage

| Champ | Valeur |
|---|---|
| ISO | `2026-10-18T17:55:59+0200` |
| Local | `2026-10-18 17:55 CEST` |
| Étape | REAL-FIRST runtime qualification |
| Cycle | 9 — QA / validation |
| Profil | CRITICAL |
| Capacité | V3-F05 (+ F07/F11/F12/F14) |
| Milestone | P6 |

## 1. GO Morris

| Décision | Statut |
|---|---|
| Activation Cursor REAL (configuration) | **CONSUMED** |
| ExecutionAttempt métier | **NOT AUTHORIZED** par ce GO |
| Product commit/push/PR/merge | **NONE** |
| D-ARCH-REC-04 docs sync | NOT AUTHORIZED |

## 2. Git Truth

| Item | Valeur |
|---|---|
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| origin/main / HEAD base | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| Option B local | **PRESERVED** (uncommitted) |
| Product source mutation this step | **NONE** |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts
?? projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts
?? projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts
```

Previous HQA env handoff: `c49f3e3a` / blob `2d043df6`.

## 3. Sources

Processus v2.6 ; Convergence ; C1/P6 ; Generic Execution architecture ;
PRR 04/05/06/07 ; `.env.example` ; `studioRuntimeProfilePreflight.ts` ;
`composeStudioProductRealBoundary.ts` ; `boundedNonMutatingRealLaunchGate.ts` ;
PRR 09 debt TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT.

## 4. Convergence Pre-check

Option B candidate ; first-cycle DET PROVEN ; HQA env on :3020 ;
Project AtelierNova créé par Morris (1 Project) ; REAL was OFF → now ON (config).
P6 GLOBAL PASS NON ACQUIS ; runtime v3 NON ADOPTED.

## 5. Isolation

| Item | Path / état |
|---|---|
| Campaign | `p6-optionb-fresh-hqa-20261018T153758Z` |
| Product DB | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/product/oa-product.sqlite` — **PRESERVED** (size inchangé au restart) |
| Nora DB | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/nora/nora-session.sqlite` — **PRESERVED** |
| Historical AtelierNova archive | non ouverte ; mtime historique inchangé |
| Inventory RO après REAL restart | projects=1 (title AtelierNova) ; cycles=0 ; traj=0 ; HD=0 ; EC=0 ; Attempts=0 |

## 6. Configuration REAL (non secrète)

| Clé | Avant | Après |
|---|---|---|
| SFIA_STUDIO_CURSOR_REAL | `0` | **`1`** |
| SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY | `0` | `0` (désactivé) |
| BETTER_AUTH_URL | `http://localhost:3020` | inchangé |
| OPS1_CONVERSATION_PROVIDER | unset (LIVE) | inchangé |
| RepositoryBinding | `mcleland147/sfia-workspace` | inchangé |
| Managed repo root | campaign `managed-repos` | inchangé |
| SFIA_CURSOR_BIN | Cursor.app bin | présent, exécutable (`cursor --version` 3.25.9) |

Secrets non affichés.

## 7. Preflight

```
STUDIO RUNTIME PROFILE READY
- repository: mcleland147/sfia-workspace (PASS)
- authority: PASS
- managedRoot: …/p6-optionb-fresh-hqa-…/managed-repos
- managedClone: …/mcleland147__sfia-workspace
- cursorReal: READY
- deterministic⊕REAL: PASS
- realBoundaryConstructed: false
```

**Qualification** : `cursorReal: READY` = flag env armé.
`realBoundaryConstructed: false` dans preflight = **volontaire** (preflight n'instancie pas safety DB / worktree / Gateway — side-effect free).

## 8. Gateway composition (hors preflight, sans ExecutionAttempt)

Contrôle `composeStudioProductRealBoundary` après activation :

| Check | Résultat |
|---|---|
| flag REAL | true |
| flag DET | false |
| boundary_constructed | **true** |
| launchPort | `StudioCursorRealLaunchGateway` |
| safetyJournal | présent |
| managedRepoRootBase | campaign managed-repos |
| ExecutionAttempt déclenché | **NONE** |

Safety journal local créé sous `projects/sfia-studio/.sfia-exec/m4/launch-safety.sqlite` (gitignored) — construction Gateway, pas d'exécution métier.

## 9. Autorités et gates applicables

| Gate | Statut |
|---|---|
| Pilot local authority | configuré |
| PREPARE ≠ AUTHORIZE ≠ EXECUTE | KEEP |
| HumanDecision | KEEP — non inventée |
| Confirmation / Gate D / StartExecution | KEEP — non contournés |
| Isolation Git/worktree M4 | composants composés |
| Safety journal | composé |
| R2 bounded non-mutating REAL | **FAIL-CLOSED** via `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` quand REAL=1 |

**REAL ON ≠ EXECUTE AUTHORIZED.**

## 10. Dette TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT

| Item | Qualification |
|---|---|
| État | **OPEN** (PRR 09) |
| Contenu | Cursor REAL generalist : pas de sandbox no-write technique (`--sandbox disabled`) |
| Impact scénarios | Missions pathless NON_STRUCTURAL stamped no-mutation → Select/Start REAL **refusés** ; Fake/DET reste admissible pour ces cas |
| Exit | GO Morris architecture distinct (RO agent enforceable / sandbox) + Bounded REAL proof |
| Ce cycle | **NON CORRIGÉ** (hors périmètre) |

## 11. Redémarrage

| Item | Valeur |
|---|---|
| URL | `http://localhost:3020` |
| Login | HTTP 200 |
| PID | `80617` |
| Product/Nora sizes | inchangés au restart |
| Attempts | toujours 0 |

## 12. Fake / Real

| Frontière | Mode |
|---|---|
| Nora | LIVE configured |
| GitHub Auth | REAL configured |
| Product OA / SQLite | REAL campaign |
| Cursor Gateway | REAL **composed** |
| Cursor ExecutionAttempt | **NOT EXECUTED** |

Claims interdits ici : REAL EXECUTION PROVEN ; NO-WRITE ENFORCEMENT PROVEN ; P6 GLOBAL PASS ; runtime v3 ADOPTED.

## 13. Réserves

1. Human login / parcours navigateur Morris non re-prouvés dans ce pack.
2. Aucun ExecutionAttempt — Gateway non exercé en lancement.
3. Dette no-write OPEN — scénarios pathless REAL bloqués volontairement.
4. Preflight READY ≠ Gateway exercised.

## 14. Verdict

**REAL-FIRST HQA PROFILE READY — CURSOR EXECUTION STILL GOVERNED.**

Statut : **READY WITH RESERVES**.

## 15. Instruction ChatGPT

Lire ce handoff. Vérifier CURSOR_REAL=1, DET=0, isolation DB campagne,
preflight READY + composition Gateway séparée, absence d'ExecutionAttempt,
dette no-write OPEN, Option B préservée, aucun secret.
Ne pas déclarer REAL EXECUTION PROVEN ni P6 GLOBAL PASS.
