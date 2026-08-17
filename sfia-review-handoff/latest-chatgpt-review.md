# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-17 17:15:43 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 8 — Delivery / implémentation — AMEND / STABILIZATION |
| **Profil** | Critical |
| **Typologie** | INC / correctif QA stability borné Pre-M6 |
| **Milestone** | PRE-M6 |
| **Etat Pre-M6** | NON COMPLETE |
| **Runtime v3** | NON ADOPTED |
| **Architecture** | ARCH-WOP-1 KEEP — IMPLEMENTED CANDIDATE — NOT REOPENED |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche candidat** | `delivery/sfia-studio-pre-m6-ui-option-a` |
| **Campagne** | `.tmp-sfia-review/cycle-8-vitest-stability-amend/` |

## GO Morris exact

```
GO MORRIS —

RETURN TO DELIVERY
STABILIZE FULL VITEST
runningAttemptRefresh.ui.test.tsx
UNDER FULL SUITE LOAD

ZERO REAL
NO READY-FOR-REAL CLAIM
```

Le Cycle 9 précédent reste INCOMPLETE — DETERMINISTIC QA VALIDATION FAILED. Ce GO ne le transforme pas en PASS.

## Verdict

PASS —
CYCLE 8 DELIVERY AMEND
FULL VITEST STABILITY RESTORED
runningAttemptRefresh.ui.test.tsx STABILIZED UNDER FULL SUITE LOAD
ROOT CAUSE ESTABLISHED
PRODUCT BEHAVIOR UNCHANGED
ARCH-WOP-1 NOT REOPENED
FULL VITEST 3 CONSECUTIVE RUNS PASS
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR MORRIS DELIVERY ACCEPTANCE
READY FOR CYCLE 9 DETERMINISTIC QA RERUN
NOT READY FOR REAL

## Local Git Truth PRE

| Ref | SHA |
|-----|-----|
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| origin/sfia/review-handoff | `97790cdcfa9005cdf4c08a3764afe5e644734bce` |
| Cycle 9 handoff blob | `e3d22e8c13c208ef6b6be754a6b536a45bd42ce9` |

Branche : `delivery/sfia-studio-pre-m6-ui-option-a`

PRE staged : vide. PRE dirty : 110. PRE candidate : 994 files / `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5`.

Conforme POST Cycle 9. Pas de STOP CANDIDATE IDENTITY DIVERGED. origin/main inchangé. Pas de STOP DELIVERY INPUT STATE DIVERGED.

## Local Git Truth POST

HEAD / origin/main inchangés. staged vide. dirty 110 lignes identiques (le fichier modifié était déjà `??`). candidate manifest 994 / `328bc0bb…` inchangé (même liste de fichiers).

## Parent Cycle 9 INCOMPLETE handoff

Lu : `origin/sfia/review-handoff` @ `97790cdc…` blob `e3d22e8c…`

Verdict parent : INCOMPLETE — DETERMINISTIC QA VALIDATION FAILED. Cause : full Vitest instable sur `runningAttemptRefresh.ui.test.tsx`. Ce cycle ne clôture pas Cycle 9.

## Convergence Pre-check

KEEP ARCH-WOP-1 / windows / snapshot / O3 / one-launch / deterministic substitution. ADAPT test-only primary file. COMPLETE : stabilité full Vitest. FREEZE feature, ARCH-WOP-1 reopen, sleep, skip, vitest config. Next : Cycle 9 deterministic QA rerun.

## Blocker R-FULL-VITEST-FLAKE

Cycle 9 : run1 2 failed / 1852 passed ; run2 1 failed / 1853 passed. Isolation 7/7. Même candidat Cycle 8 full 1854/0.

## Reproduction baseline CE cycle (avant mutation)

| Run | Résultat |
|-----|----------|
| isolation primary | 7/7 PASS (2s) |
| O3 hook + primary | 11/11 PASS |
| full `npx vitest run` | **2 failed / 1852 passed / 131 skipped** — mêmes 2 tests |

## Hypothèses

H1/H7 retenues. H3 écartée (pairing O3 11/11). H8 écartée : busy/disabled est le contrat produit.

## ROOT_CAUSE_CLASSIFICATION

**RC-TEST-ASYNC** (H1 + H7)

