# ChatGPT Review Pack — FULL — PRE-M6-F7 MICRO-CORRECTION

## Meta

- Timestamp Europe/Paris: 2026-08-18 10:31:06 CEST (+0200)
- GO Morris consommé: GO MORRIS — MICRO-CORRECTIF DELIVERY PRE-M6-F7 — EVIDENCE / REVIEWBUNDLE HAPPY-PATH VISIBILITY COHERENCE — ZERO REAL
- Cycle / profil / typologie: Cycle 8 — Delivery / implémentation · Critical · INC
- Branche: `delivery/sfia-studio-pre-m6-ui-option-a`
- HEAD: `0d33478566627a9bf507d5a06323962d349308ee`
- origin/main: `a3ac418f3bc2ebb006cbc58f902f13629871014d`
- origin/sfia/review-handoff (pre-publish cycle): `b360c9fbbf960d67a73e99a3af9d15dc0fb56f92`
- Project git actions: NONE (no add/commit/push/PR/merge)

## Git PRE (truth check)

- Date check executed: 2026-08-18 10:26:51 CEST (+0200)
- Expected branch: PASS
- Expected HEAD: PASS
- Staged initial: EMPTY (PASS)
- Historical dirty tree preserved (no reset/clean/stash/rebase)

## EVIDENCE_VISIBILITY_TRUTH_MAP

| Surface / donnée | Runtime durable existe | Transmise client | Rendue DOM | Visible user sans détails techniques | Nature | Visibilité attendue produit actuel | Assertion E2E historique valide ? | Correction minimale |
|---|---|---|---|---|---|---|---|---|
| `f3-result-user-summary` | Oui | Oui | Oui | Oui | User-facing | Doit être visible après SUCCESS | Partielle (non testée explicitement) | Ajouter assertion visible + succès |
| `f3-evidence-user-summary` | Oui (evidence status) | Oui | Oui | Oui | User-facing | Doit être visible après SUCCESS | Non (E2E testait ID technique) | Remplacer assertion par résumé preuve visible |
| `f3-review-bundle-user-summary` | Oui | Oui | Oui | Oui | User-facing | Doit être visible après SUCCESS | Non (E2E testait ID technique) | Remplacer assertion par résumé dossier visible |
| `f3-recommendation-card` | Oui | Oui | Oui | Oui | User-facing | Doit rester visible + non décision Morris | Oui | Conserver assertion existante |
| `f3-evidence-id` (dans `<details>`) | Oui | Oui | Oui | Non (collapsed/hidden par défaut) | Technique | Secondaire, non primaire | Non | Vérifier `hidden` (contractuel) au lieu de `visible` |
| `f3-review-bundle-id` (dans `<details>`) | Oui | Oui | Oui | Non (collapsed/hidden par défaut) | Technique | Secondaire, non primaire | Non | Vérifier `hidden` (contractuel) au lieu de `visible` |


### Questions A/B/C

- QUESTION A: OUI — après SUCCESS, une restitution utile est déjà visible (`result`, `evidence`, `review bundle`, `recommendation`) sans ouvrir les détails techniques.
- QUESTION B: `f3-evidence-id` est un identifiant technique secondaire, pas la preuve UX principale.
- QUESTION C: **Test obsolète (Class B)** — le produit est cohérent sur la preuve user-facing; l'assertion E2E était couplée à un détail technique caché.

## Root Cause Classification

- Root cause class: **B**
- ROOT CAUSE = STALE E2E ASSERTION AGAINST TECHNICAL ID — USER-FACING EVIDENCE WAS ALREADY PRESENT

## Comportement user-facing

- PRE: preuve user-facing visible, mais E2E exigeait `f3-evidence-id`/`f3-review-bundle-id` visibles (faux invariant).
- POST: E2E vérifie la preuve user-facing visible + recommendation visible, et confirme que les IDs techniques restent hidden/collapsed.
- Statut `f3-evidence-id`: conservé dans le DOM en détails techniques, **hidden by default**.

## Fichiers modifiés (micro-cycle only)

- `projects/sfia-studio/app/e2e/studio-option-a.spec.ts`
- `projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts`

## SHA256 PRE/POST

