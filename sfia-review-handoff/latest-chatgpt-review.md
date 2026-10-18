# SFIA STUDIO — P6 TOOL-FIRST PRODUCT INTEGRATION — Review Pack FULL
# ChatGPT PR Readiness Review Handoff

## A. Horodatage Europe/Paris

- ISO: `2026-10-18T06:41:28+0200`
- Local: `2026-10-18 06:41 CEST`

## B. GO Morris consommé

**GO PRODUCT DIGEST REFRESH + VALIDATION + COMMIT/PUSH** (18 octobre 2026).

GO historique `PRR BOUNDED SEMANTIC SYNC + COMMIT/PUSH` + GO complémentaire `PRR SEMANTIC CORRECTION PASS` + décision ChatGPT **PRR SEMANTIC CONTENT REVIEW — ACCEPT**.

Autorise: digest refresh; full local validation; staging borné; commit Product; push branche Product; Review Handoff L3.

N'autorise PAS: correction sémantique; Cursor REAL; Human QA; PR; merge; force push; promotion runtime v3.

## C. Cycle / profil / CKC

| Champ | Valeur |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Milestone | P6 — GLOBAL INTEGRATED PRODUCT QA |
| Campagne | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Capacité | V3-F05 (+ F11/F12/F14/F15) |
| Type | 13 — PR readiness / Git Integration |
| Profil | CRITICAL |
| CKC | ckc:studio:pr-readiness |
| Typologie | EVOL / DOC / CONFORMANCE / GIT INTEGRATION |
| QA | FULL LOCAL VALIDATION |

## D. Git Truth initial

| Champ | Valeur |
|---|---|
| Worktree | `/private/tmp/sfia-tf-safety-r1r2` |
| Branche | `fix/sfia-studio-p6-tool-first-safety-r1r2` |
| HEAD initial | `e03c7b9fd3665b89a4083a937b82424c5e7f6406` |
| origin/main | `e03c7b9fd3665b89a4083a937b82424c5e7f6406` |
| Remote Product branch | absente (avant push) |
| Staged initial | vide |
| Dirty | 15 Product + 8 PRR + review pack; manifest inchangé |

## E. Sources consultées

Processus SFIA v2.6; Build Doctrine / Roadmap (lecture); C1; contrat P6; doctrine v3 30/34/35/37; CKC 13-pr-readiness; PRR volumes + manifeste; `check-production-runtime-reference.mjs`; `package.json`; `.github/workflows/sfia-studio-ci.yml`; handoff ACCEPT `057daf71ef088a68241bfc87bd824d8b10db9df4`.

## F. Convergence Pre-check

| Item | État |
|---|---|
| PR #587 | MERGED |
| Tool-First | LOCAL CANDIDATE → PRODUCT PUSHED (ce cycle) |
| R1 | DETERMINISTICALLY CLOSED AT TESTED SCOPE |
| R2 | PRODUCT FAIL-CLOSED / DETERMINISTICALLY PROVEN |
| PRR | SEMANTIC CONTENT ACCEPTED |
| Manifest | DIGEST REFRESHED → CONFORMANCE OK |
| P6 GLOBAL | PASS NOT CLAIMED |
| Runtime v3 | NON ADOPTED |
| Dette | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN |

## G. Référence ACCEPT ChatGPT

**PRR SEMANTIC CONTENT REVIEW — ACCEPT** sur le contenu documentaire PRR du handoff `057daf71ef088a68241bfc87bd824d8b10db9df4` / blob `290b060a1a32fa3bdc46614c304a531e45e27178`.

## H. Handoff d'entrée

| Champ | Valeur |
|---|---|
| Branche | `sfia/review-handoff` |
| Commit | `057daf71ef088a68241bfc87bd824d8b10db9df4` |
| Blob | `290b060a1a32fa3bdc46614c304a531e45e27178` |
| Tip remote pré-cycle | identique ACCEPT (OK) |

## I. Contrôle des 15 empreintes Product

Correspondance avec section H du handoff ACCEPT: **PASS** (commit == worktree == handoff ACCEPT §H)

```
1273aebaf73b95648fcb36fcac82da37a1dd514887f1b19bedb66271134ed525  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
00bc1375546283ae8ff116871e7e6003b023420a48a13c9e5bbf39e4c9a3fcf6  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
e18ee62a8ef3e845ce5f8623c87c5f7965bc205a201e530d22d0627fdb3169c5  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
504eca358136873f370a1eed4570ece894601ff7bd9d1d96f992e7cc0cf02642  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
ea5773f3ccca0eda9bb52ec472deae87fadec3ea9568d863e0f88004a4a2da04  projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
56ea60ca19b9862562dae4f535a57494eddf4a37b265d7cc97a74565b197faea  projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
b200fa136398173d98331d09bf5d0816f35ef1204014276fcf6c37ea8155c0c9  projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
dcf93660ddbaf3741f973625fc6fa7194b61ce4c99ea4cf1183b2c6b9c8fa2f9  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
e97ac1c30fe8812fc75b0ab7715364a06033eb0d6a1d1a41a50b52ed6dd23783  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
4024ae1078c6f4da655ea0bca36f0c0a70415211f3e5eb323949f651bfc41be9  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
c65e239668b4bc3514597dc04e9ba0ad8b219ce56ab1d05e805a1722c58cc854  projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts
a10470efdea00fefe0ba3239772c88c8e2d4b1baac455bab8a0c1fd4f2c0a0ec  projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
5829e84f655fefe449381bb47f6f29e537c191f8b38dac5aaeb4c1c704caf4e4  projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
dc5ea668ef2b765ba33042d4f95269bfef7ebbc610c61f20101fadaeb5283d14  projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
c565b4714397e266e55d80afce90ff8d9ede5454a9a431b44f08694f95bdccce  projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
```

## J. Contrôle d'identité des huit documents PRR

Diff consolidé local vs section S du handoff ACCEPT: **PASS** (byte-normalized match avant digest refresh; contenu documentaire inchangé pendant ce cycle).

## K. Inventaire exact des 24 fichiers

15 Product/test + 8 PRR + 1 manifeste.

```
 ...03.durableExecutionActionContinuity.ui.test.tsx |  53 +-
 ...p5.s03.executionReconcileContinuity.ui.test.tsx |  19 +-
 .../p5.s03.pilotExecutionPresentation.d0.test.ts   |  11 +-
 .../p6.r02.actionAvailability.d0.test.ts           |   7 +-
 .../p6.der16.genericNoraToolInvocation.d0.test.ts  |   9 +-
 ...irst.executionContractSimplification.d0.test.ts | 836 +++++++++++++++++++++
 .../p6.toolFirst.safetyClosureR1R2.d0.test.ts      | 527 +++++++++++++
 .../surfaces/ExecutionSurface.tsx                  |  44 +-
 .../surfaces/pilotExecutionPresentation.ts         |   8 +-
 .../features/project-assistant/orchestrateTurn.ts  |   1 +
 .../w2/boundedNonMutatingRealLaunchGate.ts         |  71 ++
 .../w2/governedExecuteAuthorizedContract.ts        |  25 +
 .../w2/prepareGenericExecutionContractDraft.ts     |  65 +-
 .../w2/resolveAuthoritativeProductMateriality.ts   | 207 ++++-
 .../productExecutionAgentsTools.ts                 |  18 +
 .../02-runtime-object-catalog.md                   |   1 +
 .../03-end-to-end-flow-catalog.md                  |  22 +-
 .../04-dependency-impact-map.md                    |  19 +-
 ...05-environments-configuration-and-boundaries.md |   1 +
 .../07-authority-invariants-and-failure-modes.md   |  18 +-
 .../08-test-proof-and-conformance-map.md           |   3 +
 ...9-known-gaps-reserves-and-current-boundaries.md |  22 +
 .../production-runtime-reference/README.md         |   1 +
 .../production-runtime-reference.manifest.json     |  18 +-
 24 files changed, 1916 insertions(+), 90 deletions(-)

```

## L. Analyse du manifeste avant refresh

Identique à HEAD `e03c7b9fd3665b89a4083a937b82424c5e7f6406` (précondition OK). Aucune mutation hors digests autorisée.

## M. Anomalies attendues avant refresh

REFERENCE REVIEW REQUIRED uniquement pour digests:

- 8 volumes PRR adaptés
- 1 trackedSource `orchestrateTurn.ts`

Aucune autre anomalie de structure/ID.

## N. Commande canonique de refresh

```
node scripts/check-production-runtime-reference.mjs
node scripts/check-production-runtime-reference.mjs --write-digests
node scripts/check-production-runtime-reference.mjs
```

Node.js: v24.16.0 / npm 11.13.0