`findByTestId` = présence DOM. GO `disabled={busy}`. Confirm `disabled={!canConfirmResolvedM3}` et `canConfirm` exige `!busy`. `sendMessage`/`decide`/prepare/confirm utilisent `startTransition` : premier paint peut exposer le bouton encore disabled. Isolation : présence et enabled coïncident. Full-suite load : assertion trop précoce.

## ROOT_CAUSE_EVIDENCE

- Cycle 9 + baseline CE cycle : `f2-decide-GO` found disabled après `findByTestId`.
- Test 2 : spy confirm = 0 — click sur bouton encore disabled.
- Produit : `ConversationSurface.tsx` GO `disabled={busy}` ; `useProductConversation.ts` `startTransition` + `uiState=ASSISTANT_WORKING`.
- O3 fake timers ne contaminent pas (11/11).
- Isolation 7/7 vs full 2 failed.

## Product defect check

PAS de RC-PRODUCT-RACE. GO/confirm **doivent** rester disabled pendant busy. Aucun fichier `features/**` ou `lib/**` modifié. Hashes produit PRE=POST.

## Files

FILES_MODIFIED_BY_THIS_CYCLE :

`projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx`

- preexisting untracked `??` (Cycle 8)
- PRE sha256 `65c272c0f61751c070bd244728d0cf5f23c3513a44d29f4bfe10eb5128ad84d8` (hashed this cycle before mutation ; reconstructed PRE matches)
- POST sha256 `ed27f2c556c278d2e77e898d22758fbeb598a9f6454db43905db93888e4f85b9`

PREEXISTING_DIRTY_UNTOUCHED : les 109 autres lignes dirty + les 3 fichiers produit/O3 test hashed PRE=POST.

Aucun secondary test file. Aucun produit. Aucune config Vitest.

## Exact diff

```diff
--- PRE/runningAttemptRefresh.ui.test.tsx	2026-08-17 17:14:38
+++ projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx	2026-08-17 17:08:22
@@ -330,6 +330,15 @@
   return <ConversationSurface controller={controller} />;
 }

+/** findByTestId is presence-only; GO/confirm stay disabled while startTransition keeps busy. */
+async function findEnabledByTestId(testId: string) {
+  const el = await screen.findByTestId(testId);
+  await waitFor(() => {
+    expect(el).toBeEnabled();
+  });
+  return el;
+}
+
 const PROJECT_CTX = {
   projectId: PROJECT_ID,
   name: "Refresh UI",
@@ -651,15 +660,13 @@
       target: { value: "Inspecter le workspace" },
     });
     fireEvent.click(screen.getByTestId("project-assistant-send"));
-    expect(await screen.findByTestId("f2-decide-GO")).toBeEnabled();
-    fireEvent.click(screen.getByTestId("f2-decide-GO"));
-    expect(await screen.findByTestId("f3-prepare-button")).toBeEnabled();
-    fireEvent.click(screen.getByTestId("f3-prepare-button"));
-    expect(await screen.findByTestId("f3-confirm-execute-button")).toBeEnabled();
-    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
-    fireEvent.click(screen.getByTestId("f3-confirm-execute-button"));
+    fireEvent.click(await findEnabledByTestId("f2-decide-GO"));
+    fireEvent.click(await findEnabledByTestId("f3-prepare-button"));
+    const confirm = await findEnabledByTestId("f3-confirm-execute-button");
+    expect(screen.queryByTestId("f3-refresh-running-button")).toBeNull();
+    fireEvent.click(confirm);

-    expect(await screen.findByTestId("f3-refresh-running-button")).toBeEnabled();
+    expect(await findEnabledByTestId("f3-refresh-running-button")).toBeEnabled();
     expect(screen.queryByTestId("f3-confirm-execute-button")).toBeNull();
     expect(screen.getByTestId("f3-running-refresh-title")).toHaveTextContent(
       BOUNDED_RUNNING_REFRESH_TITLE,
@@ -691,7 +698,7 @@
         expectedContractVersion: 2,
       },
     );
-    expect(await screen.findByTestId("f3-refresh-running-button")).toBeEnabled();
+    expect(await findEnabledByTestId("f3-refresh-running-button")).toBeEnabled();
     expect(screen.getByTestId("f3-attempt-status")).toHaveTextContent("running");
     expect(screen.queryByTestId("f3-evidence-card")).toBeNull();

@@ -851,9 +858,9 @@
       target: { value: "Inspecter" },
     });
     fireEvent.click(screen.getByTestId("project-assistant-send"));
-    fireEvent.click(await screen.findByTestId("f2-decide-GO"));
-    fireEvent.click(await screen.findByTestId("f3-prepare-button"));
-    const confirm = await screen.findByTestId("f3-confirm-execute-button");
+    fireEvent.click(await findEnabledByTestId("f2-decide-GO"));
+    fireEvent.click(await findEnabledByTestId("f3-prepare-button"));
+    const confirm = await findEnabledByTestId("f3-confirm-execute-button");
     fireEvent.click(confirm);
     fireEvent.click(confirm);
     expect(projectAssistantConfirmAndExecuteResolvedM3ActionMock).toHaveBeenCalledTimes(

```