- `projects/sfia-studio/app/e2e/studio-option-a.spec.ts`
  - PRE: `2847008d15113dda0f89b8f588eebfd0c6e8240149755f671e52d5605d1f5469`
  - POST: `1dd384743485b9dbb6262e688707a5a785649fb06745c6604fe499ead0ba64f5`
  - DIFF: `.tmp-sfia-review/pre-m6-f7-evidence-visibility-pre/projects__sfia-studio__app__e2e__studio-option-a.spec.ts.diff.txt`
- `projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts`
  - PRE: `817e548b7405adad43d982bcd809629bc40281f297dd6c516a82994aeb071a3c`
  - POST: `4165028c69515247b92a9cf1f16daeaeb3ec14260e25d709f9585a535fcec44c`
  - DIFF: `.tmp-sfia-review/pre-m6-f7-evidence-visibility-pre/projects__sfia-studio__app__e2e__studio-option-a-deterministic-cursor-boundary.spec.ts.diff.txt`

## Diff PRE → POST complet

### projects/sfia-studio/app/e2e/studio-option-a.spec.ts

```diff
diff --git a/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-f7-evidence-visibility-pre/projects/sfia-studio/app/e2e/studio-option-a.spec.ts b/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
index 771a4ed..ea63a1a 100644
--- a/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-f7-evidence-visibility-pre/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
+++ b/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
@@ -187,8 +187,19 @@ test.describe("Cycle 9 — F1→F11 durable post-GO happy path", () => {
       timeout: 45_000,
     });
     await expect(page.getByTestId("f3-attempt-status")).toContainText(/succeeded/i);
-    await expect(page.getByTestId("f3-evidence-id")).toBeVisible();
-    await expect(page.getByTestId("f3-review-bundle-id")).toBeVisible();
+    await expect(page.getByTestId("f3-result-user-summary")).toContainText(
+      /terminée avec succès/i,
+    );
+    await expect(page.getByTestId("f3-evidence-card")).toBeVisible();
+    await expect(page.getByTestId("f3-evidence-user-summary")).toContainText(
+      /preuve a été enregistrée/i,
+    );
+    await expect(page.getByTestId("f3-review-bundle-card")).toBeVisible();
+    await expect(page.getByTestId("f3-review-bundle-user-summary")).toContainText(
+      /dossier de revue/i,
+    );
+    await expect(page.getByTestId("f3-evidence-id")).toBeHidden();
+    await expect(page.getByTestId("f3-review-bundle-id")).toBeHidden();
     await expect(page.getByTestId("f3-recommendation-card")).toBeVisible();
     await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
     await capture(page, "R07-F7-Succeeded", {
```

### projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts

```diff
diff --git a/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-f7-evidence-visibility-pre/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts b/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
index f8c9a78..6ac4438 100644
--- a/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-f7-evidence-visibility-pre/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
+++ b/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
@@ -164,11 +164,20 @@ test.describe("deterministic Cursor boundary browser tooling", () => {
       { timeout: 20_000 },
     );
     await expect(page.getByTestId("f3-attempt-id")).toHaveText(attemptIdB1);
-    await expect(page.getByTestId("f3-evidence-id")).toBeVisible();
-    await expect(page.getByTestId("f3-evidence-id")).not.toHaveText(
-      "ev:pending-real",
+    await expect(page.getByTestId("f3-result-user-summary")).toContainText(
+      /terminée avec succès/i,
     );
-    await expect(page.getByTestId("f3-review-bundle-id")).toBeVisible();
+    await expect(page.getByTestId("f3-evidence-card")).toBeVisible();
+    await expect(page.getByTestId("f3-evidence-user-summary")).toContainText(
+      /preuve a été enregistrée/i,
+    );
+    await expect(page.getByTestId("f3-review-bundle-card")).toBeVisible();
+    await expect(page.getByTestId("f3-review-bundle-user-summary")).toContainText(
+      /dossier de revue/i,
+    );
+    await expect(page.getByTestId("f3-evidence-id")).toBeHidden();
+    await expect(page.getByTestId("f3-evidence-id")).not.toHaveText("ev:pending-real");
+    await expect(page.getByTestId("f3-review-bundle-id")).toBeHidden();
     await expect(page.getByTestId("f3-review-bundle-id")).not.toHaveText(
       "rb:pending-real",
     );
```

## Tests & Validation