## O. Diff complet du manifeste après refresh

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index c302e3fb..25fc31fb 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "d6e17088b0cc5762"
+      "sha256_16": "409a4fe71bbb40df"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -15,19 +15,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "243b7c0e390eb19f"
+      "sha256_16": "a63310ed7b85cf1b"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "efdc700181d6a2cc"
+      "sha256_16": "733c07f253de5b65"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "0e1a3472427bdb90"
+      "sha256_16": "b8a66451083f90e3"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "101ec96a6908db71"
+      "sha256_16": "2f13a6917c240eb7"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
@@ -35,15 +35,15 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "8e81c1fd63d604b0"
+      "sha256_16": "dcf49d984f2668da"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "9ee8dde351556e12"
+      "sha256_16": "8237aa210ecfac30"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "e9868b78e0a79e7c"
+      "sha256_16": "252e18777ad9e04b"
     }
   ],
   "components": [
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "8150d48197019412"
+      "sha256_16": "4024ae1078c6f4da"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",

```

## P. Digests recalculés


| Path | Old sha256_16 | New sha256_16 |
|---|---|---|
| README.md | d6e17088b0cc5762 | 409a4fe71bbb40df |
| 02-runtime-object-catalog.md | 243b7c0e390eb19f | a63310ed7b85cf1b |
| 03-end-to-end-flow-catalog.md | efdc700181d6a2cc | 733c07f253de5b65 |
| 04-dependency-impact-map.md | 0e1a3472427bdb90 | b8a66451083f90e3 |
| 05-environments-configuration-and-boundaries.md | 101ec96a6908db71 | 2f13a6917c240eb7 |
| 07-authority-invariants-and-failure-modes.md | 8e81c1fd63d604b0 | dcf49d984f2668da |
| 08-test-proof-and-conformance-map.md | 9ee8dde351556e12 | 8237aa210ecfac30 |
| 09-known-gaps-reserves-and-current-boundaries.md | e9868b78e0a79e7c | 252e18777ad9e04b |
| orchestrateTurn.ts (trackedSource) | 8150d48197019412 | 4024ae1078c6f4da |


Vérification indépendante sha256_16: **PASS**. Mutations hors `sha256_16`: **0**.

Champs préservés: schemaVersion, kind, canonicalReadme, lastReviewedCommit, lastReviewedAt, identities, tracked paths, flows, invariants, dependsOn.

## Q. Conformance PRR

```
RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK
```

## R. Typecheck

**PASS** — `npm run typecheck` (tsc --noEmit) exit 0.

## S. Lint

**PASS** — `npm run lint` — No ESLint warnings or errors.

## T. Build

**PASS** — `npm run build` (Next.js 15.5.20) Compiled successfully.

## U. Full npm test

**PASS**

```
Test Files  560 passed | 22 skipped (582)
     Tests  6166 passed | 143 skipped (6309)
Duration  69.15s
```

## V. Modeled governance tests

**PASS** — 75 pass / 0 fail (evidence-review-maturity + execution-contract + execution-attempt).

## W. Secret scan

**PASS** — CI-equivalent `git grep -nE 'BEGIN (RSA |OPENSSH )?PRIVATE KEY|AKIA[0-9A-Z]{16}' -- projects/sfia-studio` + scan borné candidat: aucun hit.

## X. git diff --check

**PASS** (vide).

## Y. Fake / Real Qualification

| Item | Valeur |
|---|---|
| Applicable | OUI |
| Niveau atteint | FULL LOCAL DETERMINISTIC VALIDATION PASS |
| Cursor REAL | NON lancé; NON armé |
| Claims interdits | REAL BOUNDARY / E2E REAL / REAL no-write / HQA / P6 GLOBAL — **non affirmés** |

## Z. Dette no-write et exit

**Dette:** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT — **OPEN**.

Exit future: enforcement no-write REAL prouvé + gate Morris distinct.

DETERMINISTIC PROVEN ≠ READY FOR REAL.

## AA. Périmètre staged vérifié

24 chemins exacts; staging explicite (pas `git add -A`); `.tmp-sfia-review` exclu; `git diff --cached --check` PASS.

## AB / AC / AD. Contenu exploitable du lot intégré

### Diff utile complet du lot (parent…commit)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
index f411edfe..c9f0aeb9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
@@ -194,7 +194,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     });
   });

-  it("E1 — fresh mount confirmation_required → Confirmer invokes confirm only", async () => {
+  it("E1 — fresh mount confirmation_required → Exécuter folds Confirm then Authorize+Execute", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
@@ -202,6 +202,15 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     readCurrentContinuityMock.mockResolvedValue(
       activeCurrent({ status: "confirmation_required" }),
     );
+    confirmMock.mockResolvedValue({
+      ok: true,
+      executionContractId: "xct:cp01",
+      contractVersion: 1,
+      confirmationRef: "cfm:1",
+      statusLabel: "CONFIRMATION REQUISE — OBTENUE",
+      alreadyConfirmed: false,
+      executionPerformed: false,
+    });

     render(
       <ExecutionSurface
@@ -215,27 +224,28 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
         "À confirmer",
       );
     });
-    const confirmBtn = screen.getByTestId("project-execution-confirm");
-    expect(confirmBtn).toBeTruthy();
-    expect((confirmBtn as HTMLButtonElement).disabled).toBe(false);
-    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    // Tool-first: no separate Confirmer CTA — Exécuter folds Confirm after inspect.
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    const executeBtn = screen.getByTestId("project-execution-execute");
+    expect((executeBtn as HTMLButtonElement).disabled).toBe(false);

-    fireEvent.click(confirmBtn);
+    fireEvent.click(executeBtn);

     await waitFor(() => {
       expect(confirmMock).toHaveBeenCalledTimes(1);
+      expect(authorizeMock).toHaveBeenCalledTimes(1);
+      expect(
+        reconcileMock.mock.calls.some(
+          (call) => (call[0] as { intent?: string }).intent === "execute",
+        ),
+      ).toBe(true);
     });
     expect(confirmMock).toHaveBeenCalledWith({
       projectId: "prj:cp01",
       executionContractId: "xct:cp01",
     });
-    // R1 — Confirm must not record inspection as a side effect.
+    // R1 — Exécuter never records inspection as a side effect.
     expect(inspectMock).not.toHaveBeenCalled();
-    expect(reconcileMock).not.toHaveBeenCalled();
-    expect(authorizeMock).not.toHaveBeenCalled();
-    // Canonical reread after confirm (≥ initial load + post-confirm).
-    expect(deriveContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
-    expect(readCurrentContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
   });

   it("E2 — fresh mount confirmed → Exécuter authorizes then reconciles execute", async () => {
@@ -287,13 +297,16 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     );
   });

-  it("E3 — Confirmer never creates Attempt via reconcile execute", async () => {
+  it("E3 — without inspection sufficient, confirmation_required shows Inspect not Exécuter", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
     });
     readCurrentContinuityMock.mockResolvedValue(
-      activeCurrent({ status: "confirmation_required" }),
+      activeCurrent({
+        status: "confirmation_required",
+        inspectionSufficient: false,
+      }),
     );

     render(
@@ -303,15 +316,11 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       />,
     );
     await waitFor(() => {
-      expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
-    });
-    fireEvent.click(screen.getByTestId("project-execution-confirm"));
-    await waitFor(() => {
-      expect(confirmMock).toHaveBeenCalled();
+      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
     });
-    expect(reconcileMock).not.toHaveBeenCalledWith(
-      expect.objectContaining({ intent: "execute" }),
-    );
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    expect(confirmMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
index 9a645178..600c8414 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
@@ -561,7 +561,7 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     expect(staleContinues).toHaveLength(0);
   });

-  it("CP01 regression — Confirmer never reconcile execute/continue", async () => {
+  it("CP01 regression — without inspection, confirmation_required shows Inspect (no silent execute)", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection({
@@ -576,6 +576,12 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
         status: "confirmation_required",
         effectConfirmationRequired: true,
       },
+      inspection: {
+        ...current.inspection,
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: null,
+      },
     });

     render(
@@ -583,13 +589,10 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     );
     await flush(0);
     await flush(0);
-    expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
-
-    await act(async () => {
-      fireEvent.click(screen.getByTestId("project-execution-confirm"));
-      await vi.advanceTimersByTimeAsync(0);
-    });
-    expect(confirmMock).toHaveBeenCalled();
+    expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    expect(confirmMock).not.toHaveBeenCalled();
     expect(authorizeMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
index d99cb047..3327da36 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
@@ -153,7 +153,7 @@ describe("P5-S03 pilotExecutionPresentation", () => {
     expect(deriveExecutionTabBadge(view)).toBe(1);
   });

-  it("confirmation_required → À confirmer, no direct execute", () => {
+  it("confirmation_required → À confirmer; Exécuter folds Confirm (tool-first)", () => {
     const view = presentPilotExecution({
       continuityProjection: {
         ok: true,
@@ -168,9 +168,12 @@ describe("P5-S03 pilotExecutionPresentation", () => {
       }),
     });
     expect(view.status).toBe("a_confirmer");
-    expect(view.cta.kind).toBe("confirm");
-    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(true);
-    expect(view.cta.kind === "execute").toBe(false);
+    // Tool-first ordinary path: no separate Confirmer CTA — Exécuter carries
+    // confirm-then-authorize after inspection. Inspect ≠ Execute preserved.
+    expect(view.cta.kind).toBe("execute");
+    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
+    expect(view.cta.kind === "confirm").toBe(false);
+    expect(view.attentionNote).toMatch(/confirmation|Exécuter/i);
   });

   it("insufficient inspection → Inspect CTA (Confirm not enabled)", () => {
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
index 5fa9e4d2..73ba9f0a 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
@@ -179,7 +179,7 @@ describe("P6 R02 — action availability / currentness", () => {
     expect(view.cta.kind === "inspect" && view.cta.enabled).toBe(true);
   });

-  it("UI05 — active + inspection sufficient → Confirm enabled", () => {
+  it("UI05 — active + inspection sufficient → Exécuter folds Confirm (tool-first)", () => {
     const view = presentPilotExecution({
       continuityProjection: { ok: true, projection: baseProjection() },
       preExecutionContinuity: activePre({
@@ -187,8 +187,9 @@ describe("P6 R02 — action availability / currentness", () => {
         inspectionSufficient: true,
       }),
     });
-    expect(view.cta.kind).toBe("confirm");
-    expect(view.cta.kind === "confirm" && view.cta.enabled).toBe(true);
+    expect(view.cta.kind).toBe("execute");
+    expect(view.cta.kind === "execute" && view.cta.enabled).toBe(true);
+    expect(view.status).toBe("a_confirmer");
   });

   it("UI06 — fingerprint drift → reinspect, Confirm not enabled", () => {
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
index a26c6b72..d5e6b3f9 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
@@ -1697,7 +1697,14 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
         .parameters.properties,
     );
     expect(propKeys.sort()).toEqual(
-      ["contextNotes", "expectedOutcome", "impactSignals", "objective", "scope"].sort(),
+      [
+        "contextNotes",
+        "expectedOutcome",
+        "impactSignals",
+        "objective",
+        "repositoryMutation",
+        "scope",
+      ].sort(),
     );
     expect(propKeys.join(",")).not.toMatch(/decision|authority|hd/i);

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
new file mode 100644
index 00000000..d0015233
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
@@ -0,0 +1,836 @@
+/**
+ * STUDIO-P6-GENERIC-EXECUTION-TOOL-FIRST-SIMPLIFICATION-01
+ *
+ * Deterministic Product end-to-end (Fake Cursor / Fake provider boundaries):
+ * Nora tool / solicit → Product PREPARE → OA EC → inspect → authorize →
+ * Select/Start → Evidence continuity.
+ *
+ * Scenarios A–J. ZERO Cursor REAL. PREPARE ≠ AUTHORIZE ≠ EXECUTE.
+ *
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  buildIntentAnalysisFromSolicitedMission,
+  prepareGenericExecutionContractDraft,
+  solicitGenericExecutionPrepare,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
+import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  governedExecuteSelectAgent,
+  governedExecuteStart,
+} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
+import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
+import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+} from "@/lib/oa/decision";
+import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
+import { settleDeterministicProductCursorSuccess } from "./w2Harness";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
+} from "./w2Harness";
+import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
+
+function restoreEnvVar(name: string, previous: string | undefined): void {
+  if (previous === undefined) delete process.env[name];
+  else process.env[name] = previous;
+}
+
+/** Oracle — CPM earliest-finish critical path for planning A–H (CAS A). */
+function criticalPathOracleAtoH(): {
+  durationDays: number;
+  path: readonly string[];
+} {
+  const tasks: Record<string, { d: number; preds: string[] }> = {
+    A: { d: 2, preds: [] },
+    B: { d: 4, preds: ["A"] },
+    C: { d: 3, preds: ["A"] },
+    D: { d: 5, preds: ["C"] },
+    E: { d: 4, preds: ["B", "D"] },
+    F: { d: 2, preds: ["C"] },
+    G: { d: 3, preds: ["E", "F"] },
+    H: { d: 1, preds: ["G"] },
+  };
+  const es: Record<string, number> = {};
+  const ef: Record<string, number> = {};
+  const order = ["A", "B", "C", "D", "E", "F", "G", "H"];
+  for (const id of order) {
+    const t = tasks[id]!;
+    const start = t.preds.reduce((m, p) => Math.max(m, ef[p] ?? 0), 0);
+    es[id] = start;
+    ef[id] = start + t.d;
+  }
+  const durationDays = ef.H!;
+  // Backward pass for critical path (float = 0).
+  const lf: Record<string, number> = { H: durationDays };
+  const ls: Record<string, number> = { H: durationDays - tasks.H!.d };
+  for (const id of [...order].reverse()) {
+    for (const p of tasks[id]!.preds) {
+      const cand = ls[id]!;
+      lf[p] = lf[p] == null ? cand : Math.min(lf[p]!, cand);
+      ls[p] = lf[p]! - tasks[p]!.d;
+    }
+  }
+  const critical = order.filter((id) => ls[id] === es[id]);
+  return { durationDays, path: critical };
+}
+
+const PLANNING_SCOPE = [
+  "A 2j sans dépendance",
+  "B 4j après A",
+  "C 3j après A",
+  "D 5j après C",
+  "E 4j après B et D",
+  "F 2j après C",
+  "G 3j après E et F",
+  "H 1j après G",
+].join("; ");
+
+describe("P6 tool-first Generic Execution contract simplification A–J", () => {
+  let runtime: RuntimeApplicationService;
+  let previousMorris: string | undefined;
+  let previousDetPin: string | undefined;
+
+  beforeEach(() => {
+    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
+    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
+    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
+    resetPendingGenericPrepareOfferStoreForTests();
+    runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("p6-tool-first.sqlite"),
+      idPrefix: "tf01",
+    });
+  });
+
+  afterEach(() => {
+    resetPendingGenericPrepareOfferStoreForTests();
+    cleanupW2TempDirs();
+    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
+    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
+  });
+
+  async function seedProject(input: {
+    suffix: string;
+    withCycle: boolean;
+    framingCycle?: boolean;
+  }) {
+    const oa = runtime.oa!;
+    const created = await runtime.createProject({
+      name: `TF ${input.suffix}`,
+      objective: "Tool-first simplification",
+      context: "det tool-first",
+      criticality: "STANDARD",
+      constraints: ["ZERO REAL"],
+      shortReference: `TF${input.suffix.toUpperCase().slice(0, 6)}`,
+      idempotencyKey: `idem:tf-${input.suffix}`,
+    });
+    if (!created.ok) throw new Error("createProject");
+    const projectId = created.project.projectId;
+    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    if (!lps0.ok) throw new Error("lps0");
+    await oa.cycleServices.createInitialTrajectory.execute({
+      trajectoryId: `trj:${projectId}`,
+      projectId,
+      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
+      status: "active",
+      expectedLpsVersion: lps0.livingProjectState.version,
+      createdBy: {
+        actorId: "actor:morris",
+        role: "project_owner",
+        displayName: "Morris",
+        authorityLevel: "N3",
+      },
+    });
+
+    let cycleInstanceId: string | null = null;
+    if (input.withCycle) {
+      cycleInstanceId = `cyc:tf-${input.suffix}`;
+      await oa.cycleServices.createCycle.execute({
+        cycleInstanceId,
+        cycleTypeId: input.framingCycle ? "cyc:framing" : "cyc:delivery",
+        projectId,
+        signals: { lowRiskBounded: true },
+        createdBy: {
+          actorId: "actor:nora-f2",
+          role: "agent",
+          displayName: "Nora F2",
+          authorityLevel: "N1",
+        },
+        linkAsActiveCycle: false,
+      });
+      const auth = registerLocalPiloteAuthority({
+        authorityResolver: oa.authorityResolver,
+        scope: `pilot-lifecycle:${cycleInstanceId}`,
+        issuedAt: "2026-10-17T10:00:00.000Z",
+        forceEnable: true,
+      });
+      if (!auth.ok) throw new Error("auth");
+      const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+      if (!lps1.ok) throw new Error("lps1");
+      const started = await oa.cycleServices.pilotLifecycle.start({
+        cycleInstanceId,
+        projectId,
+        createdBy: {
+          actorId: LOCAL_PILOTE_ACTOR.actorId,
+          role: LOCAL_PILOTE_ACTOR.role,
+          displayName: LOCAL_PILOTE_ACTOR.displayName,
+          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
+        },
+        authorityEvidenceId: auth.evidenceId,
+        expectedLpsVersion: lps1.livingProjectState.version,
+      });
+      if (!started.ok) throw new Error("start");
+    }
+
+    const identity = `acme/tf-${input.suffix}`;
+    await oa.projectServices.setProjectRepositoryBinding!.execute({
+      projectId,
+      actor: LOCAL_PILOTE_ACTOR,
+      binding: {
+        provider: "github",
+        identity,
+        remoteUrl: `https://github.com/${identity}.git`,
+        defaultBranch: "main",
+        pathRoot: "projects/demo",
+      },
+    });
+    ensureManagedRepoCloneSkeleton({
+      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
+      identity,
+    });
+    return { projectId, cycleInstanceId, oa };
+  }
+
+  async function countAttempts(
+    oa: NonNullable<RuntimeApplicationService["oa"]>,
+    projectId: string,
+  ): Promise<number> {
+    const contracts =
+      await oa.executionContractServices.contracts.listByProject(projectId);
+    let total = 0;
+    for (const c of contracts) {
+      total += (
+        await oa.executionAttemptServices!.attempts.listByContract(
+          c.executionContractId,
+        )
+      ).length;
+    }
+    return total;
+  }
+
+  it("unit — pathless analysis qualifies only with positive non-mutating claim", () => {
+    const analysis = buildIntentAnalysisFromSolicitedMission({
+      objective: "Calculer le chemin critique du planning A–H",
+      expectedOutcome: "Durée minimale et chemin critique",
+      scope: PLANNING_SCOPE,
+      repositoryMutation: "none",
+    });
+    const ok = qualifyBoundedNonMutatingAnalysisMission({
+      analysis,
+      liveOk: true,
+      concretePaths: [],
+      protectedPathHits: [],
+      positiveStructuralSignal: false,
+      requestedCapabilities: [],
+      isDocumentaryWriteMission: false,
+    });
+    expect(ok.ok).toBe(true);
+
+    // R1 — absence is NOT a positive claim.
+    const absent = qualifyBoundedNonMutatingAnalysisMission({
+      analysis: buildIntentAnalysisFromSolicitedMission({
+        objective: "Calculer le chemin critique",
+        expectedOutcome: "18 jours",
+        scope: PLANNING_SCOPE,
+      }),
+      liveOk: true,
+      concretePaths: [],
+      protectedPathHits: [],
+      positiveStructuralSignal: false,
+      requestedCapabilities: [],
+      isDocumentaryWriteMission: false,
+    });
+    expect(absent.ok).toBe(false);
+    expect(absent.basis).toBe("repository_mutation_claim_absent");
+
+    const unknown = qualifyBoundedNonMutatingAnalysisMission({
+      analysis: buildIntentAnalysisFromSolicitedMission({
+        objective: "Calculer le chemin critique",
+        expectedOutcome: "18 jours",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "unknown",
+      }),
+      liveOk: true,
+      concretePaths: [],
+      protectedPathHits: [],
+      positiveStructuralSignal: false,
+      requestedCapabilities: [],
+      isDocumentaryWriteMission: false,
+    });
+    expect(unknown.ok).toBe(false);
+    expect(unknown.basis).toBe("repository_mutation_unknown");
+
+    const write = qualifyBoundedNonMutatingAnalysisMission({
+      analysis: buildIntentAnalysisFromSolicitedMission({
+        objective: "Écrire une note",
+        expectedOutcome: "note.md",
+        scope: "livrable documentaire",
+        repositoryMutation: "write",
+      }),
+      liveOk: true,
+      concretePaths: [],
+      protectedPathHits: [],
+      positiveStructuralSignal: false,
+      requestedCapabilities: [],
+      isDocumentaryWriteMission: true,
+    });
+    expect(write.ok).toBe(false);
+  });
+
+  it("CAS A — pathless analysis PREPARE → inspect → authorize → Select/Start; oracle 18j", async () => {
+    const oracle = criticalPathOracleAtoH();
+    expect(oracle.durationDays).toBe(18);
+    expect(oracle.path).toEqual(["A", "C", "D", "E", "G", "H"]);
+
+    const { projectId, cycleInstanceId, oa } = await seedProject({
+      suffix: "a",
+      withCycle: false,
+    });
+    const decisionsBefore =
+      await oa.decisionServices.decisions.listByProject(projectId);
+
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective:
+          "Calculer le chemin critique de ce planning A–H (analyse sans écriture fichier)",
+        expectedOutcome: `Durée minimale ${oracle.durationDays} jours ; chemin critique ${oracle.path.join(" → ")}`,
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+        contextNotes: "Mission d'analyse conversationnelle — aucune mutation repo.",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.humanDecisionCreated).toBe(false);
+    expect(prep.executionAttemptCreated).toBe(false);
+    expect(prep.materiality).toBe("non_structural");
+    expect(await countAttempts(oa, projectId)).toBe(0);
+
+    const loaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
+    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
+    expect(loaded.contract.constraints).toContain(
+      "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
+    );
+    expect(loaded.contract.constraints).toContain(
+      "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
+    );
+    const inputs = loaded.contract.inputs as Record<string, unknown>;
+    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
+    expect(inputs.resolvedAuthoritativeTargetPath ?? null).toBeNull();
+    expect(inputs.targetPath ?? null).toBeNull();
+    const scopeIn = Array.isArray(inputs.scopeIn) ? inputs.scopeIn : [];
+    expect(scopeIn).toEqual([]);
+    expect(await countAttempts(oa, projectId)).toBe(0);
+
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: loaded.contract.version,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error(inspected.message);
+
+    const authorized = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: inspected.contractVersion,
+      expectedSemanticFingerprint: inspected.semanticFingerprint,
+      forceLocalAuthority: true,
+    });
+    expect(authorized.ok).toBe(true);
+    if (!authorized.ok) throw new Error(authorized.message);
+    expect(authorized.executionAttemptCreated).toBe(false);
+    expect(authorized.humanDecisionCreated).toBe(false);
+
+    const selected = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) throw new Error(selected.message);
+    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
+
+    const started = await governedExecuteStart({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      attemptId: selected.attemptId,
+      forceLocalAuthority: true,
+    });
+    expect(started.ok).toBe(true);
+    if (!started.ok) throw new Error(started.message);
+
+    const settled = await settleDeterministicProductCursorSuccess({
+      oa,
+      attemptId: started.attemptId,
+    });
+    expect(settled.ok).toBe(true);
+    if (!settled.ok) throw new Error(settled.message);
+    expect(settled.attempt.status).toBe("succeeded");
+
+    const decisionsAfter =
+      await oa.decisionServices.decisions.listByProject(projectId);
+    expect(decisionsAfter.length).toBe(decisionsBefore.length);
+    void cycleInstanceId;
+  });
+
+  it("CAS B — same pathless mission without CycleInstance; no artificial cycle", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "b",
+      withCycle: false,
+    });
+    const cyclesBefore = (await oa.cycleServices.cycles.listByProject(projectId))
+      .length;
+    expect(cyclesBefore).toBe(0);
+
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Calculer le chemin critique A–H",
+        expectedOutcome: "18 jours ; A→C→D→E→G→H",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.projectContextOnly).toBe(true);
+    expect(prep.cycleInstanceId).toBeNull();
+    const loaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
+    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
+      0,
+    );
+  });
+
+  it("CAS C — active framing cycle retained; no parasitic NEW_CYCLE prepare diversion", async () => {
+    const { projectId, cycleInstanceId, oa } = await seedProject({
+      suffix: "c",
+      withCycle: true,
+      framingCycle: true,
+    });
+    expect(cycleInstanceId).toBeTruthy();
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId,
+      mission: {
+        objective: "Calculer le chemin critique A–H dans le cycle de cadrage",
+        expectedOutcome: "18 jours ; A→C→D→E→G→H",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.cycleInstanceId).toBe(cycleInstanceId);
+    const loaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(loaded.contract.cycleInstanceId).toBe(cycleInstanceId);
+    // Cycle still active — not replaced.
+    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) throw new Error("lps");
+    expect(lps.livingProjectState.activeCycleInstanceId).toBe(cycleInstanceId);
+  });
+
+  it("CAS D — git read of existing path keeps repositoryBinding / pathRoot", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "d",
+      withCycle: false,
+    });
+    const prep = await prepareGenericExecutionContractDraft({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      analysis: buildIntentAnalysisFromSolicitedMission({
+        objective: "Analyser projects/demo/src/schedule.ts",
+        expectedOutcome: "Résumé des dépendances du fichier",
+        scope: "projects/demo/src/schedule.ts",
+        repositoryMutation: "read",
+      }),
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    // With concrete path, path-bound materiality applies (may need scopeIn on analysis).
+    const analysisWithPath = {
+      ...buildIntentAnalysisFromSolicitedMission({
+        objective: "Analyser projects/demo/src/schedule.ts",
+        expectedOutcome: "Résumé des dépendances du fichier",
+        scope: "projects/demo/src/schedule.ts",
+        repositoryMutation: "read",
+      }),
+      executionIntent: {
+        intentKind: "read_only" as const,
+        scopeIn: ["projects/demo/src/schedule.ts"],
+        scopeOut: [],
+        expectedOutputs: ["Résumé des dépendances du fichier"],
+        requiredCapabilities: [],
+      },
+    };
+    const prep2 = await prepareGenericExecutionContractDraft({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      analysis: analysisWithPath,
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep2.ok).toBe(true);
+    if (!prep2.ok) throw new Error(prep2.message);
+    expect(prep2.materiality.materiality).toBe("non_structural");
+    const inputs = prep2.contract.inputs as Record<string, unknown>;
+    expect(inputs.pathRoot).toBe("projects/demo");
+    expect(inputs.scopeIn).toEqual(["projects/demo/src/schedule.ts"]);
+    void prep;
+  });
+
+  it("CAS E — ordinary write prepare names files/effects; no Attempt before authorize", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "e",
+      withCycle: false,
+    });
+    const analysis = {
+      ...buildIntentAnalysisFromSolicitedMission({
+        objective: "Corriger le tri dans projects/demo/src/sort.ts",
+        expectedOutcome: "Tests verts sur le tri",
+        scope: "projects/demo/src/sort.ts",
+        repositoryMutation: "write",
+      }),
+      executionIntent: {
+        intentKind: "other" as const,
+        scopeIn: ["projects/demo/src/sort.ts"],
+        scopeOut: [],
+        expectedOutputs: ["projects/demo/src/sort.ts"],
+        requiredCapabilities: [],
+      },
+    };
+    const prep = await prepareGenericExecutionContractDraft({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      analysis,
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.executionAttemptCreated).toBe(false);
+    expect(await countAttempts(oa, projectId)).toBe(0);
+    const inputs = prep.contract.inputs as Record<string, unknown>;
+    expect(inputs.scopeIn).toEqual(["projects/demo/src/sort.ts"]);
+  });
+
+  it("CAS F — protected / structural remains blocking via Nora tool path", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "f",
+      withCycle: false,
+    });
+    // Prefer a known Product-protected path; fall back to structural signals alone.
+    const candidates = [
+      ".env",
+      "secrets/token",
+      "projects/sfia-studio/sfia-v3-framing/30-overview.md",
+      "projects/demo/.git/config",
+    ];
+    const protectedPath =
+      candidates.find((p) => Boolean(classifyStudioProductProtectedPath(p))) ??
+      null;
+
+    const prep = await prepareGenericExecutionContractDraft({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      analysis: {
+        ...buildIntentAnalysisFromSolicitedMission({
+          objective: "Modifier une zone structurelle / protégée",
+          expectedOutcome: "Changement structurel appliqué",
+          scope: protectedPath ?? "architecture runtime v3",
+        }),
+        signals: {
+          structuralChange: true,
+          securityImpact: true,
+          architectureImpact: true,
+          dataImpact: false,
+          irreversible: false,
+          lowRiskBounded: false,
+        },
+        executionIntent: {
+          intentKind: "other",
+          scopeIn: protectedPath ? [protectedPath] : [],
+          scopeOut: [],
+          expectedOutputs: [],
+          requiredCapabilities: ["cap:elevated.admin"],
+        },
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(false);
+    if (prep.ok) throw new Error("expected block");
+    expect(
+      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
+        prep.code === "MATERIALITY_UNKNOWN" ||
+        prep.code === "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
+    ).toBe(true);
+  });
+
+  it("CAS G — stale version after inspect refuses authorize", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "g",
+      withCycle: false,
+    });
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Analyse chemin critique",
+        expectedOutcome: "18j",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error(inspected.message);
+
+    const stale = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: inspected.contractVersion + 1,
+      expectedSemanticFingerprint: inspected.semanticFingerprint,
+      forceLocalAuthority: true,
+    });
+    expect(stale.ok).toBe(false);
+    if (stale.ok) throw new Error("expected stale");
+    expect(stale.code).toBe("VERSION_MISMATCH");
+  });
+
+  it("CAS H — concurrent second Select does not duplicate Attempt when first accepted", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "h",
+      withCycle: false,
+    });
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Analyse chemin critique",
+        expectedOutcome: "18j",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+    });
+    if (!inspected.ok) throw new Error(inspected.message);
+    const authorized = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: inspected.contractVersion,
+      expectedSemanticFingerprint: inspected.semanticFingerprint,
+      forceLocalAuthority: true,
+    });
+    if (!authorized.ok) throw new Error(authorized.message);
+
+    const s1 = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(s1.ok).toBe(true);
+    if (!s1.ok) throw new Error(s1.message);
+    const s2 = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    // Second select must not invent a second concurrent Attempt identity —
+    // either reuse / terminal / fail-closed; never silent duplicate launch.
+    expect(s2.ok).toBe(true);
+    if (!s2.ok) throw new Error(s2.message);
+    expect(s2.attemptId).toBe(s1.attemptId);
+    expect(await countAttempts(oa, projectId)).toBe(1);
+  });
+
+  it("CAS I — reload durable contract; no invented authorization; reinspect required after clear attestation path", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "i",
+      withCycle: false,
+    });
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Analyse chemin critique",
+        expectedOutcome: "18j",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+
+    // Reload without inspect → authorize refused.
+    const blocked = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: 1,
+      expectedSemanticFingerprint: "not-inspected",
+      forceLocalAuthority: true,
+    });
+    expect(blocked.ok).toBe(false);
+    if (blocked.ok) throw new Error("expected block");
+    expect(
+      blocked.code === "INSPECTION_REQUIRED" ||
+        blocked.code === "VERSION_MISMATCH" ||
+        blocked.code === "FINGERPRINT_MISMATCH" ||
+        blocked.code === "INSPECTION_INSUFFICIENT",
+    ).toBe(true);
+  });
+
+  it("CAS J — after deterministic succeed, Attempt succeeded and EC reloadable", async () => {
+    const { projectId, oa } = await seedProject({
+      suffix: "j",
+      withCycle: false,
+    });
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Analyse chemin critique",
+        expectedOutcome: "18j",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+    });
+    if (!inspected.ok) throw new Error(inspected.message);
+    const authorized = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: inspected.contractVersion,
+      expectedSemanticFingerprint: inspected.semanticFingerprint,
+      forceLocalAuthority: true,
+    });
+    if (!authorized.ok) throw new Error(authorized.message);
+    const selected = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    if (!selected.ok) throw new Error(selected.message);
+    const started = await governedExecuteStart({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      attemptId: selected.attemptId,
+      forceLocalAuthority: true,
+    });
+    if (!started.ok) throw new Error(started.message);
+    const settled = await settleDeterministicProductCursorSuccess({
+      oa,
+      attemptId: started.attemptId,
+    });
+    expect(settled.ok).toBe(true);
+    if (!settled.ok) throw new Error(settled.message);
+    expect(settled.attempt.status).toBe("succeeded");
+
+    const reloaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(reloaded.ok).toBe(true);
+    if (!reloaded.ok) throw new Error("reload");
+    expect(reloaded.contract.executionContractId).toBe(prep.executionContractId);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
new file mode 100644
index 00000000..7f0f616d
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
@@ -0,0 +1,527 @@
+/**
+ * TOOL-FIRST SAFETY CLOSURE R1/R2
+ *
+ * R1 — positive non-mutating claim required for pathless NON_STRUCTURAL.
+ * R2 — Cursor REAL generalist has no no-write sandbox → fail-closed before Select.
+ *
+ * Fake DET (CURSOR_REAL≠1) remains admissible for pathless non-mutating.
+ * ZERO Cursor REAL effects in this suite.
+ *
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  buildIntentAnalysisFromSolicitedMission,
+  prepareGenericExecutionContractDraft,
+  solicitGenericExecutionPrepare,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
+import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
+import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  governedExecuteSelectAgent,
+  governedExecuteStart,
+} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import {
+  assertBoundedNonMutatingCursorRealAdmissible,
+  BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
+  isBoundedPathlessNonMutatingContract,
+} from "@/features/project-assistant/w2/boundedNonMutatingRealLaunchGate";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+} from "@/lib/oa/decision";
+import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
+import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
+} from "./w2Harness";
+import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
+import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+
+function restoreEnvVar(name: string, previous: string | undefined): void {
+  if (previous === undefined) delete process.env[name];
+  else process.env[name] = previous;
+}
+
+const PLANNING_SCOPE =
+  "A 2j; B 4j après A; C 3j après A; D 5j après C; E 4j après B et D; F 2j après C; G 3j après E et F; H 1j après G";
+
+describe("P6 tool-first safety closure R1/R2", () => {
+  let runtime: RuntimeApplicationService;
+  let previousMorris: string | undefined;
+  let previousDetPin: string | undefined;
+  let previousCursorReal: string | undefined;
+
+  beforeEach(() => {
+    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
+    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
+    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
+    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
+    resetPendingGenericPrepareOfferStoreForTests();
+    runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("p6-tf-r1r2.sqlite"),
+      idPrefix: "r12",
+    });
+  });
+
+  afterEach(() => {
+    resetPendingGenericPrepareOfferStoreForTests();
+    cleanupW2TempDirs();
+    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
+    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
+    restoreEnvVar("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
+  });
+
+  async function seedProject(suffix: string) {
+    const oa = runtime.oa!;
+    const created = await runtime.createProject({
+      name: `R12 ${suffix}`,
+      objective: "Safety closure R1/R2",
+      context: "det r1r2",
+      criticality: "STANDARD",
+      constraints: ["ZERO REAL"],
+      shortReference: `R1${suffix.toUpperCase().slice(0, 6)}`,
+      idempotencyKey: `idem:r12-${suffix}`,
+    });
+    if (!created.ok) throw new Error("createProject");
+    const projectId = created.project.projectId;
+    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    if (!lps0.ok) throw new Error("lps0");
+    await oa.cycleServices.createInitialTrajectory.execute({
+      trajectoryId: `trj:${projectId}`,
+      projectId,
+      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
+      status: "active",
+      expectedLpsVersion: lps0.livingProjectState.version,
+      createdBy: {
+        actorId: "actor:morris",
+        role: "project_owner",
+        displayName: "Morris",
+        authorityLevel: "N3",
+      },
+    });
+    const identity = `acme/r12-${suffix}`;
+    await oa.projectServices.setProjectRepositoryBinding!.execute({
+      projectId,
+      actor: LOCAL_PILOTE_ACTOR,
+      binding: {
+        provider: "github",
+        identity,
+        remoteUrl: `https://github.com/${identity}.git`,
+        defaultBranch: "main",
+        pathRoot: "projects/demo",
+      },
+    });
+    ensureManagedRepoCloneSkeleton({
+      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
+      identity,
+    });
+    return { projectId, oa };
+  }
+
+  async function countAttempts(
+    oa: NonNullable<RuntimeApplicationService["oa"]>,
+    projectId: string,
+  ): Promise<number> {
+    const contracts =
+      await oa.executionContractServices.contracts.listByProject(projectId);
+    let total = 0;
+    for (const c of contracts) {
+      total += (
+        await oa.executionAttemptServices!.attempts.listByContract(
+          c.executionContractId,
+        )
+      ).length;
+    }
+    return total;
+  }
+
+  // ---------------------------------------------------------------------------
+  // R1
+  // ---------------------------------------------------------------------------
+
+  it("R1+ — explicit none → PREPARE NON_STRUCTURAL, no HD, no Attempt, no fake path", async () => {
+    const { projectId, oa } = await seedProject("r1p");
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Calculer le chemin critique A–H",
+        expectedOutcome: "18 jours ; A→C→D→E→G→H",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    expect(prep.materiality).toBe("non_structural");
+    expect(prep.humanDecisionCreated).toBe(false);
+    expect(prep.executionAttemptCreated).toBe(false);
+    expect(await countAttempts(oa, projectId)).toBe(0);
+    const loaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
+    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
+    const inputs = loaded.contract.inputs as Record<string, unknown>;
+    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
+    expect(inputs.targetPath ?? null).toBeNull();
+    expect(inputs.scopeIn).toEqual([]);
+  });
+
+  it("R1− — repositoryMutation absent → MATERIALITY_UNKNOWN (no silent NON_STRUCTURAL)", async () => {
+    const { projectId, oa } = await seedProject("r1a");
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Calculer le chemin critique A–H",
+        expectedOutcome: "18 jours",
+        scope: PLANNING_SCOPE,
+        // no repositoryMutation
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(false);
+    if (prep.ok) throw new Error("expected block");
+    expect(prep.code).toBe("MATERIALITY_UNKNOWN");
+    expect(await countAttempts(oa, projectId)).toBe(0);
+  });
+
+  it("R1− — unknown / write / docs_write / elevated / structural blocked", async () => {
+    const { projectId, oa } = await seedProject("r1n");
+
+    const unk = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Analyse",
+        expectedOutcome: "Résultat",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "unknown",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(unk.ok).toBe(false);
+    if (!unk.ok) expect(unk.code).toBe("MATERIALITY_UNKNOWN");
+
+    const write = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Modifier le dépôt",
+        expectedOutcome: "Fichiers changés",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "write",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(write.ok).toBe(false);
+
+    const elevated = await prepareGenericExecutionContractDraft({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      analysis: {
+        ...buildIntentAnalysisFromSolicitedMission({
+          objective: "Opération admin",
+          expectedOutcome: "Done",
+          scope: PLANNING_SCOPE,
+          repositoryMutation: "none",
+        }),
+        executionIntent: {
+          intentKind: "read_only",
+          scopeIn: [],
+          scopeOut: [],
+          expectedOutputs: [],
+          requiredCapabilities: ["cap:elevated.admin"],
+        },
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(elevated.ok).toBe(false);
+    if (!elevated.ok) {
+      expect(elevated.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
+    }
+
+    const structural = await prepareGenericExecutionContractDraft({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      analysis: buildIntentAnalysisFromSolicitedMission({
+        objective: "Changement structurel",
+        expectedOutcome: "Architecture modifiée",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+        impactSignals: { structuralChange: true, architectureImpact: true },
+      }),
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(structural.ok).toBe(false);
+    if (!structural.ok) {
+      expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
+    }
+
+    // Nora model claim alone (read_only without Product-verified coherence) —
+    // docs_write intent contradicts non-mutating.
+    const disguised = qualifyBoundedNonMutatingAnalysisMission({
+      analysis: {
+        ...buildIntentAnalysisFromSolicitedMission({
+          objective: "Rédiger un livrable",
+          expectedOutcome: "note.md",
+          scope: "document",
+          repositoryMutation: "none",
+        }),
+        executionIntent: {
+          intentKind: "docs_write",
+          scopeIn: [],
+          scopeOut: [],
+          expectedOutputs: ["note.md"],
+          requiredCapabilities: [],
+        },
+      },
+      liveOk: true,
+      concretePaths: [],
+      protectedPathHits: [],
+      positiveStructuralSignal: false,
+      requestedCapabilities: [],
+      isDocumentaryWriteMission: false,
+    });
+    expect(disguised.ok).toBe(false);
+    expect(disguised.basis).toBe("intent_kind_docs_write");
+  });
+
+  // ---------------------------------------------------------------------------
+  // R2
+  // ---------------------------------------------------------------------------
+
+  it("R2 — Fake DET pathless non-mutating still Select/Start admissible", async () => {
+    const { projectId, oa } = await seedProject("r2f");
+    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Calculer le chemin critique",
+        expectedOutcome: "18j",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+    const loaded = await oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: prep.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(isBoundedPathlessNonMutatingContract(loaded.contract)).toBe(true);
+    expect(assertBoundedNonMutatingCursorRealAdmissible(loaded.contract).ok).toBe(
+      true,
+    );
+
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+    });
+    if (!inspected.ok) throw new Error(inspected.message);
+    const authorized = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: inspected.contractVersion,
+      expectedSemanticFingerprint: inspected.semanticFingerprint,
+      forceLocalAuthority: true,
+    });
+    if (!authorized.ok) throw new Error(authorized.message);
+    const selected = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selected.ok).toBe(true);
+  });
+
+  it("R2 — REAL armed → Select refused BEFORE Attempt; Start refuses on valid Attempt with exact R2 code; ordinary write unaffected", async () => {
+    const { projectId, oa } = await seedProject("r2r");
+
+    // ZERO REAL harness guarantee: TestOnly launch port never spawns Cursor.
+    const launchPort = oa.executionAttemptServices?.realBoundary?.launchPort;
+    expect(launchPort).toBeInstanceOf(TestOnlyRealExecutionLaunchPort);
+    const testOnlyPort = launchPort as TestOnlyRealExecutionLaunchPort;
+    const launchCountAtEntry = testOnlyPort.launchCallCount;
+
+    const prep = await solicitGenericExecutionPrepare({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      mission: {
+        objective: "Calculer le chemin critique",
+        expectedOutcome: "18j",
+        scope: PLANNING_SCOPE,
+        repositoryMutation: "none",
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prep.ok).toBe(true);
+    if (!prep.ok) throw new Error(prep.message);
+
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+    });
+    if (!inspected.ok) throw new Error(inspected.message);
+    const authorized = await authorizeGenericPreparedContract({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      expectedVersion: inspected.contractVersion,
+      expectedSemanticFingerprint: inspected.semanticFingerprint,
+      forceLocalAuthority: true,
+    });
+    if (!authorized.ok) throw new Error(authorized.message);
+
+    // --- Select under REAL: refuse BEFORE any Attempt (existing assertion).
+    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
+    const beforeSelectBlock = await countAttempts(oa, projectId);
+    const selectedBlocked = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selectedBlocked.ok).toBe(false);
+    if (selectedBlocked.ok) throw new Error("expected REAL Select block");
+    expect(selectedBlocked.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);
+    expect(await countAttempts(oa, projectId)).toBe(beforeSelectBlock);
+    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);
+
+    // --- Select under Fake/DET: create a real accepted Attempt (no external launch).
+    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
+    const selected = await governedExecuteSelectAgent({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) throw new Error(selected.message);
+    expect(typeof selected.attemptId).toBe("string");
+    expect(selected.attemptId.length).toBeGreaterThan(0);
+    expect(selected.attemptId).not.toBe("xat:none");
+    expect(selected.attemptStatus).toBe("accepted");
+    expect(selected.realExecution).toBe(false);
+    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);
+
+    const attemptId = selected.attemptId;
+    const loadedAttempt =
+      await oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId,
+      });
+    expect(loadedAttempt.ok).toBe(true);
+    if (!loadedAttempt.ok) {
+      throw new Error(
+        `getExecutionAttempt failed: ${JSON.stringify(loadedAttempt.error)}`,
+      );
+    }
+    expect(loadedAttempt.attempt.status).toBe("accepted");
+    expect(loadedAttempt.attempt.executionContractId).toBe(
+      prep.executionContractId,
+    );
+
+    const attemptsAfterSelect = await countAttempts(oa, projectId);
+    expect(attemptsAfterSelect).toBe(beforeSelectBlock + 1);
+
+    // --- Arm REAL, Start with the valid AttemptId: gate R2 exact code only.
+    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
+    const launchBeforeStart = testOnlyPort.launchCallCount;
+    const started = await governedExecuteStart({
+      oa,
+      projectId,
+      executionContractId: prep.executionContractId,
+      attemptId,
+      forceLocalAuthority: true,
+    });
+    expect(started.ok).toBe(false);
+    if (started.ok) throw new Error("expected REAL Start block");
+    expect(started.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);
+
+    // Attempt unchanged — not running; no extra Attempt; no launch ACK.
+    const afterStart =
+      await oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId,
+      });
+    expect(afterStart.ok).toBe(true);
+    if (!afterStart.ok) {
+      throw new Error(
+        `getExecutionAttempt after Start failed: ${JSON.stringify(afterStart.error)}`,
+      );
+    }
+    expect(afterStart.attempt.status).toBe("accepted");
+    expect(afterStart.attempt.status).not.toBe("running");
+    expect(await countAttempts(oa, projectId)).toBe(attemptsAfterSelect);
+    expect(testOnlyPort.launchCallCount).toBe(launchBeforeStart);
+    expect(testOnlyPort.calls.length).toBe(0);
+
+    // Ordinary write mission with concrete paths is NOT blocked by this gate.
+    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
+    const writePrep = await prepareGenericExecutionContractDraft({
+      oa,
+      projectId,
+      cycleInstanceId: null,
+      analysis: {
+        ...buildIntentAnalysisFromSolicitedMission({
+          objective: "Corriger projects/demo/src/sort.ts",
+          expectedOutcome: "Tests verts",
+          scope: "projects/demo/src/sort.ts",
+          repositoryMutation: "write",
+        }),
+        executionIntent: {
+          intentKind: "other",
+          scopeIn: ["projects/demo/src/sort.ts"],
+          scopeOut: [],
+          expectedOutputs: ["projects/demo/src/sort.ts"],
+          requiredCapabilities: [],
+        },
+      },
+      forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(writePrep.ok).toBe(true);
+    if (!writePrep.ok) throw new Error(writePrep.message);
+    expect(isBoundedPathlessNonMutatingContract(writePrep.contract)).toBe(false);
+    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
+    expect(
+      assertBoundedNonMutatingCursorRealAdmissible(writePrep.contract).ok,
+    ).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
index 63695e06..34ef0684 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
@@ -521,13 +521,6 @@ export function ExecutionSurface({
         );
         return;
       }
-      if (active.contract.status === "confirmation_required") {
-        setError(
-          "Confirmation encore requise — Exécuter refuse d’agir.",
-        );
-        return;
-      }
-
       // Execute never records inspection as a side effect.
       if (!active.inspection.inspectionSufficient) {
         setError(
@@ -536,12 +529,43 @@ export function ExecutionSurface({
         return;
       }

+      // Tool-first / CR-P6-02 — one Pilot "Exécuter" gesture: Confirm (when
+      // required) then Authorize with exact binding to the inspected attestation.
+      // Inspect ≠ Confirm ≠ Authorize ≠ Execute remain distinct server acts.
+      let expectedVersion =
+        active.inspection.attestedVersion ?? active.contract.version;
+      let expectedSemanticFingerprint =
+        active.inspection.attestedSemanticFingerprint ||
+        active.inspection.semanticFingerprint ||
+        active.contract.semanticFingerprint ||
+        undefined;
+
+      if (active.contract.status === "confirmation_required") {
+        const confirmed = await w2ConfirmExecutionContractAction({
+          projectId,
+          executionContractId: active.contract.executionContractId,
+        });
+        if (!confirmed.ok) {
+          setError(confirmed.message);
+          await refreshExecutionContinuity();
+          return;
+        }
+        // Prefer attested binding; fall back to Confirm version bump when present.
+        expectedVersion =
+          active.inspection.attestedVersion ??
+          confirmed.contractVersion ??
+          expectedVersion;
+        expectedSemanticFingerprint =
+          active.inspection.attestedSemanticFingerprint ||
+          active.inspection.semanticFingerprint ||
+          expectedSemanticFingerprint;
+      }
+
       const auth = await w2AuthorizeExecutionContractAction({
         projectId,
         executionContractId: active.contract.executionContractId,
-        expectedVersion: active.contract.version,
-        expectedSemanticFingerprint:
-          active.contract.semanticFingerprint || undefined,
+        expectedVersion,
+        expectedSemanticFingerprint,
       });
       if (!auth.ok) {
         setError(auth.message);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
index 2723e203..efc39460 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
@@ -652,13 +652,15 @@ export function presentPilotExecution(
       attentionNote =
         "Version ou empreinte modifiée — réexamen requis avant confirmation.";
     } else if (needsConfirm) {
+      // Tool-first ordinary path — one Pilot "Exécuter" gesture folds Confirm
+      // after inspection attestation (Trajectory CR-P6-02 pattern). Inspect ≠ Execute.
       cta = {
-        kind: "confirm",
-        label: "Confirmer",
+        kind: "execute",
+        label: "Exécuter",
         enabled: durableActionable && !busy,
       };
       attentionNote =
-        "Aucun effet ne sera produit tant que la confirmation n’est pas donnée.";
+        "Après inspection, Exécuter porte la confirmation de la version affichée puis l’autorisation — aucun effet avant ce clic.";
     } else if (!inspectionSufficient || !inspectionAlignedWithContract) {
       cta = {
         kind: "inspect",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index a36e9bb0..68703ff4 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -551,6 +551,7 @@ export async function orchestrateProjectAssistantTurn(input: {
               expectedOutcome: args.expectedOutcome,
               scope: args.scope,
               contextNotes: args.contextNotes,
+              repositoryMutation: args.repositoryMutation,
               impactSignals: args.impactSignals,
             },
             sessionDbPath: input.sessionDbPath,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts b/projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts
new file mode 100644
index 00000000..f0394556
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts
@@ -0,0 +1,71 @@
+/**
+ * R2 — Tool-first safety closure: pathless non-mutating missions vs Cursor REAL.
+ *
+ * Product may stamp NO_REPOSITORY_MUTATION_* on a bounded analysis EC.
+ * Cursor REAL generalist currently launches with `--sandbox disabled --force`
+ * (full write capability) — a contract string / prompt is NOT enforcement.
+ *
+ * M4 bounded read-only (`cap:cursor.read_only`) exists but is a distinct
+ * agent/action/target/scope — reusing it for Product generalist would be a
+ * new architecture (Morris GO required). Until then: fail-closed at Product
+ * Select/Start when REAL is armed for these contracts.
+ *
+ * Fake/DET (SFIA_STUDIO_CURSOR_REAL ≠ "1") remains admissible.
+ */
+
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+
+export const BOUNDED_NON_MUTATING_REAL_BLOCK_CODE =
+  "BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE" as const;
+
+export function isBoundedPathlessNonMutatingContract(
+  contract: ExecutionContract,
+): boolean {
+  const constraints = contract.constraints ?? [];
+  const stops = contract.stopConditions ?? [];
+  const inputs =
+    contract.inputs && typeof contract.inputs === "object"
+      ? (contract.inputs as Record<string, unknown>)
+      : null;
+  const stamped =
+    inputs?.boundedNonMutatingAnalysis === true ||
+    constraints.includes("MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED") ||
+    stops.includes("NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS");
+  if (!stamped) return false;
+  const scopeIn = Array.isArray(inputs?.scopeIn) ? inputs!.scopeIn : [];
+  const concrete = scopeIn.filter(
+    (p) => typeof p === "string" && p.trim().length > 0 && !p.includes(" "),
+  );
+  return concrete.length === 0;
+}
+
+/**
+ * When REAL Cursor is armed, pathless non-mutating ECs cannot launch —
+ * no technical no-write enforcement exists on the generalist REAL boundary.
+ */
+export function assertBoundedNonMutatingCursorRealAdmissible(
+  contract: ExecutionContract,
+):
+  | { readonly ok: true }
+  | {
+      readonly ok: false;
+      readonly code: typeof BOUNDED_NON_MUTATING_REAL_BLOCK_CODE;
+      readonly message: string;
+    } {
+  if (!isBoundedPathlessNonMutatingContract(contract)) {
+    return { ok: true };
+  }
+  if (process.env.SFIA_STUDIO_CURSOR_REAL !== "1") {
+    return { ok: true };
+  }
+  return {
+    ok: false,
+    code: BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
+    message:
+      "Mission pathless non mutative : la frontière Cursor REAL généraliste " +
+      "n'applique pas de sandbox no-write technique (--sandbox disabled). " +
+      "Lancement REAL refusé avant Select/Start — aucun effet. " +
+      "Fake/DET reste admissible ; enforcement REAL requiert un GO Morris " +
+      "(capacité read-only enforceable ou sandbox).",
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index f832fbb7..c6bbdfcb 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -64,6 +64,7 @@ import { advanceProductExecutionContractAfterEvidence } from "./advanceProductEx
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { evaluateProductRealReadiness } from "./evaluateProductRealReadiness";
 import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
+import { assertBoundedNonMutatingCursorRealAdmissible } from "./boundedNonMutatingRealLaunchGate";
 import type {
   GovernedExecuteAuthorizedContractResult,
   GovernedExecuteAttemptProjection,
@@ -775,6 +776,18 @@ export async function governedExecuteSelectAgent(
   const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

+  // R2 — pathless non-mutating + REAL armed → refuse BEFORE Attempt/Select.
+  const realNonMutatingGate = assertBoundedNonMutatingCursorRealAdmissible(
+    contract,
+  );
+  if (!realNonMutatingGate.ok) {
+    return {
+      ok: false,
+      code: realNonMutatingGate.code,
+      message: realNonMutatingGate.message,
+    };
+  }
+
   const adapterId = adapterIdForContract(contract);
   const launchCountBefore = launchCountBeforeFor(input.oa, contract);

@@ -967,6 +980,18 @@ export async function governedExecuteStart(
   const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;

+  // R2 — defense in depth: refuse Start before any REAL effect.
+  const realNonMutatingGate = assertBoundedNonMutatingCursorRealAdmissible(
+    contract,
+  );
+  if (!realNonMutatingGate.ok) {
+    return {
+      ok: false,
+      code: realNonMutatingGate.code,
+      message: realNonMutatingGate.message,
+    };
+  }
+
   const adapterId = adapterIdForContract(contract);
   const launchCountBefore = launchCountBeforeFor(input.oa, contract);

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 995d5120..7c157e92 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -647,6 +647,9 @@ export async function prepareGenericExecutionContractDraft(
     projectId: input.projectId,
     analysis,
     cycleInstanceId: input.cycleInstanceId,
+    isDocumentaryWriteMission:
+      documentaryBind.kind === "resolved" ||
+      productDocumentaryTargetResolution === "resolved_product",
   });
   const materiality = materialityResolution.assessment;
   const hdRequired =
@@ -766,13 +769,17 @@ export async function prepareGenericExecutionContractDraft(
       ? [resolvedAuthoritativeTargetPath]
       : [expectedOutcome];

-  // D — source grounding / trusted launch when mission implies repository work.
+  // D — source grounding / trusted launch when mission implies repository work
+  // OR bounded pathless analysis (Cursor still needs Project binding — ≠ inventing
+  // a documentary/Git mission target; scopeIn stays empty).
   const impliesGit = missionImpliesRepositoryWork(analysis);
+  const needsLaunchContext =
+    impliesGit || materialityResolution.facts.boundedNonMutatingAnalysis === true;
   let launchInputs: Record<string, unknown> = {};
   let sourcesToRead: string[] = [];
   let sourceGroundingPayload: unknown = null;

-  if (impliesGit) {
+  if (needsLaunchContext) {
     const launch = await resolveTrustedProductLaunchContext({
       oa: input.oa,
       projectId: input.projectId,
@@ -789,6 +796,12 @@ export async function prepareGenericExecutionContractDraft(
     launchInputs = {
       ...launchContextAsContractInputs(launch.context),
       trustedLaunchContextPinnedAtPrepare: true,
+      ...(materialityResolution.facts.boundedNonMutatingAnalysis
+        ? {
+            launchContextForBoundedAnalysisOnly: true,
+            missionScopeInEmptyByDesign: true,
+          }
+        : {}),
     };
     // Declared READ sources only — mutation scopeIn is NOT a read claim
     // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
@@ -863,6 +876,9 @@ export async function prepareGenericExecutionContractDraft(
     "CONTEXT_STALE",
     "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
     "PROTECTED_PATH_GATES_REMAIN_APPLICABLE",
+    ...(materialityResolution.facts.boundedNonMutatingAnalysis
+      ? ["NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS"]
+      : []),
   ];
   const stopSeen = new Set<string>();
   const mergedStops = stopConditions.filter((s) => {
@@ -878,6 +894,8 @@ export async function prepareGenericExecutionContractDraft(
     ? [...sealedHdEffects.reservations]
     : [...(analysis.reservations ?? [])];

+  const boundedNonMutating =
+    materialityResolution.facts.boundedNonMutatingAnalysis === true;
   const constraints = [
     "PRODUCT_GOVERNED",
     "NO_ATTEMPT_AT_PREPARE",
@@ -887,6 +905,12 @@ export async function prepareGenericExecutionContractDraft(
     "CURSOR_DETERMINES_HOW",
     "GENERIC_MISSION_NO_TASK_CATALOG",
     materiality.constraintToken,
+    ...(boundedNonMutating
+      ? [
+          "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
+          "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
+        ]
+      : []),
     ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
     ...sealedOrAnalysisRisks.map((s) => `RISK:${s}`),
     ...sealedOrAnalysisReservations.map((s) => `RESERVATION:${s}`),
@@ -959,8 +983,12 @@ export async function prepareGenericExecutionContractDraft(
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
+      boundedNonMutatingAnalysis: boundedNonMutating,
+      repositoryMutationDeclared: boundedNonMutating ? "none" : null,
       // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
-      intentKind: stampedIntentKind,
+      intentKind: boundedNonMutating
+        ? stampedIntentKind ?? "read_only"
+        : stampedIntentKind,
       artifactType: stampedArtifactType,
       requestedOperation: stampedRequestedOperation,
       reversibilityExpectation: stampedRevExpectation,
@@ -1229,6 +1257,11 @@ export type SolicitGenericPrepareMissionFields = {
   readonly expectedOutcome?: string | null;
   readonly scope?: string | null;
   readonly contextNotes?: string | null;
+  /**
+   * Optional repository-mutation claim. Product verifies; "write" without paths
+   * stays fail-closed. "none"|"read" strengthens pathless non-mutating admission.
+   */
+  readonly repositoryMutation?: "none" | "read" | "write" | "unknown" | null;
   /** Conservative-only: a true flag can only make Product MORE cautious. */
   readonly impactSignals?: {
     readonly structuralChange?: boolean;
@@ -1258,7 +1291,8 @@ export function buildIntentAnalysisFromSolicitedMission(
     sig?.dataImpact === true ||
     sig?.irreversible === true;
   const notes = fields.contextNotes?.trim() || null;
-  return {
+  const mutation = fields.repositoryMutation ?? null;
+  const base: IntentAnalysisDto = {
     parseOk: true,
     intentClass: "execution_request",
     candidateCycleTypeId: null,
@@ -1284,8 +1318,29 @@ export function buildIntentAnalysisFromSolicitedMission(
     expectedOutcome,
     criticalJustification: null,
     requestedOperation: null,
-    executionIntent: null,
+    executionIntent:
+      mutation === "none" || mutation === "read"
+        ? ({
+            intentKind: "read_only",
+            scopeIn: [],
+            scopeOut: [],
+            expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+            requiredCapabilities: [],
+          } as IntentAnalysisDto["executionIntent"])
+        : null,
   };
+  if (
+    mutation === "none" ||
+    mutation === "read" ||
+    mutation === "write" ||
+    mutation === "unknown"
+  ) {
+    return {
+      ...base,
+      repositoryMutationDeclared: mutation,
+    } as IntentAnalysisDto;
+  }
+  return base;
 }

 export type SolicitGenericExecutionPrepareInput = {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index 985ae3dd..cc28654c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -45,6 +45,8 @@ export type AuthoritativeMaterialityResolution = {
     readonly authorityEnvelopeBasis: string;
     readonly concreteMissionPaths: readonly string[];
     readonly pathsOutsidePathRoot: readonly string[];
+    readonly boundedNonMutatingAnalysis: boolean;
+    readonly boundedNonMutatingAnalysisBasis: string | null;
   };
   readonly productContextSufficient: boolean;
   readonly liveReadOk: boolean;
@@ -109,16 +111,133 @@ export function pathsOutsideAuthorizedPathRoot(input: {
   });
 }

+/**
+ * Product-owned bounded non-mutating analysis (tool-first ordinary mission).
+ *
+ * R1 safety closure — positive Product facts only:
+ * never keyword absence alone, never “pathless ⇒ safe”, never
+ * `repositoryMutation` absent/unknown as sufficient authority.
+ *
+ * Requires ALL of:
+ * - live Product context;
+ * - empty concrete WHERE (no invented documentary/Git target);
+ * - no structural / write / materialization contradiction;
+ * - generalist envelope only;
+ * - AND an explicit structured non-mutating claim:
+ *   `executionIntent.intentKind === "read_only"`
+ *   OR `repositoryMutationDeclared` ∈ {none, read}.
+ */
+export function qualifyBoundedNonMutatingAnalysisMission(input: {
+  readonly analysis: IntentAnalysisDto;
+  readonly liveOk: boolean;
+  readonly concretePaths: readonly string[];
+  readonly protectedPathHits: readonly string[];
+  readonly positiveStructuralSignal: boolean;
+  readonly requestedCapabilities: readonly string[];
+  readonly isDocumentaryWriteMission: boolean;
+}): { readonly ok: boolean; readonly basis: string } {
+  if (!input.liveOk) {
+    return { ok: false, basis: "live_lps_unavailable" };
+  }
+  if (input.concretePaths.length > 0) {
+    return { ok: false, basis: "concrete_paths_present_use_path_materiality" };
+  }
+  if (input.protectedPathHits.length > 0) {
+    return { ok: false, basis: "protected_path_hits" };
+  }
+  if (input.positiveStructuralSignal) {
+    return { ok: false, basis: "positive_structural_signal" };
+  }
+  if (input.isDocumentaryWriteMission) {
+    return { ok: false, basis: "documentary_write_mission" };
+  }
+  const ei = input.analysis.executionIntent;
+  const intentKind = ei?.intentKind?.trim() || null;
+  if (intentKind === "docs_write") {
+    return { ok: false, basis: "intent_kind_docs_write" };
+  }
+  const elevated = input.requestedCapabilities.filter(
+    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
+  );
+  if (elevated.length > 0) {
+    return { ok: false, basis: "elevated_capabilities" };
+  }
+  if (
+    input.requestedCapabilities.some(
+      (c) => c.trim() === "cap:cursor.docs_write",
+    )
+  ) {
+    return { ok: false, basis: "docs_write_capability_proposed" };
+  }
+  const materialization = (
+    input.analysis as { artifactMaterializationOperation?: string | null }
+  ).artifactMaterializationOperation;
+  if (
+    typeof materialization === "string" &&
+    materialization.trim().length > 0
+  ) {
+    return { ok: false, basis: "artifact_materialization_operation" };
+  }
+  if (ei?.targetPath?.trim() || ei?.artifactFileName?.trim()) {
+    return { ok: false, basis: "write_target_candidate_present" };
+  }
+  if (ei?.artifactWriteMode === "CREATE" || ei?.artifactWriteMode === "UPDATE") {
+    return { ok: false, basis: "artifact_write_mode" };
+  }
+  const objective = (
+    input.analysis.objective ??
+    input.analysis.rephrasedRequest ??
+    ""
+  ).trim();
+  const expectedOutcome = (input.analysis.expectedOutcome ?? "").trim();
+  const scopeNarrative = (input.analysis.scope ?? "").trim();
+  if (!objective || (!expectedOutcome && !scopeNarrative)) {
+    return { ok: false, basis: "mission_data_insufficient" };
+  }
+
+  // Positive structured non-mutating claim (Product-owned — not lexical).
+  const declaredMutation = (
+    input.analysis as {
+      repositoryMutationDeclared?: "none" | "read" | "write" | "unknown" | null;
+    }
+  ).repositoryMutationDeclared;
+  const readOnlyIntent = intentKind === "read_only";
+  const explicitNone =
+    declaredMutation === "none" || declaredMutation === "read";
+  if (declaredMutation === "write") {
+    return { ok: false, basis: "repository_mutation_declared_write" };
+  }
+  if (declaredMutation === "unknown") {
+    return { ok: false, basis: "repository_mutation_unknown" };
+  }
+  // R1 — absence is NOT a positive claim (fail-closed → UNKNOWN upstream).
+  if (declaredMutation == null && !readOnlyIntent) {
+    return { ok: false, basis: "repository_mutation_claim_absent" };
+  }
+  if (readOnlyIntent || explicitNone) {
+    return {
+      ok: true,
+      basis: readOnlyIntent
+        ? "read_only_intent_pathless_verified"
+        : "declared_non_mutating_pathless_verified",
+    };
+  }
+  return { ok: false, basis: "non_mutating_claim_absent" };
+}
+
 /**
  * Structural mutation: Product-path evidence only.
  * Protected path in scope → structural (distinct from Morris gate at launch).
- * Without concrete non-protected paths → cannot claim non-structural (UNKNOWN upstream).
+ * Pathless missions may qualify as bounded non-mutating analysis (tool-first).
+ * Otherwise without concrete non-protected paths → cannot claim non-structural.
  */
 function deriveStructuralProjectMutation(input: {
   readonly protectedPathHits: readonly string[];
   readonly concretePaths: readonly string[];
   readonly liveOk: boolean;
   readonly positiveStructuralSignal: boolean;
+  readonly boundedNonMutatingAnalysis: boolean;
+  readonly boundedNonMutatingBasis: string;
 }): { readonly value: boolean; readonly basis: string } {
   if (!input.liveOk) {
     return { value: true, basis: "live_lps_unavailable_fail_closed" };
@@ -130,6 +249,12 @@ function deriveStructuralProjectMutation(input: {
     return { value: true, basis: "positive_structural_model_signal" };
   }
   if (input.concretePaths.length === 0) {
+    if (input.boundedNonMutatingAnalysis) {
+      return {
+        value: false,
+        basis: `bounded_non_mutating_analysis:${input.boundedNonMutatingBasis}`,
+      };
+    }
     // Cannot prove non-mutation without concrete WHERE — escalate via insufficient context.
     return { value: true, basis: "no_concrete_mission_paths_fail_closed" };
   }
@@ -219,6 +344,11 @@ export async function resolveAuthoritativeProductMateriality(input: {
   readonly projectId: string;
   readonly analysis: IntentAnalysisDto;
   readonly cycleInstanceId?: string | null;
+  /**
+   * When true, documentary write bind already claimed this mission —
+   * never qualify as pathless analysis (avoids circular import).
+   */
+  readonly isDocumentaryWriteMission?: boolean;
 }): Promise<AuthoritativeMaterialityResolution> {
   const live = await readLiveProjectContext(input.oa, input.projectId);
   const liveOk = live.ok;
@@ -257,11 +387,23 @@ export async function resolveAuthoritativeProductMateriality(input: {
       input.analysis.signals?.irreversible,
   );

+  const bounded = qualifyBoundedNonMutatingAnalysisMission({
+    analysis: input.analysis,
+    liveOk,
+    concretePaths,
+    protectedPathHits,
+    positiveStructuralSignal,
+    requestedCapabilities,
+    isDocumentaryWriteMission: input.isDocumentaryWriteMission === true,
+  });
+
   const structural = deriveStructuralProjectMutation({
     protectedPathHits,
     concretePaths,
     liveOk,
     positiveStructuralSignal,
+    boundedNonMutatingAnalysis: bounded.ok,
+    boundedNonMutatingBasis: bounded.basis,
   });
   const cycle = deriveCycleOrTrajectoryMutation({
     liveActiveCycleId: liveOk ? live.context.activeCycleInstanceId : null,
@@ -289,15 +431,22 @@ export async function resolveAuthoritativeProductMateriality(input: {
       }
     : null;

-  // Sufficient for NON_STRUCTURAL only when live Product + concrete WHERE
-  // + non-mutation bases are derived from Product facts (not keyword absence).
+  const cycleAnchored =
+    cycle.basis === "active_cycle_anchored_matches_requested" ||
+    cycle.basis === "project_context_no_active_cycle_none_mutated";
+  const authorityOk =
+    authority.basis === "paths_within_path_root_and_generalist_capability_only";
+
+  // Sufficient for NON_STRUCTURAL when live Product + (concrete WHERE OR
+  // bounded pathless non-mutating analysis) + non-mutation bases from Product facts.
   const productContextSufficient =
     liveOk &&
-    concretePaths.length > 0 &&
-    structural.basis === "live_lps_ok_concrete_non_protected_paths_only" &&
-    (cycle.basis === "active_cycle_anchored_matches_requested" ||
-      cycle.basis === "project_context_no_active_cycle_none_mutated") &&
-    authority.basis === "paths_within_path_root_and_generalist_capability_only";
+    cycleAnchored &&
+    authorityOk &&
+    ((concretePaths.length > 0 &&
+      structural.basis === "live_lps_ok_concrete_non_protected_paths_only") ||
+      (bounded.ok &&
+        structural.basis.startsWith("bounded_non_mutating_analysis:")));

   const facts: AuthoritativeMaterialityResolution["facts"] = {
     modelSignals: input.analysis.signals
@@ -326,6 +475,8 @@ export async function resolveAuthoritativeProductMateriality(input: {
     authorityEnvelopeBasis: authority.basis,
     concreteMissionPaths: concretePaths,
     pathsOutsidePathRoot: outsideRoot,
+    boundedNonMutatingAnalysis: bounded.ok,
+    boundedNonMutatingAnalysisBasis: bounded.ok ? bounded.basis : null,
   };

   const assessment = assessExecutionMaterialityOrUnknown({
@@ -350,6 +501,11 @@ export function assertAuthorizedMissionScopeEnforceable(input: {
   readonly scopeIn: readonly string[];
   readonly pathRoot: string | null;
   readonly allowProtectedWithExplicitGate?: boolean;
+  /**
+   * Tool-first pathless analysis — empty WHERE is admissible only when Product
+   * stamped bounded non-mutating analysis (no invented documentary/Git target).
+   */
+  readonly allowEmptyScopeForBoundedNonMutatingAnalysis?: boolean;
 }):
   | { readonly ok: true }
   | { readonly ok: false; readonly code: string; readonly message: string } {
@@ -357,6 +513,9 @@ export function assertAuthorizedMissionScopeEnforceable(input: {
     .map((p) => p.trim())
     .filter((p) => p.length > 0 && !p.includes(" "));
   if (paths.length === 0) {
+    if (input.allowEmptyScopeForBoundedNonMutatingAnalysis === true) {
+      return { ok: true };
+    }
     return {
       ok: false,
       code: "MISSION_SCOPE_EMPTY",
@@ -529,9 +688,16 @@ export async function revalidateMaterialityAgainstCurrentProduct(input: {
   }

   // WHERE enforcement at authorize time (CR-P6-03).
+  // Pathless bounded non-mutating analysis may have empty concreteMissionPaths.
+  const allowEmptyScope =
+    current.facts.boundedNonMutatingAnalysis === true &&
+    current.facts.structuralTruthBasis.startsWith(
+      "bounded_non_mutating_analysis:",
+    );
   const scopeCheck = assertAuthorizedMissionScopeEnforceable({
     scopeIn: current.facts.concreteMissionPaths,
     pathRoot: current.facts.productCurrentness?.pathRoot ?? null,
+    allowEmptyScopeForBoundedNonMutatingAnalysis: allowEmptyScope,
   });
   if (!scopeCheck.ok) {
     return {
@@ -568,9 +734,19 @@ export function analysisStubFromMaterialityFacts(
   const protectedHits = Array.isArray(facts?.protectedPathHits)
     ? (facts!.protectedPathHits as string[])
     : [];
-  return {
+  const bounded =
+    facts?.boundedNonMutatingAnalysis === true ||
+    (typeof facts?.structuralTruthBasis === "string" &&
+      facts.structuralTruthBasis.startsWith("bounded_non_mutating_analysis:"));
+  const intentKind =
+    bounded && scopeIn.length === 0
+      ? "read_only"
+      : scopeIn.length > 0
+        ? "other"
+        : "other";
+  const stub = {
     parseOk: true,
-    intentClass: "actionable",
+    intentClass: "actionable" as const,
     candidateCycleTypeId: null,
     signals: {
       structuralChange: modelSignals?.structuralChange === true,
@@ -588,7 +764,7 @@ export function analysisStubFromMaterialityFacts(
             claimedEvidenceIds: [],
           }
         : null,
-    challengeResponseAssessment: "sufficient",
+    challengeResponseAssessment: "sufficient" as const,
     objective:
       typeof contractInputs?.objective === "string"
         ? contractInputs.objective
@@ -615,11 +791,18 @@ export function analysisStubFromMaterialityFacts(
     criticalJustification: null,
     requestedOperation: null,
     executionIntent: {
-      intentKind: "other",
+      intentKind,
       scopeIn: scopeIn.length > 0 ? scopeIn : protectedHits,
       scopeOut: [],
     } as IntentAnalysisDto["executionIntent"],
   };
+  if (bounded && scopeIn.length === 0) {
+    return {
+      ...stub,
+      repositoryMutationDeclared: "none" as const,
+    } as IntentAnalysisDto;
+  }
+  return stub;
 }

 export function parseStampedProductCurrentness(
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
index 945607b6..e867cdfb 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
@@ -40,6 +40,8 @@ export type SolicitGenericPrepareToolArgs = {
   readonly expectedOutcome?: string;
   readonly scope?: string;
   readonly contextNotes?: string;
+  /** Optional mutation claim — Product verifies (none|read strengthens pathless). */
+  readonly repositoryMutation?: "none" | "read" | "write" | "unknown";
   /** Conservative-only impact flags — can only make Product more cautious. */
   readonly impactSignals?: {
     readonly structuralChange?: boolean;
@@ -216,6 +218,13 @@ export function createProductExecutionAgentsTools(
           type: "string",
           description: "Optional short notes (constraints, risks, reservations).",
         },
+        repositoryMutation: {
+          type: "string",
+          enum: ["none", "read", "write", "unknown"],
+          description:
+            "Optional: declare whether the mission mutates the repository. " +
+            "Use none/read for analysis/compute without file writes. Product verifies; write without paths stays blocked.",
+        },
         impactSignals: {
           type: "object",
           additionalProperties: false,
@@ -250,11 +259,20 @@ export function createProductExecutionAgentsTools(
           ? (args as Record<string, unknown>)
           : {};
       try {
+        const mutationRaw = str(o.repositoryMutation);
+        const repositoryMutation =
+          mutationRaw === "none" ||
+          mutationRaw === "read" ||
+          mutationRaw === "write" ||
+          mutationRaw === "unknown"
+            ? mutationRaw
+            : undefined;
         const result = await solicit({
           objective: str(o.objective),
           expectedOutcome: str(o.expectedOutcome),
           scope: str(o.scope),
           contextNotes: str(o.contextNotes),
+          repositoryMutation,
           impactSignals: parseImpactSignals(o.impactSignals),
         });
         const base =
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index eeca2b2e..3ad774ce 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -123,6 +123,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 - **Persistence:** `oa_execution_contracts`.
 - **Paths:** `lib/oa/execution-contract/**`
 - **Gate:** no EC before required Proposal HD (product path).
+- **Tool-First pathless stamp (local candidate — PENDING_GIT_INTEGRATION):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`).

 ## OBJ-INSPECTION — InspectionAttestation

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 13e01c2e..df47640f 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -30,6 +30,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Trigger:** Pilot message via product conversation
 - **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
 - **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake).
+- **Tool-First mission fields (local candidate — PENDING_GIT_INTEGRATION):** tool / orchestration may forward structured `repositoryMutation` (`none`/`read`/`write`/`unknown`) into Product mission admission. Nora proposal alone is **not** sufficient authority for NON_STRUCTURAL pathless qualification (see F08 R1). Paths: `productExecutionAgentsTools.ts`, `orchestrateTurn.ts`.
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
 - **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
 - **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
@@ -85,29 +86,36 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
   - **Refuse** → durable refused HD recordable → PREPARE **forbidden** (`HD_REFUSED`); no implicit Authorization; no Attempt.
   - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
   - Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock. Only an **accepted**, mission-bound, applicable, verified, non-superseded HD opens structural PREPARE.
-- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
+- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
+  - **Pathless bounded non-mutating analysis (local candidate — PENDING_GIT_INTEGRATION):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
+  - Contract may stamp `boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` — stamp ≠ REAL no-write enforcement (see F10 R2).
 - **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
 - **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
 - **Paths:** `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
 - **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
-- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
-- **Status:** COMPLETE domain (legacy); Generic PREPARE AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
+- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 / `p6.toolFirst.executionContractSimplification` / `p6.toolFirst.safetyClosureR1R2` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
+- **Status:** COMPLETE domain (legacy); Generic PREPARE + Tool-First R1 AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION

 ## F09 — EC inspect / Confirmation / authority
 - **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
 - **Unified inspection (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
 - **requiredInspectedFacts / disclosure:** canonical inspection disclosure on EC; Confirm ≠ Inspect ≠ Authorize ≠ Execute.
+- **Tool-First ordinary Pilot CTA (local candidate — PENDING_GIT_INTEGRATION):** after inspection attestation is sufficient/aligned, Pilot surface may show **Exécuter** while status remains `confirmation_required` / À confirmer — the single Pilot gesture folds server Confirm (when required) then Authorize+Select/Start. **Inspect ≠ Execute** preserved (no auto-attest; no silent Confirm). Server steps Confirm / Authorize / Execute remain distinct. Paths: `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`.
 - **Product path (legacy):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
-- **Proof:** Pass03/Pass04 UIC suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
-- **Status:** COMPLETE tables/services; unified exam AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
+- **Proof:** Pass03/Pass04 UIC + durable/reconcile continuity + pilotExecutionPresentation / R02 — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
+- **Status:** COMPLETE tables/services; unified exam + Tool-First CTA AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION

 ## F10 — Governed execution (docs_write / Cursor)
 - **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
 - **Project-scoped Cursor Select/Start (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse.
+- **R2 — pathless non-mutating vs Cursor REAL (local candidate — PENDING_GIT_INTEGRATION):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
+  - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
+  - **Start (`governedExecuteStart`):** if an Attempt is already `accepted` (e.g. Fake Select earlier), re-evaluate and refuse Start — Attempt stays `accepted` (not `running`); launch-port calls unchanged; no REAL process.
+  Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
 - **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
 - **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
-- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
-- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; no new REAL claim
+- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` + `p6.toolFirst.safetyClosureR1R2.d0.test.ts` (Select refuse + Start on valid Attempt with exact R2 code; TestOnly launch port) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
+- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; pathless non-mutating REAL fail-closed Product-side; no new REAL claim

 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index fdcedba7..98090dde 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -61,16 +61,27 @@ Nora tool (F04) / F2 analysis / F05 adjacent hand-off
       │              → HD_AMEND_REQUIRES_NEW_PRESENTATION
       │              → re-present / re-seal required
       │              → PREPARE forbidden until new accepted applicable HD
-      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4)
+      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4 + Tool-First R1 local candidate)
+           → pathless: positive non-mutating claim required
+                (`read_only` OR repositoryMutationDeclared ∈ {none,read})
+                + complementary Product gates; declaration alone ≠ authority
            → solicitGenericExecutionPrepare (decisionRefs=[])
-           → F09 inspect → Confirm → Authorize → F10 Execute
+           → F09 inspect → Confirm → Authorize
+           → F10 Select → Start → Execute (Fake/DET)
+                └─ if REAL armed + pathless non-mutating (Tool-First R2):
+                     Select: refuse before new Attempt
+                     Start: refuse launch; Attempt stays accepted; no launch-port call
+                     code BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE
       UNKNOWN materiality / structural without accepted+verified HD → FAIL-CLOSED
+      pathless without positive claim (absent mutation AND not read_only) → FAIL-CLOSED
 ```

 OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.

 **Structural PREPARE gate (S1):** only an **accepted**, mission-bound, applicable, verified, non-superseded HumanDecision opens Chemin A PREPARE. Refuse and Amend are **not** admissible prepare paths. Accept alone is not Execute authority.

+**Tool-First R1/R2 (local candidate — PENDING_GIT_INTEGRATION):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine.
+
 ## DEP edges (stable IDs)

 | ID | From | To | Why |
@@ -80,14 +91,14 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda
 | DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
 | DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
 | DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
-| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | launch |
+| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating |
 | DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
 | DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
 | DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
 | DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |
 | DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt |
 | DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE |
-| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs |
+| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate |

 ## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index a24f06bd..af05ac4f 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -38,6 +38,7 @@
 - **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
 - **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
 - **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.
+- **Tool-First R2 (local candidate — PENDING_GIT_INTEGRATION):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Env flag alone does not prove REAL BOUNDARY. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic path for those missions.

 ## Server vs client

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index bee84335..7f684d28 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -33,6 +33,10 @@
 | INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
 | INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
 | INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |
+| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 |
+| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 |
+| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 |
+| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 |

 ## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

@@ -42,9 +46,16 @@
 - **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
 No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

-**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.
+**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates (live context, envelope, no write/docs_write/structural/elevated contradiction). Declaration alone ≠ Product authority. No invented file path; no systematic HD.

-**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.
+**Tool-First ordinary CTA:** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.
+
+**R2 REAL pathless (Select ≠ Start effects):** when REAL is armed for a pathless non-mutating EC:
+- **Select:** gate fires **before** creating a new ExecutionAttempt — no Select-accepted Attempt; no Cursor REAL call.
+- **Start:** if an Attempt already exists in `accepted` (e.g. created under Fake/DET), gate re-evaluates and **refuses Start** — Attempt remains `accepted` (not `running`); launch-port call count unchanged; no Cursor REAL effect.
+Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write / concrete-path contracts are not blocked by this gate.
+
+**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.

 **CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

@@ -58,6 +69,9 @@ No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD
 | `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
 | `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent / explicit new-cycle formalization | historical new-cycle path — **not** aliased from optional documentary `no_require_artifact` | may createCycle on other path | intent-gated |
 | `CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE` | Generic PREPARE | unknown / privileged / spoofed capability identity | prepare refused | none | yes — exact identity match only |
+| `MATERIALITY_UNKNOWN` (pathless without positive claim) | Materiality / Tool-First R1 | No positive claim: (`repositoryMutation` absent **and** not `read_only`) **or** `unknown`/`write` **or** other Product contradictions | PREPARE refused — no silent NON_STRUCTURAL | none | yes |
+| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Select) | F10 R2 | pathless non-mutating EC + REAL=1 at Select | **No new Attempt**; Select refused; no REAL launch | none | yes — Fake/DET still OK |
+| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Start) | F10 R2 | same EC + REAL=1 at Start with prior `accepted` Attempt | Start refused; Attempt stays `accepted`; no launch-port call | none | yes — Fake/DET still OK |
 | `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
 | `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
 | `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | docs_write | missing managed root | cannot REAL write | none | yes |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 03626bcd..51f98389 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -17,7 +17,10 @@
 | F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
 | F04 Nora Generic PREPARE tool (D-ER-16) | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC — solicit PREPARE only; structural fail-closed; no Attempt; PENDING_GIT_INTEGRATION |
 | F08 Generic PREPARE / M-HD / Option1 | `p6.mHd01*`, `p6.mHd02*`, `p6.hqa.materialityBlock01*`, `p6.o1.continuityGd4EmptyRefs*` | DETERMINISTIC — structural HD-bound vs NON_STRUCTURAL empty refs; PENDING_GIT_INTEGRATION |
+| F08 Tool-First pathless NON_STRUCTURAL (A–J) | `p6.toolFirst.executionContractSimplification.d0.test.ts` | DETERMINISTIC — pathless PREPARE→inspect→authorize→Select/Start Fake; no HD/cycle/artifact invent; PENDING_GIT_INTEGRATION |
+| F08/F10 Tool-First R1/R2 safety | `p6.toolFirst.safetyClosureR1R2.d0.test.ts` | DETERMINISTIC — R1 positive claim; R2 Select+Start exact code on valid Attempt; TestOnly port ZERO REAL; PENDING_GIT_INTEGRATION |
 | F09 unified inspection | `p6.uic.unifiedInspectionContract*`, `p6.r03.inspection*` | DETERMINISTIC — explicit exam/attest; identity binding; PENDING_GIT_INTEGRATION |
+| F09 Tool-First Exécuter folds Confirm | `p5.s03.durableExecutionActionContinuity*`, `p5.s03.pilotExecutionPresentation*`, `p6.r02.actionAvailability*` | DETERMINISTIC — Inspect≠Execute; CTA execute after attest; PENDING_GIT_INTEGRATION |
 | F10 project-scoped Cursor | `p6.projectScopedCursorSelection.d0.test.ts` | DETERMINISTIC Fake Select→Start→Result; null-cycle admitted only if OA allows; ZERO Cursor REAL |

 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index d9f19039..eb600e9c 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -171,6 +171,28 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
 | New store/table / parallel engines | NONE |

+## Overlay — Tool-First Generic Execution + R1/R2 (local candidate — PENDING_GIT_INTEGRATION)
+
+| Item | Status |
+|---|---|
+| Pathless analysis PREPARE without invented file path | AS-IMPLEMENTED_IN_CANDIDATE — positive non-mutating claim required (R1) |
+| Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
+| Positive claim forms (R1) | `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` — either form may qualify **iff** complementary Product gates pass |
+| `repositoryMutation` absent **with** admissible `read_only` | **NOT** an automatic refuse of the positive-claim step — `read_only` alone can satisfy that step |
+| `repositoryMutation` absent **without** `read_only` | **FORBIDDEN** as pathless NON_STRUCTURAL — fail-closed (`repository_mutation_claim_absent` / Materiality UNKNOWN) |
+| `repositoryMutation` unknown / write → pathless NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
+| Nora `repositoryMutation` / `read_only` alone as Product authority | **INSUFFICIENT** — live context, envelope, contradiction checks still apply |
+| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
+| Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
+| Cursor REAL generalist technical no-write | **ABSENT** — debt open |
+| R2 Select (REAL + pathless non-mutating) | AS-IMPLEMENTED_IN_CANDIDATE — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
+| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | AS-IMPLEMENTED_IN_CANDIDATE — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
+| Fake/DET pathless non-mutating Select/Start | ADMISSIBLE — DETERMINISTIC at tested scope |
+| Integration on main / GitHub CI / HQA / P6 GLOBAL PASS | **NOT CLAIMED** — PENDING_GIT_INTEGRATION |
+| REAL BOUNDARY PROVEN / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
+| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | OPEN — sandbox or Product-bound RO agent requires distinct Morris architecture GO |
+| Exit for debt | Enforceable no-write at REAL generalist (or equivalent) + GO + Bounded REAL proof |
+
 ## Overlay — P6-HQA-F05-GD4-01 / PR #586 (optional Artifact / Generic PREPARE)

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 25549243..37471f61 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -13,6 +13,7 @@
 **RCD-01 documentary reliability overlay (INTEGRATED ON MAIN):** P6-MIN-09 / **PR #578 MERGED** @ merge `440066485eaae458ccca188b2c91f8f47bd4987f` (source `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`; mergedAt 2026-10-13T07:18:56Z) — honest Git read coverage; secret-safe redaction progression; final model-visible JSON envelope truth; bounded oversized-line skip (`lineExceedsCap`); honest budget-exhausted restitution. Post-merge CI: [run 38361885447](https://github.com/mcleland147/sfia-workspace/actions/runs/38361885447) SUCCESS (Required Gate PASS). Proof: **DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE** (R1–R7). **GDR REAL PASS / P6 GLOBAL PASS / Product READY: NOT CLAIMED**. Runtime v3 **NON ADOPTED**. FinOps ceilings unchanged (adaptive maxTurns ≤ 10; `CT_MAX_TOOL_RESULT_CHARS` = 12000). Volumes 02 / 03 / 04 / 06 / 08 / 09 + README + digests. Debt `RCD-01-PRR-SEMANTIC-COHERENCE`: documentary correction prepared locally — **integration of this PRR sync still PENDING**.
 **PR #585 cumulative CI correction overlay (scoped, Delivery):** baseline reviewed `e7774a0c71e3b052f091ed2dffdd70651916dd2d` · 2026-10-15 (Europe/Paris) — CI-HQA-F01 NEW_CYCLE vs Artifact natural-signal boundary + digest sync for tracked F2/P6 sources; volumes 03 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 admission only. **Not** a full Living Reference re-audit. P6 GLOBAL PASS / REAL / runtime v3 **NOT CLAIMED**.
 **PR #586 optional Artifact / Generic PREPARE overlay (scoped, Delivery):** Product baseline reviewed `9b9cd5e5052da5781678a23a86c82b8b3283627e` · 2026-10-15 (Europe/Paris) — P6-HQA-F05-GD4-01: ordinary documentary request without closure `REQUIRE_ARTIFACT` may route to Generic PREPARE on the same active cycle (`no_require_artifact` ≠ NEW_CYCLE_FORMALIZATION; ≠ invented HD); exact capability identities; Nora path candidates non-authoritative at PREPARE. Volumes 02 / 03 / 04 / 06 / 07 / 08 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 routing + Fake fixture cue. **Not** a full Living Reference re-audit. Pending offer process-local. OpenAI LIVE / e66 / Cursor REAL **NOT CLAIMED**. P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.
+**Tool-First Generic Execution + R1/R2 safety (local candidate — PENDING_GIT_INTEGRATION):** Product worktree `fix/sfia-studio-p6-tool-first-safety-r1r2` @ baseline `e03c7b9` — ordinary pathless analysis may PREPARE as NON_STRUCTURAL without invented file path / systematic HD / mandatory CycleInstance / mandatory Artifact when Product admits a **positive** non-mutating claim (`intentKind=read_only` **or** `repositoryMutationDeclared ∈ {none,read}`); `repositoryMutation` absent refuses only when `read_only` is also absent; unknown/write/contradictions remain fail-closed. Pilot UI **Exécuter** may fold server Confirm after inspection attestation (Inspect ≠ Execute). Cursor REAL generalist has no technical no-write; Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` — **Select** refuses before new Attempt; **Start** refuses launch while Attempt stays `accepted`. Fake/DET remains admissible. Volumes 02 / 03 / 04 / 05 / 07 / 08 / 09 (+ digests only after ChatGPT semantic content review). **BOUNDED SEMANTIC IMPACT**. **Not** integrated on main. REAL BOUNDARY / HQA / P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.

 ## What this corpus is

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index c302e3fb..25fc31fb 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "d6e17088b0cc5762"
+      "sha256_16": "409a4fe71bbb40df"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -15,19 +15,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "243b7c0e390eb19f"
+      "sha256_16": "a63310ed7b85cf1b"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "efdc700181d6a2cc"
+      "sha256_16": "733c07f253de5b65"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "0e1a3472427bdb90"
+      "sha256_16": "b8a66451083f90e3"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "101ec96a6908db71"
+      "sha256_16": "2f13a6917c240eb7"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
@@ -35,15 +35,15 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "8e81c1fd63d604b0"
+      "sha256_16": "dcf49d984f2668da"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "9ee8dde351556e12"
+      "sha256_16": "8237aa210ecfac30"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "e9868b78e0a79e7c"
+      "sha256_16": "252e18777ad9e04b"
     }
   ],
   "components": [
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "8150d48197019412"
+      "sha256_16": "4024ae1078c6f4da"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",

```

### Fichier créé — boundedNonMutatingRealLaunchGate.ts (complet)

```typescript
/**
 * R2 — Tool-first safety closure: pathless non-mutating missions vs Cursor REAL.
 *
 * Product may stamp NO_REPOSITORY_MUTATION_* on a bounded analysis EC.
 * Cursor REAL generalist currently launches with `--sandbox disabled --force`
 * (full write capability) — a contract string / prompt is NOT enforcement.
 *
 * M4 bounded read-only (`cap:cursor.read_only`) exists but is a distinct
 * agent/action/target/scope — reusing it for Product generalist would be a
 * new architecture (Morris GO required). Until then: fail-closed at Product
 * Select/Start when REAL is armed for these contracts.
 *
 * Fake/DET (SFIA_STUDIO_CURSOR_REAL ≠ "1") remains admissible.
 */

import type { ExecutionContract } from "@/lib/oa/execution-contract";

export const BOUNDED_NON_MUTATING_REAL_BLOCK_CODE =
  "BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE" as const;

export function isBoundedPathlessNonMutatingContract(
  contract: ExecutionContract,
): boolean {
  const constraints = contract.constraints ?? [];
  const stops = contract.stopConditions ?? [];
  const inputs =
    contract.inputs && typeof contract.inputs === "object"
      ? (contract.inputs as Record<string, unknown>)
      : null;
  const stamped =
    inputs?.boundedNonMutatingAnalysis === true ||
    constraints.includes("MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED") ||
    stops.includes("NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS");
  if (!stamped) return false;
  const scopeIn = Array.isArray(inputs?.scopeIn) ? inputs!.scopeIn : [];
  const concrete = scopeIn.filter(
    (p) => typeof p === "string" && p.trim().length > 0 && !p.includes(" "),
  );
  return concrete.length === 0;
}

/**
 * When REAL Cursor is armed, pathless non-mutating ECs cannot launch —
 * no technical no-write enforcement exists on the generalist REAL boundary.
 */
export function assertBoundedNonMutatingCursorRealAdmissible(
  contract: ExecutionContract,
):
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly code: typeof BOUNDED_NON_MUTATING_REAL_BLOCK_CODE;
      readonly message: string;
    } {
  if (!isBoundedPathlessNonMutatingContract(contract)) {
    return { ok: true };
  }
  if (process.env.SFIA_STUDIO_CURSOR_REAL !== "1") {
    return { ok: true };
  }
  return {
    ok: false,
    code: BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
    message:
      "Mission pathless non mutative : la frontière Cursor REAL généraliste " +
      "n'applique pas de sandbox no-write technique (--sandbox disabled). " +
      "Lancement REAL refusé avant Select/Start — aucun effet. " +
      "Fake/DET reste admissible ; enforcement REAL requiert un GO Morris " +
      "(capacité read-only enforceable ou sandbox).",
  };
}

```

### Fichier créé — p6.toolFirst.executionContractSimplification.d0.test.ts (complet)

```typescript
/**
 * STUDIO-P6-GENERIC-EXECUTION-TOOL-FIRST-SIMPLIFICATION-01
 *
 * Deterministic Product end-to-end (Fake Cursor / Fake provider boundaries):
 * Nora tool / solicit → Product PREPARE → OA EC → inspect → authorize →
 * Select/Start → Evidence continuity.
 *
 * Scenarios A–J. ZERO Cursor REAL. PREPARE ≠ AUTHORIZE ≠ EXECUTE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { settleDeterministicProductCursorSuccess } from "./w2Harness";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

/** Oracle — CPM earliest-finish critical path for planning A–H (CAS A). */
function criticalPathOracleAtoH(): {
  durationDays: number;
  path: readonly string[];
} {
  const tasks: Record<string, { d: number; preds: string[] }> = {
    A: { d: 2, preds: [] },
    B: { d: 4, preds: ["A"] },
    C: { d: 3, preds: ["A"] },
    D: { d: 5, preds: ["C"] },
    E: { d: 4, preds: ["B", "D"] },
    F: { d: 2, preds: ["C"] },
    G: { d: 3, preds: ["E", "F"] },
    H: { d: 1, preds: ["G"] },
  };
  const es: Record<string, number> = {};
  const ef: Record<string, number> = {};
  const order = ["A", "B", "C", "D", "E", "F", "G", "H"];
  for (const id of order) {
    const t = tasks[id]!;
    const start = t.preds.reduce((m, p) => Math.max(m, ef[p] ?? 0), 0);
    es[id] = start;
    ef[id] = start + t.d;
  }
  const durationDays = ef.H!;
  // Backward pass for critical path (float = 0).
  const lf: Record<string, number> = { H: durationDays };
  const ls: Record<string, number> = { H: durationDays - tasks.H!.d };
  for (const id of [...order].reverse()) {
    for (const p of tasks[id]!.preds) {
      const cand = ls[id]!;
      lf[p] = lf[p] == null ? cand : Math.min(lf[p]!, cand);
      ls[p] = lf[p]! - tasks[p]!.d;
    }
  }
  const critical = order.filter((id) => ls[id] === es[id]);
  return { durationDays, path: critical };
}

const PLANNING_SCOPE = [
  "A 2j sans dépendance",
  "B 4j après A",
  "C 3j après A",
  "D 5j après C",
  "E 4j après B et D",
  "F 2j après C",
  "G 3j après E et F",
  "H 1j après G",
].join("; ");

describe("P6 tool-first Generic Execution contract simplification A–J", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-tool-first.sqlite"),
      idPrefix: "tf01",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(input: {
    suffix: string;
    withCycle: boolean;
    framingCycle?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `TF ${input.suffix}`,
      objective: "Tool-first simplification",
      context: "det tool-first",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `TF${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:tf-${input.suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:tf-${input.suffix}`;
      await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: input.framingCycle ? "cyc:framing" : "cyc:delivery",
        projectId,
        signals: { lowRiskBounded: true },
        createdBy: {
          actorId: "actor:nora-f2",
          role: "agent",
          displayName: "Nora F2",
          authorityLevel: "N1",
        },
        linkAsActiveCycle: false,
      });
      const auth = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope: `pilot-lifecycle:${cycleInstanceId}`,
        issuedAt: "2026-10-17T10:00:00.000Z",
        forceEnable: true,
      });
      if (!auth.ok) throw new Error("auth");
      const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps1.ok) throw new Error("lps1");
      const started = await oa.cycleServices.pilotLifecycle.start({
        cycleInstanceId,
        projectId,
        createdBy: {
          actorId: LOCAL_PILOTE_ACTOR.actorId,
          role: LOCAL_PILOTE_ACTOR.role,
          displayName: LOCAL_PILOTE_ACTOR.displayName,
          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
        },
        authorityEvidenceId: auth.evidenceId,
        expectedLpsVersion: lps1.livingProjectState.version,
      });
      if (!started.ok) throw new Error("start");
    }

    const identity = `acme/tf-${input.suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts =
      await oa.executionContractServices.contracts.listByProject(projectId);
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  it("unit — pathless analysis qualifies only with positive non-mutating claim", () => {
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Calculer le chemin critique du planning A–H",
      expectedOutcome: "Durée minimale et chemin critique",
      scope: PLANNING_SCOPE,
      repositoryMutation: "none",
    });
    const ok = qualifyBoundedNonMutatingAnalysisMission({
      analysis,
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(ok.ok).toBe(true);

    // R1 — absence is NOT a positive claim.
    const absent = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Calculer le chemin critique",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(absent.ok).toBe(false);
    expect(absent.basis).toBe("repository_mutation_claim_absent");

    const unknown = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Calculer le chemin critique",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
        repositoryMutation: "unknown",
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(unknown.ok).toBe(false);
    expect(unknown.basis).toBe("repository_mutation_unknown");

    const write = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Écrire une note",
        expectedOutcome: "note.md",
        scope: "livrable documentaire",
        repositoryMutation: "write",
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: true,
    });
    expect(write.ok).toBe(false);
  });

  it("CAS A — pathless analysis PREPARE → inspect → authorize → Select/Start; oracle 18j", async () => {
    const oracle = criticalPathOracleAtoH();
    expect(oracle.durationDays).toBe(18);
    expect(oracle.path).toEqual(["A", "C", "D", "E", "G", "H"]);

    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "a",
      withCycle: false,
    });
    const decisionsBefore =
      await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective:
          "Calculer le chemin critique de ce planning A–H (analyse sans écriture fichier)",
        expectedOutcome: `Durée minimale ${oracle.durationDays} jours ; chemin critique ${oracle.path.join(" → ")}`,
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
        contextNotes: "Mission d'analyse conversationnelle — aucune mutation repo.",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality).toBe("non_structural");
    expect(await countAttempts(oa, projectId)).toBe(0);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    expect(loaded.contract.constraints).toContain(
      "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
    );
    expect(loaded.contract.constraints).toContain(
      "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
    );
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
    expect(inputs.resolvedAuthoritativeTargetPath ?? null).toBeNull();
    expect(inputs.targetPath ?? null).toBeNull();
    const scopeIn = Array.isArray(inputs.scopeIn) ? inputs.scopeIn : [];
    expect(scopeIn).toEqual([]);
    expect(await countAttempts(oa, projectId)).toBe(0);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: loaded.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const decisionsAfter =
      await oa.decisionServices.decisions.listByProject(projectId);
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    void cycleInstanceId;
  });

  it("CAS B — same pathless mission without CycleInstance; no artificial cycle", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "b",
      withCycle: false,
    });
    const cyclesBefore = (await oa.cycleServices.cycles.listByProject(projectId))
      .length;
    expect(cyclesBefore).toBe(0);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
  });

  it("CAS C — active framing cycle retained; no parasitic NEW_CYCLE prepare diversion", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "c",
      withCycle: true,
      framingCycle: true,
    });
    expect(cycleInstanceId).toBeTruthy();
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      mission: {
        objective: "Calculer le chemin critique A–H dans le cycle de cadrage",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.cycleInstanceId).toBe(cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId).toBe(cycleInstanceId);
    // Cycle still active — not replaced.
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("CAS D — git read of existing path keeps repositoryBinding / pathRoot", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "d",
      withCycle: false,
    });
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Analyser projects/demo/src/schedule.ts",
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: "projects/demo/src/schedule.ts",
        repositoryMutation: "read",
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // With concrete path, path-bound materiality applies (may need scopeIn on analysis).
    const analysisWithPath = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: "Analyser projects/demo/src/schedule.ts",
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: "projects/demo/src/schedule.ts",
        repositoryMutation: "read",
      }),
      executionIntent: {
        intentKind: "read_only" as const,
        scopeIn: ["projects/demo/src/schedule.ts"],
        scopeOut: [],
        expectedOutputs: ["Résumé des dépendances du fichier"],
        requiredCapabilities: [],
      },
    };
    const prep2 = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: analysisWithPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep2.ok).toBe(true);
    if (!prep2.ok) throw new Error(prep2.message);
    expect(prep2.materiality.materiality).toBe("non_structural");
    const inputs = prep2.contract.inputs as Record<string, unknown>;
    expect(inputs.pathRoot).toBe("projects/demo");
    expect(inputs.scopeIn).toEqual(["projects/demo/src/schedule.ts"]);
    void prep;
  });

  it("CAS E — ordinary write prepare names files/effects; no Attempt before authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "e",
      withCycle: false,
    });
    const analysis = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: "Corriger le tri dans projects/demo/src/sort.ts",
        expectedOutcome: "Tests verts sur le tri",
        scope: "projects/demo/src/sort.ts",
        repositoryMutation: "write",
      }),
      executionIntent: {
        intentKind: "other" as const,
        scopeIn: ["projects/demo/src/sort.ts"],
        scopeOut: [],
        expectedOutputs: ["projects/demo/src/sort.ts"],
        requiredCapabilities: [],
      },
    };
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
    const inputs = prep.contract.inputs as Record<string, unknown>;
    expect(inputs.scopeIn).toEqual(["projects/demo/src/sort.ts"]);
  });

  it("CAS F — protected / structural remains blocking via Nora tool path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "f",
      withCycle: false,
    });
    // Prefer a known Product-protected path; fall back to structural signals alone.
    const candidates = [
      ".env",
      "secrets/token",
      "projects/sfia-studio/sfia-v3-framing/30-overview.md",
      "projects/demo/.git/config",
    ];
    const protectedPath =
      candidates.find((p) => Boolean(classifyStudioProductProtectedPath(p))) ??
      null;

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Modifier une zone structurelle / protégée",
          expectedOutcome: "Changement structurel appliqué",
          scope: protectedPath ?? "architecture runtime v3",
        }),
        signals: {
          structuralChange: true,
          securityImpact: true,
          architectureImpact: true,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        executionIntent: {
          intentKind: "other",
          scopeIn: protectedPath ? [protectedPath] : [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: ["cap:elevated.admin"],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected block");
    expect(
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
        prep.code === "MATERIALITY_UNKNOWN" ||
        prep.code === "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
    ).toBe(true);
  });

  it("CAS G — stale version after inspect refuses authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "g",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const stale = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion + 1,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) throw new Error("expected stale");
    expect(stale.code).toBe("VERSION_MISMATCH");
  });

  it("CAS H — concurrent second Select does not duplicate Attempt when first accepted", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "h",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);

    const s1 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(s1.ok).toBe(true);
    if (!s1.ok) throw new Error(s1.message);
    const s2 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    // Second select must not invent a second concurrent Attempt identity —
    // either reuse / terminal / fail-closed; never silent duplicate launch.
    expect(s2.ok).toBe(true);
    if (!s2.ok) throw new Error(s2.message);
    expect(s2.attemptId).toBe(s1.attemptId);
    expect(await countAttempts(oa, projectId)).toBe(1);
  });

  it("CAS I — reload durable contract; no invented authorization; reinspect required after clear attestation path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "i",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    // Reload without inspect → authorize refused.
    const blocked = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: 1,
      expectedSemanticFingerprint: "not-inspected",
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected block");
    expect(
      blocked.code === "INSPECTION_REQUIRED" ||
        blocked.code === "VERSION_MISMATCH" ||
        blocked.code === "FINGERPRINT_MISMATCH" ||
        blocked.code === "INSPECTION_INSUFFICIENT",
    ).toBe(true);
  });

  it("CAS J — after deterministic succeed, Attempt succeeded and EC reloadable", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "j",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.message);
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.message);
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const reloaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) throw new Error("reload");
    expect(reloaded.contract.executionContractId).toBe(prep.executionContractId);
  });
});

```

### Fichier créé — p6.toolFirst.safetyClosureR1R2.d0.test.ts (complet)

```typescript
/**
 * TOOL-FIRST SAFETY CLOSURE R1/R2
 *
 * R1 — positive non-mutating claim required for pathless NON_STRUCTURAL.
 * R2 — Cursor REAL generalist has no no-write sandbox → fail-closed before Select.
 *
 * Fake DET (CURSOR_REAL≠1) remains admissible for pathless non-mutating.
 * ZERO Cursor REAL effects in this suite.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  assertBoundedNonMutatingCursorRealAdmissible,
  BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
  isBoundedPathlessNonMutatingContract,
} from "@/features/project-assistant/w2/boundedNonMutatingRealLaunchGate";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

const PLANNING_SCOPE =
  "A 2j; B 4j après A; C 3j après A; D 5j après C; E 4j après B et D; F 2j après C; G 3j après E et F; H 1j après G";

describe("P6 tool-first safety closure R1/R2", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousCursorReal: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-tf-r1r2.sqlite"),
      idPrefix: "r12",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `R12 ${suffix}`,
      objective: "Safety closure R1/R2",
      context: "det r1r2",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `R1${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:r12-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/r12-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts =
      await oa.executionContractServices.contracts.listByProject(projectId);
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  // ---------------------------------------------------------------------------
  // R1
  // ---------------------------------------------------------------------------

  it("R1+ — explicit none → PREPARE NON_STRUCTURAL, no HD, no Attempt, no fake path", async () => {
    const { projectId, oa } = await seedProject("r1p");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.materiality).toBe("non_structural");
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
    expect(inputs.targetPath ?? null).toBeNull();
    expect(inputs.scopeIn).toEqual([]);
  });

  it("R1− — repositoryMutation absent → MATERIALITY_UNKNOWN (no silent NON_STRUCTURAL)", async () => {
    const { projectId, oa } = await seedProject("r1a");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
        // no repositoryMutation
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected block");
    expect(prep.code).toBe("MATERIALITY_UNKNOWN");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("R1− — unknown / write / docs_write / elevated / structural blocked", async () => {
    const { projectId, oa } = await seedProject("r1n");

    const unk = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse",
        expectedOutcome: "Résultat",
        scope: PLANNING_SCOPE,
        repositoryMutation: "unknown",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(unk.ok).toBe(false);
    if (!unk.ok) expect(unk.code).toBe("MATERIALITY_UNKNOWN");

    const write = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Modifier le dépôt",
        expectedOutcome: "Fichiers changés",
        scope: PLANNING_SCOPE,
        repositoryMutation: "write",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(write.ok).toBe(false);

    const elevated = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Opération admin",
          expectedOutcome: "Done",
          scope: PLANNING_SCOPE,
          repositoryMutation: "none",
        }),
        executionIntent: {
          intentKind: "read_only",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: ["cap:elevated.admin"],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(elevated.ok).toBe(false);
    if (!elevated.ok) {
      expect(elevated.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
    }

    const structural = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Changement structurel",
        expectedOutcome: "Architecture modifiée",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
        impactSignals: { structuralChange: true, architectureImpact: true },
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(structural.ok).toBe(false);
    if (!structural.ok) {
      expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
    }

    // Nora model claim alone (read_only without Product-verified coherence) —
    // docs_write intent contradicts non-mutating.
    const disguised = qualifyBoundedNonMutatingAnalysisMission({
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Rédiger un livrable",
          expectedOutcome: "note.md",
          scope: "document",
          repositoryMutation: "none",
        }),
        executionIntent: {
          intentKind: "docs_write",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: ["note.md"],
          requiredCapabilities: [],
        },
      },
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(disguised.ok).toBe(false);
    expect(disguised.basis).toBe("intent_kind_docs_write");
  });

  // ---------------------------------------------------------------------------
  // R2
  // ---------------------------------------------------------------------------

  it("R2 — Fake DET pathless non-mutating still Select/Start admissible", async () => {
    const { projectId, oa } = await seedProject("r2f");
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(isBoundedPathlessNonMutatingContract(loaded.contract)).toBe(true);
    expect(assertBoundedNonMutatingCursorRealAdmissible(loaded.contract).ok).toBe(
      true,
    );

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
  });

  it("R2 — REAL armed → Select refused BEFORE Attempt; Start refuses on valid Attempt with exact R2 code; ordinary write unaffected", async () => {
    const { projectId, oa } = await seedProject("r2r");

    // ZERO REAL harness guarantee: TestOnly launch port never spawns Cursor.
    const launchPort = oa.executionAttemptServices?.realBoundary?.launchPort;
    expect(launchPort).toBeInstanceOf(TestOnlyRealExecutionLaunchPort);
    const testOnlyPort = launchPort as TestOnlyRealExecutionLaunchPort;
    const launchCountAtEntry = testOnlyPort.launchCallCount;

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);

    // --- Select under REAL: refuse BEFORE any Attempt (existing assertion).
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    const beforeSelectBlock = await countAttempts(oa, projectId);
    const selectedBlocked = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selectedBlocked.ok).toBe(false);
    if (selectedBlocked.ok) throw new Error("expected REAL Select block");
    expect(selectedBlocked.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);
    expect(await countAttempts(oa, projectId)).toBe(beforeSelectBlock);
    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);

    // --- Select under Fake/DET: create a real accepted Attempt (no external launch).
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(typeof selected.attemptId).toBe("string");
    expect(selected.attemptId.length).toBeGreaterThan(0);
    expect(selected.attemptId).not.toBe("xat:none");
    expect(selected.attemptStatus).toBe("accepted");
    expect(selected.realExecution).toBe(false);
    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);

    const attemptId = selected.attemptId;
    const loadedAttempt =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(loadedAttempt.ok).toBe(true);
    if (!loadedAttempt.ok) {
      throw new Error(
        `getExecutionAttempt failed: ${JSON.stringify(loadedAttempt.error)}`,
      );
    }
    expect(loadedAttempt.attempt.status).toBe("accepted");
    expect(loadedAttempt.attempt.executionContractId).toBe(
      prep.executionContractId,
    );

    const attemptsAfterSelect = await countAttempts(oa, projectId);
    expect(attemptsAfterSelect).toBe(beforeSelectBlock + 1);

    // --- Arm REAL, Start with the valid AttemptId: gate R2 exact code only.
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    const launchBeforeStart = testOnlyPort.launchCallCount;
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(false);
    if (started.ok) throw new Error("expected REAL Start block");
    expect(started.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);

    // Attempt unchanged — not running; no extra Attempt; no launch ACK.
    const afterStart =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(afterStart.ok).toBe(true);
    if (!afterStart.ok) {
      throw new Error(
        `getExecutionAttempt after Start failed: ${JSON.stringify(afterStart.error)}`,
      );
    }
    expect(afterStart.attempt.status).toBe("accepted");
    expect(afterStart.attempt.status).not.toBe("running");
    expect(await countAttempts(oa, projectId)).toBe(attemptsAfterSelect);
    expect(testOnlyPort.launchCallCount).toBe(launchBeforeStart);
    expect(testOnlyPort.calls.length).toBe(0);

    // Ordinary write mission with concrete paths is NOT blocked by this gate.
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const writePrep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Corriger projects/demo/src/sort.ts",
          expectedOutcome: "Tests verts",
          scope: "projects/demo/src/sort.ts",
          repositoryMutation: "write",
        }),
        executionIntent: {
          intentKind: "other",
          scopeIn: ["projects/demo/src/sort.ts"],
          scopeOut: [],
          expectedOutputs: ["projects/demo/src/sort.ts"],
          requiredCapabilities: [],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(writePrep.ok).toBe(true);
    if (!writePrep.ok) throw new Error(writePrep.message);
    expect(isBoundedPathlessNonMutatingContract(writePrep.contract)).toBe(false);
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    expect(
      assertBoundedNonMutatingCursorRealAdmissible(writePrep.contract).ok,
    ).toBe(true);
  });
});

```

## AE. Commit Product et SHA

```
commit c56cc48060383a12712a30b3120a4bb359217917
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Sun Oct 18 06:40:58 2026 +0200
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Sun Oct 18 06:40:58 2026 +0200

    feat(studio): integrate P6 Tool-First R1R2 and PRR sync

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
A	projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

SHA local: `c56cc48060383a12712a30b3120a4bb359217917`

## AF. Push Product et vérification distante

| Champ | Valeur |
|---|---|
| Destination | `origin/fix/sfia-studio-p6-tool-first-safety-r1r2` |
| Mode | premier push + upstream (`-u`) |
| SHA local | `c56cc48060383a12712a30b3120a4bb359217917` |
| SHA distant | `c56cc48060383a12712a30b3120a4bb359217917` |
| Match | OK |
| Tracking | `fix/sfia-studio-p6-tool-first-safety-r1r2...origin/fix/sfia-studio-p6-tool-first-safety-r1r2` |
| PR auto | aucune (`gh pr list --head` → []) |
| URL branche | https://github.com/mcleland147/sfia-workspace/tree/fix/sfia-studio-p6-tool-first-safety-r1r2 |

## AG. Réserves restantes

1. Dette TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT ouverte.
2. Aucune preuve Cursor REAL / HQA / P6 GLOBAL PASS.
3. PR non ouverte (gate Morris requis).
4. Runtime v3 NON ADOPTED.

## AH. Décisions Morris restantes

1. ChatGPT PR Readiness Review → READY / AMEND / STOP.
2. Si READY: **GO PR / DRAFT PR** Morris distinct.
3. Merge: GO distinct.
4. Cursor REAL / clôture dette no-write: GO distinct.
5. Human QA P6: suite séparée.

## AI. Git Review Index

| Path | Rôle |
|---|---|
| Commit `c56cc48060383a12712a30b3120a4bb359217917` | Lot Product 24 fichiers |
| Branche distante | fix/sfia-studio-p6-tool-first-safety-r1r2 |
| Handoff ACCEPT | `057daf71ef088a68241bfc87bd824d8b10db9df4` |
| `.tmp-sfia-review/chatgpt-review.md` | ce Review Pack (non commité Product) |

## AJ. Git Truth final

| Champ | Valeur |
|---|---|
| Branche | `fix/sfia-studio-p6-tool-first-safety-r1r2` |
| HEAD | `c56cc48060383a12712a30b3120a4bb359217917` |
| origin/main | `e03c7b9fd3665b89a4083a937b82424c5e7f6406` |
| upstream | match |
| Working tree | seul `.tmp-sfia-review/chatgpt-review.md` dirty |

```
 M .tmp-sfia-review/chatgpt-review.md
```

## AK. Verdict

**PRODUCT COMMITTED AND PUSHED — FULL LOCAL VALIDATION PASS — PRR CONFORMANCE PASS — READY FOR CHATGPT PR READINESS REVIEW.**

≠ PR CREATED ≠ MERGED ≠ REAL PROVEN ≠ P6 GLOBAL PASS.

## AL. Instruction ChatGPT obligatoire

Lire le dernier Review Handoff publié:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier: cohérence cycle; branche Product; HEAD/base; commit Product `c56cc48060383a12712a30b3120a4bb359217917`; SHA distant; 24 fichiers; correspondance candidat ACCEPT; refresh PRR; conformance PASS; validations complètes; absence scope creep; Fake/REAL; dette; contenu exploitable.

Réaliser:

**STUDIO P6 TOOL-FIRST — PRODUCT INTEGRATION / PR READINESS REVIEW.**

Qualifier si le lot peut être proposé à Morris pour ouverture de PR.
Ne constitue PAS un GO direct de création de PR ou de merge.