## Why oracle remains strict

Le helper attend l'état produit légitime `enabled` (busy=false). Il ne force pas le bouton. Confirm count reste **exactement 1**. Same IDs / same Attempt / one-launch / canonical refresh path inchangés. Pas de sleep, skip, timeout global, expect affaibli.

## Primary isolation

7/7 PASS.

## Repeated isolation (processus Vitest séparés)

| Run | Result | elapsed |
|-----|--------|---------|
| iso-1 | 7/7 PASS | 8s |
| iso-2 | 7/7 PASS | 2s |
| iso-3 | 7/7 PASS | 1s |
| iso-4 | 7/7 PASS | 1s |
| iso-5 | 7/7 PASS | 1s |

## Targeted batch

5 files / 40 tests PASS : runningAttemptRefresh, useRunningAttemptO3Observation, deterministicCursorBoundary, preM6.realProductWiringResidual, m4RealOffCorrectionR3.

## Full Vitest 3 consecutive PASS

| Run | passed | failed | skipped | files | elapsed |
|-----|--------|--------|---------|-------|---------|
| #1 | 1854 | 0 | 131 | 197 passed / 13 skipped | 16s |
| #2 | 1854 | 0 | 131 | 197 passed / 13 skipped | 59s |
| #3 | 1854 | 0 | 131 | 197 passed / 13 skipped | 86s |

Séquence PASS/PASS/PASS. New skips = 0. Skips = FinOps Postgres DATABASE_URL unset — historiques.

## Typecheck / lint / build

| Commande | Exit |
|----------|------|
| `npx tsc --noEmit` | 0 |
| `npx next lint` | 0 |
| `npx next build` | 0 |

## Playwright deterministic

Spec existant inchangé. Port 3030. Isolated sqlite. DET=1. REAL unset. **1 passed (44.7s)**.

## ZERO REAL accounting

REAL Cursor launches = 0. OpenAI LIVE calls = 0. new REAL Attempts = 0. new REAL worktrees = 0.

## Historical REAL integrity

FIRST et SECOND worktrees présents. HEAD `0d334785…` PRE=POST. porcelain empty. count = 2.

## Fake / Real qualification

Fake = deterministic Cursor substitution. REAL non lancée. Ce cycle ne change pas le niveau de preuve produit ARCH-WOP-1. Cycle 9 INCOMPLETE n'est pas converti.

## Reserves

- Cycle 9 INCOMPLETE reste le dernier verdict QA.
- R-TRACEABILITY, R-BROWSER-TIMEOUT, R-RECOVERY, G-UX-09 inchangés.
- R-FULL-VITEST-FLAKE : **adressé en Delivery amend** ; confirmation QA = prochain Cycle 9 rerun.

## Anti-claims

≠ Cycle 9 PASS. ≠ READY FOR REAL. ≠ GO REAL. ≠ REAL BOUNDARY PROVEN. ≠ END-TO-END REAL PROVEN. ≠ PRE-M6 COMPLETE. ≠ M6 AUTHORIZED. ≠ UAT READY. ≠ RUNTIME V3 ADOPTED. ≠ ARCH-WOP-1 runtime ADOPTED.

## Exact next gate

```
MORRIS —
ACCEPT / REJECT
CYCLE 8 DELIVERY AMEND
FULL VITEST STABILITY

AND

GO / NO-GO
CYCLE 9 DETERMINISTIC QA RERUN
ZERO REAL
```

Aucun gate REAL implicite.

## Review Handoff

Mode publish-in-cycle. Source `.tmp-sfia-review/chatgpt-review.md`. Destination `sfia-review-handoff/latest-chatgpt-review.md`. Branche `sfia/review-handoff`. Push L3 borné. Pas de commit/push projet.

Valeurs post-publication dans le rapport Cursor.