- Unit/UI ciblés: `__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx` + `__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx` = PASS (13/13).
- E2E principal: `e2e/studio-option-a.spec.ts` = PASS (9/9) en environnement isolé (port 3241, DB /tmp/sfia-pre-m6-f7-a.sqlite).
- E2E deterministic boundary: `e2e/studio-option-a-deterministic-cursor-boundary.spec.ts` = PASS (1/1) (port 3242, DB /tmp/sfia-pre-m6-f7-b.sqlite, QA control + deterministic boundary ON).
- `npm run lint` = PASS.
- `npm run build` = PASS.
- `npm run typecheck` = FAIL avant build (types `.next` absents) puis PASS après build (ordre documenté, non régression produit).

## Screenshots (required set)

- `.tmp-sfia-review/pre-m6-f7-evidence-visibility-captures/A-before-success-or-running.png`
- `.tmp-sfia-review/pre-m6-f7-evidence-visibility-captures/B-success-evidence-reviewbundle.png`
- `.tmp-sfia-review/pre-m6-f7-evidence-visibility-captures/C-durable-reload-if-covered.png`

## Regression Status

- UAT-UX-03: PASS (unchanged)
- UAT-UX-04: PASS (unchanged)
- UAT-UX-05: PASS (unchanged)
- UAT-UX-07: PASS (unchanged)
- UAT-UX-08: PASS (unchanged)
- UAT-UX-09: PASS (unchanged)
- UAT-UX-06: OPEN / NON CLOSED (explicit)
- UAT-RECOVERY-03: UNCHANGED / OPEN
- V3-F10: OPEN

## Fake/Real Qualification

- Qualification: DETERMINISTIC PROVEN (micro-correctif only)
- REAL_CALL_COUNT = 0
- OPENAI_LIVE_CALL_COUNT = 0
- CURSOR_REAL_PROCESS_COUNT = 0
- No project git action (add/commit/push/PR/merge): confirmed

## Git POST

```text
M projects/sfia-studio/app/__tests__/increment-a.test.tsx
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/__tests__/navigation.test.tsx
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/globals.css
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/studio/projects/new/page.tsx
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/components/shell/utility-rail.module.css
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
 M projects/sfia-studio/app/features/project-assistant/f3/constants.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
 M projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/f3/types.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
 M projects/sfia-studio/app/lib/navigation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/app/playwright.config.ts
 M projects/sfia-studio/app/styles/shell.module.css
 M projects/sfia-studio/app/styles/tokens.css
 M projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/executionWindowDeadline.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/observationSchedule.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/executionWindowPolicy.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/
?? projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts
?? projects/sfia-studio/app/__tests__/studio-projects/
?? projects/sfia-studio/app/__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/app/studio/page.tsx
?? projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a.spec.ts
?? projects/sfia-studio/app/e2e/support/
?? projects/sfia-studio/app/features/pre-m6-product-ui/
?? projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
?? projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
?? projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
?? projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
?? projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
?? projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
?? projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
?? projects/sfia-studio/app/features/studio-projects/
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/observationSchedule.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/executionWindowPolicy.ts
?? projects/sfia-studio/app/lib/oa/project/application/listProjects.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha.ts
```

- Staged post:
```text
(empty)
```

## Verdict

PASS — PRE-M6-F7 EVIDENCE/REVIEWBUNDLE HAPPY-PATH VISIBILITY COHERENT — USER-FACING EXECUTION PROOF VISIBLE AFTER SUCCESS — RAW TECHNICAL IDS REMAIN SECONDARY/COLLAPSED AS APPROPRIATE — PRINCIPAL PRE-M6 E2E PASS — DETERMINISTIC CURSOR BOUNDARY E2E PASS — UAT-UX-03/04/05/07/08/09 REGRESSION PASS — ZERO REAL — NO PROJECT GIT ACTION — READY TO RESUME PRE-M6 PR READINESS — PRE-M6 NON COMPLETE — RUNTIME V3 NON ADOPTED

## Remaining reserves

- UAT-UX-06 open (evidence still partly technical as known reserve).
- UAT-RECOVERY-03 open.
- V3-F10 open.
- PRE-M6 NON COMPLETE; runtime v3 NON ADOPTED.

## Next gate

MORRIS / CHATGPT REVIEW — PRE-M6-F7 MICRO-CORRECTION — IF ACCEPTED, RESUME CYCLE 13 PRE-M6 PR READINESS — NO MERGE
