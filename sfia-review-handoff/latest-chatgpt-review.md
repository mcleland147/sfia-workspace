# Review Handoff — Cycle 8 Delivery micro-correctif — UAT-UX-08 durable Fake/Real fail-closed — ZERO REAL

Timestamp (Europe/Paris): 2026-08-17 23:45:00 CEST (+0200)

Cycle: Cycle 8 — Delivery / implémentation — micro-correctif
Profil SFIA: Critical
Typologie: INC
Milestone: PRE-M6 — NON COMPLETE. Runtime v3 — NON ADOPTED. M6 — NOT AUTHORIZED.

## GO Morris consumed

GO MORRIS — MICRO-CORRECTIF DELIVERY UAT-UX-08 — DURABLE FAKE/REAL FAIL-CLOSED — ZERO REAL

## Verdict

PASS — UAT-UX-08 DURABLE FAKE/REAL FAIL-CLOSED — UNKNOWN DURABLE PROVENANCE RENDERS NEUTRAL — DET NEVER PROMOTED TO REAL AFTER REHYDRATE — SESSION REAL/DET/FIXTURE SEMANTICS PRESERVED — ZERO REAL — V3-F10 OPEN — READY FOR MORRIS TARGETED UAT CONFIRMATION — PRE-M6 NON COMPLETE — RUNTIME V3 NON ADOPTED

## 1. Git PRE

Repo: mcleland147/sfia-workspace
Branch: delivery/sfia-studio-pre-m6-ui-option-a
HEAD: 0d33478566627a9bf507d5a06323962d349308ee
origin/main: a3ac418f3bc2ebb006cbc58f902f13629871014d
origin/sfia/review-handoff PRE: b9b245709b50324de8bf5c6f34e80f1c4c5df57e
staged: empty
dirty: 115 (113 historical + 2 new test files from prior cycle)
PRE snapshot: .tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/

## 2. Git POST

Timestamp POST: 2026-08-17 23:45:03 CEST (+0200)
Branch/HEAD/main unchanged
origin/sfia/review-handoff before publish: b9b245709b50324de8bf5c6f34e80f1c4c5df57e
staged: empty
dirty: 115 (same count; 7 files changed this micro-cycle within existing dirty tree)
Project git write: 0

## 3. Problème UAT-UX-08

Cycle 8 prior correctly labeled session DET via processRef proc:det:* as « Exécution déterministe de test ». After durable rehydrate, processRef is absent from LPS; recommendation.mode and ev:m4-bounded-ro:* remain REAL-shaped; resolvePersistenceNotice(... kind=rehydrate) returned F3_PRODUCT_DURABLE_CURSOR_REAL_NOTICE claiming « Une exécution Cursor réelle a déjà été enregistrée ». That promoted DET → REAL after reload without durable discriminant. Forbidden.

## 4. Cause exacte

- resolvePersistenceNotice treated mode=CURSOR_CLI_REAL alone as sufficient proof on rehydrate.
- F3_PRODUCT_DURABLE_CURSOR_REAL_NOTICE text asserted REAL.
- ConversationSurface srOnly stamp defaulted to « Exécution Cursor réelle enregistrée » for any non-fixture/non-DET executeKind, including durable_read.

## 5. Stratégie fail-closed

UNKNOWN DURABLE PROVENANCE → NEUTRAL CLAIM. Never UNKNOWN → REAL.
- Renamed notice to F3_PRODUCT_DURABLE_BOUNDED_NOTICE with neutral bounded wording.
- resolvePersistenceNotice rehydrate: explicit fixture durable → fixture notice; otherwise bounded neutral (never REAL from mode alone).
- resolvePersistenceNotice execute: session DET via processRef → deterministic notice; session REAL facts → session REAL notice unchanged.
- ConversationSurface srOnly REAL stamp only when executeKind === cursor_real (session with discriminant), not durable_read.

No new persistence. No schema. No lib/oa. No actions.ts change (rehydrate still passes mode only; notice function fail-closes internally).

## 6. Fichiers modifiés CE micro-cycle

- projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
- projects/sfia-studio/app/features/project-assistant/f3/constants.ts
- projects/sfia-studio/app/features/project-assistant/f3/index.ts
- projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
- projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
- projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
- projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts

## 7. SHA256 PRE / POST

```
FILE projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
PRE  ebeeabda442efbee034c8eceb9c17aff673e3067fbfe87ddac46df27b5113c58
POST cf4988406578692234c20e1960c7b16c7c1923fea829bab5f397d3f016bd56cd
FILE projects/sfia-studio/app/features/project-assistant/f3/constants.ts
PRE  eaa392354cedf9a755addaf593a8752a092fa65ba2bda4561a312e66eeaf03b2
POST 4c439f10c15012d3e253a6fdd07750ae5989e13d587db6b40ea40d5efb63358d
FILE projects/sfia-studio/app/features/project-assistant/f3/index.ts
PRE  6aba79862dcf531a816bf1cf7365011d897b4531369ce67b6a49fa7e78d07fd9
POST b90610f82ffda98e192ccbc600260c68dcd6a48fab9f9307f84db8469a4d17bd
FILE projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
PRE  812244a96a69d832541d94fa49bf94fac621c5793a07469611625f6f2dd20174
POST 80f5a84fcf5ef163d2c81e4e9550765113b4770ddc6a597d783826496ce700f7
FILE projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
PRE  64f7c89b71947cce6e5afd1dcd8617a1c420d0dcc9ca3678155c6feb475afa5d
POST 4ce5a9a73b01d18c356cb96e8522b1aab75807ededd3e54e0870e150d627119b
FILE projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
PRE  0e31c00fa802e3d76a9e4398825d236e9d3f5e2c07ca35c619e76bf3318348f6
POST 5da881fdaeffa506aad35cec94c997d0d34f2fe04ed1b9b309cc72eea2d33027
FILE projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
PRE  6822f851b0bdefe835f63676ca5d2980f563bd7688be8e7626d14da1661252ab
POST d17114e8c8eacdd801bdb2afca6d42c84fb83a8a6eb536a77dca3d08c9c7665f
```

## 8. Session semantics preserved

T-UX08-1: session REAL facts → « Exécution Cursor réelle » + session REAL execute notice.
T-UX08-2: session processRef proc:det:* → « Exécution déterministe de test »; never REAL.
T-UX08-3: fixture remains fixture.

## 9. Durable rehydrate neutral semantics

T-UX08-4/5: REAL-shaped durable (mode=CURSOR_CLI_REAL, ev:m4-bounded-ro:*, durableRead=true) without processRef → semantic « Lecture durable du résultat — aucune nouvelle exécution »; notice « …Un résultat d'exécution borné a été enregistré… ». No REAL strings.
T-UX08-6: ev:f3-fixture:* durable stays fixture notice with REAL execution remains disabled.

## 10. Tests

presentationLabels.test.ts: 29 passed (added T-UX08-1..8)
uatUxSemanticReserves.ui.test.tsx: 6 passed
project-assistant + pre-m6-product-ui suites: 18 files / 161 passed
tsc --noEmit: PASS
next lint: PASS
next build: PASS (retry after Playwright; first attempt hit transient _document ENOENT while webServer active)

## 11. Browser DET reload proof — ZERO REAL

Spec: e2e/studio-option-a-uat-semantic-reserves.spec.ts
Port: 3083 (not 3070/3024)
DB: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-20260817-234131/runtime/qa-product.sqlite
Flags: SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=1, SFIA_STUDIO_E2E_QA_CONTROL=1, OPS1_CONVERSATION_PROVIDER=fake, SFIA_STUDIO_CURSOR_REAL unset
Result: 1 passed (22.4s)
Session succeeded shows deterministic semantics; after reload: durable semantic + notice contain « Lecture durable » and « résultat d'exécution borné »; zero « Exécution Cursor réelle », « Une exécution Cursor réelle », REAL BOUNDARY PROVEN, REAL execution remains disabled; no confirm/execute card; no relaunch.

## 12. Screenshots

Campaign: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-20260817-234131/screenshots/
- A-det-session-succeeded.png sha256 c5112ed7df4eda490cc37648e19732a6e430a1960048fcb1c9b67265215952b7
- B-det-reload-neutral-durable.png sha256 ff353c62a1e99ba6b2bca38590f2b95753ba73eda77fde95c372f39cadec4760
(Also A-contract-before-confirm, B-running, C-succeeded, D-reload from same run.)

## 13. REAL counts

REAL_CALL_COUNT = 0
OPENAI_LIVE_CALL_COUNT = 0
CURSOR_REAL_PROCESS_COUNT = 0

## 14. V3-F10

OPEN / UNCHANGED — no stdout/result payload persistence added.

## 15. UAT freeze

127.0.0.1:3070 / npm PID 62300 / listener 62323 untouched POST. Historical 3024 untouched.

## 16. Backbone non-régression

HumanDecision ≠ Recommendation; Confirmation ≠ HumanDecision; one-launch; Attempt lifecycle; Evidence/RB/LPS; NAME_MAX; ARCH-WOP-1; OpenAI provider; Cursor gateway/runner unchanged; no auto retry.

## 17. Réserves restantes

UAT-UX-01/02/06 P1 non-blocking unchanged.
Durable rehydrate cannot distinguish REAL Morris UAT from DET without future durable provenance field — intentionally fail-closed neutral (not REAL). Morris targeted REAL UAT still required to confirm REAL session semantics on production path.
PRE-M6 NON COMPLETE.

## 18. Prochain gate

Morris targeted UAT confirmation (including REAL session path if authorized separately). PRE-M6 requalification after Morris sign-off.

## 19. Project Git actions = 0

No project commit/push/PR/merge.

---

# CYCLE-ONLY DIFFS (micro-correctif PRE → POST)

### projects/sfia-studio/app/features/project-assistant/presentationLabels.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts	2026-08-17 23:38:36
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts	2026-08-17 23:39:00
@@ -5,7 +5,7 @@

 import {
   F3_PROCESS_LOCAL_NOTICE,
-  F3_PRODUCT_DURABLE_CURSOR_REAL_NOTICE,
+  F3_PRODUCT_DURABLE_BOUNDED_NOTICE,
   F3_PRODUCT_DURABLE_NOTICE,
   F3_SESSION_CURSOR_REAL_NOTICE,
 } from "./f3/constants";
@@ -380,14 +380,28 @@
   productDurablePath: boolean;
   mode?: F3Mode | string | null;
   kind?: "execute" | "rehydrate";
+  processRef?: string | null;
+  evidenceId?: string | null;
 }): string {
   if (!input.productDurablePath) return F3_PROCESS_LOCAL_NOTICE;
-  const mode = (input.mode ?? "").toUpperCase();
-  const isCursorReal = mode.includes("CURSOR_CLI_REAL");
-  if (isCursorReal && input.kind === "rehydrate") {
-    return F3_PRODUCT_DURABLE_CURSOR_REAL_NOTICE;
+  const facts: ExecutionSemanticFacts = {
+    mode: input.mode,
+    processRef: input.processRef,
+    evidenceId: input.evidenceId,
+  };
+  if (input.kind === "rehydrate") {
+    if (looksFixture(facts) && !looksDeterministicTestBoundary(facts)) {
+      return F3_PRODUCT_DURABLE_NOTICE;
+    }
+    // Bounded / REAL-shaped LPS facts without discriminant processRef:
+    // UNKNOWN DURABLE PROVENANCE → NEUTRAL. Never promote DET to REAL.
+    return F3_PRODUCT_DURABLE_BOUNDED_NOTICE;
   }
-  if (isCursorReal) return F3_SESSION_CURSOR_REAL_NOTICE;
+  if (looksDeterministicTestBoundary(facts)) {
+    return "Exécution déterministe de test enregistrée. La recommandation n'est pas une décision Morris.";
+  }
+  const mode = (input.mode ?? "").toUpperCase();
+  if (mode.includes("CURSOR_CLI_REAL")) return F3_SESSION_CURSOR_REAL_NOTICE;
   return F3_PRODUCT_DURABLE_NOTICE;
 }

```

### projects/sfia-studio/app/features/project-assistant/f3/constants.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/projects/sfia-studio/app/features/project-assistant/f3/constants.ts	2026-08-17 23:38:36
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/f3/constants.ts	2026-08-17 23:38:47
@@ -63,11 +63,11 @@
   "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a Morris decision.";

 /**
- * Durable read after a bounded Cursor REAL Attempt. Distinct from fixture
- * "REAL remains disabled" and from "no execution ever happened".
+ * Durable read after a bounded Attempt whose REAL vs deterministic provenance
+ * is no longer discriminable from LPS facts. Fail-closed: never claim REAL.
  */
-export const F3_PRODUCT_DURABLE_CURSOR_REAL_NOTICE =
-  "Lecture durable du résultat — aucune nouvelle exécution. Une exécution Cursor réelle a déjà été enregistrée. La recommandation n'est pas une décision Morris.";
+export const F3_PRODUCT_DURABLE_BOUNDED_NOTICE =
+  "Lecture durable du résultat — aucune nouvelle exécution. Un résultat d'exécution borné a été enregistré. La recommandation n'est pas une décision Morris.";

 export const F3_SESSION_CURSOR_REAL_NOTICE =
   "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision Morris." as const;
```

### projects/sfia-studio/app/features/project-assistant/f3/index.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/projects/sfia-studio/app/features/project-assistant/f3/index.ts	2026-08-17 23:38:36
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/f3/index.ts	2026-08-17 23:38:50
@@ -2,7 +2,7 @@
 export {
   F3_PROCESS_LOCAL_NOTICE,
   F3_PRODUCT_DURABLE_NOTICE,
-  F3_PRODUCT_DURABLE_CURSOR_REAL_NOTICE,
+  F3_PRODUCT_DURABLE_BOUNDED_NOTICE,
   F3_SESSION_CURSOR_REAL_NOTICE,
   resolveF3EphemeralNotice,
 } from "./constants";
```

### projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts	2026-08-17 23:38:36
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts	2026-08-17 23:39:50
@@ -289,13 +289,91 @@
     expect(label).not.toMatch(/REAL BOUNDARY PROVEN/);
   });

-  it("T6 — durable rehydrate keeps REAL vs fixture from evidence IDs", () => {
+  it("T-UX08-1 — session REAL facts still produce Cursor réelle", () => {
+    const label = executionSemanticUserLabel({
+      mode: "CURSOR_CLI_REAL",
+      executionMode: "cursor_cli_real",
+      adapterId: "adp:m4-cursor-cli-real",
+      realProcessInvoked: true,
+      realExecution: true,
+      evidenceId: "ev:m4-bounded-ro:xat:demo",
+    });
+    expect(label).toBe("Exécution Cursor réelle");
     expect(
-      executionSemanticUserLabel({
-        evidenceId: "ev:m4-bounded-ro:xat:demo",
-        durableRead: true,
+      resolvePersistenceNotice({
+        productDurablePath: true,
+        mode: "CURSOR_CLI_REAL",
+        kind: "execute",
       }),
-    ).toBe("Lecture durable du résultat — aucune nouvelle exécution");
+    ).toBe(
+      "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision Morris.",
+    );
+  });
+
+  it("T-UX08-2 — session DET processRef is never REAL", () => {
+    const label = executionSemanticUserLabel({
+      mode: "CURSOR_CLI_REAL",
+      executionMode: "cursor_cli_real",
+      adapterId: "adp:m4-cursor-cli-real",
+      processRef: "proc:det:xat:demo",
+      realProcessInvoked: true,
+    });
+    expect(label).toBe("Exécution déterministe de test");
+    expect(label).not.toMatch(/Cursor réelle/);
+    expect(label).not.toMatch(/REAL BOUNDARY PROVEN/);
+    expect(
+      resolvePersistenceNotice({
+        productDurablePath: true,
+        mode: "CURSOR_CLI_REAL",
+        kind: "execute",
+        processRef: "proc:det:xat:demo",
+      }),
+    ).toMatch(/déterministe de test/);
+    expect(
+      resolvePersistenceNotice({
+        productDurablePath: true,
+        mode: "CURSOR_CLI_REAL",
+        kind: "execute",
+        processRef: "proc:det:xat:demo",
+      }),
+    ).not.toMatch(/Cursor réelle/);
+  });
+
+  it("T-UX08-3 — fixture stays fixture", () => {
+    expect(
+      executionSemanticUserLabel({
+        mode: "FIXTURE",
+        executionMode: "adapter_sync_fixture",
+        adapterId: "adp:f3-test-fixture",
+        evidenceId: "ev:f3-fixture:xat:demo",
+      }),
+    ).toBe("Fixture de test");
+  });
+
+  it("T-UX08-4/5 — REAL-shaped durable rehydrate without processRef is NEUTRAL", () => {
+    const label = executionSemanticUserLabel({
+      mode: "CURSOR_CLI_REAL",
+      evidenceId: "ev:m4-bounded-ro:xat:demo",
+      durableRead: true,
+    });
+    expect(label).toBe("Lecture durable du résultat — aucune nouvelle exécution");
+    expect(label).not.toMatch(/Cursor réelle/);
+    expect(label).not.toMatch(/déterministe/);
+    const notice = resolvePersistenceNotice({
+      productDurablePath: true,
+      mode: "CURSOR_CLI_REAL",
+      kind: "rehydrate",
+      evidenceId: "ev:m4-bounded-ro:xat:demo",
+    });
+    expect(notice).toMatch(/Lecture durable du résultat/);
+    expect(notice).toMatch(/résultat d'exécution borné/);
+    expect(notice).not.toMatch(/Une exécution Cursor réelle/);
+    expect(notice).not.toMatch(/Exécution Cursor réelle/);
+    expect(notice).not.toMatch(/REAL BOUNDARY PROVEN/);
+    expect(notice).not.toMatch(/REAL execution remains disabled/);
+  });
+
+  it("T-UX08-6 — true fixture durable stays fixture, not bounded REAL", () => {
     expect(
       executionSemanticUserLabel({
         evidenceId: "ev:f3-fixture:xat:demo",
@@ -303,8 +381,36 @@
         durableRead: true,
       }),
     ).toBe("Fixture de test");
+    expect(
+      resolvePersistenceNotice({
+        productDurablePath: true,
+        mode: "FIXTURE",
+        kind: "rehydrate",
+        evidenceId: "ev:f3-fixture:xat:demo",
+      }),
+    ).toMatch(/REAL execution remains disabled/);
+    expect(
+      resolvePersistenceNotice({
+        productDurablePath: true,
+        mode: "FIXTURE",
+        kind: "rehydrate",
+        evidenceId: "ev:f3-fixture:xat:demo",
+      }),
+    ).not.toMatch(/Cursor réelle a déjà/);
   });

+  it("T-UX08-8 — notice projection does not mutate caller facts", () => {
+    const facts = {
+      productDurablePath: true,
+      mode: "CURSOR_CLI_REAL" as const,
+      kind: "rehydrate" as const,
+      evidenceId: "ev:m4-bounded-ro:xat:demo",
+    };
+    const copy = { ...facts };
+    resolvePersistenceNotice(facts);
+    expect(facts).toEqual(copy);
+  });
+
   it("T8/T9 — internal marker is stripped for display without mutating raw context", () => {
     const raw =
       "Contexte projet UAT.\n\n[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]\nAnalyse interne";
@@ -347,7 +453,7 @@
     ).not.toMatch(/succès/);
   });

-  it("resolves persistence notices without calling fixture REAL-disabled after REAL", () => {
+  it("T-UX08 rehydrate notice never claims REAL from mode alone", () => {
     expect(
       resolvePersistenceNotice({
         productDurablePath: true,
@@ -355,16 +461,16 @@
         kind: "execute",
       }),
     ).toMatch(/Exécution Cursor réelle/);
+    const rehydrate = resolvePersistenceNotice({
+      productDurablePath: true,
+      mode: "CURSOR_CLI_REAL",
+      kind: "rehydrate",
+    });
+    expect(rehydrate).toMatch(/Lecture durable/);
+    expect(rehydrate).not.toMatch(/Exécution Cursor réelle/);
     expect(
       resolvePersistenceNotice({
         productDurablePath: true,
-        mode: "CURSOR_CLI_REAL",
-        kind: "rehydrate",
-      }),
-    ).toMatch(/Lecture durable/);
-    expect(
-      resolvePersistenceNotice({
-        productDurablePath: true,
         mode: "FIXTURE",
         kind: "rehydrate",
       }),
```

### projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx	2026-08-17 23:38:36
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx	2026-08-17 23:40:06
@@ -191,7 +191,7 @@
   text: "rehydrate",
   project: {} as ProjectAssistantRehydrateEvidenceOutcomeSuccess["project"],
   ephemeralNotice:
-    "Lecture durable du résultat — aucune nouvelle exécution. Une exécution Cursor réelle a déjà été enregistrée. La recommandation n'est pas une décision Morris.",
+    "Lecture durable du résultat — aucune nouvelle exécution. Un résultat d'exécution borné a été enregistré. La recommandation n'est pas une décision Morris.",
   evidence: [
     {
       evidenceId: "ev:m4-bounded-ro:xat:m3:demo",
@@ -322,7 +322,7 @@
 });

 describe("UAT-UX-08 durable rehydrate", () => {
-  it("T6/T7/T15 — durable REAL read does not relaunch and is not fixture-disabled", () => {
+  it("T-UX08-4/5/7 — REAL-shaped durable read is NEUTRAL and does not relaunch", () => {
     const confirm = vi.fn();
     render(
       <ConversationSurface
@@ -336,13 +336,20 @@
       /Lecture durable/,
     );
     expect(screen.getByTestId("durable-ephemeral-notice")).toHaveTextContent(
-      /aucune nouvelle exécution/i,
+      /résultat d'exécution borné/i,
     );
     expect(screen.getByTestId("durable-ephemeral-notice")).not.toHaveTextContent(
+      /Exécution Cursor réelle/,
+    );
+    expect(screen.getByTestId("durable-ephemeral-notice")).not.toHaveTextContent(
       /REAL execution remains disabled/i,
     );
+    expect(screen.queryByTestId("project-assistant-f3-cursor-real-recorded")).toBeNull();
+    expect(screen.queryByText(/Exécution Cursor réelle/)).toBeNull();
+    expect(screen.queryByText(/REAL BOUNDARY PROVEN/)).toBeNull();
     expect(confirm).not.toHaveBeenCalled();
     expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
+    expect(screen.queryByTestId("f3-confirm-execute-button")).toBeNull();
   });
 });

```

### projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts	2026-08-17 23:38:36
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts	2026-08-17 23:40:06
@@ -128,6 +128,7 @@
     );
     await expect(page.getByText("REAL BOUNDARY PROVEN")).toHaveCount(0);
     await capture(page, "C-succeeded-evidence-rb-recommendation");
+    await capture(page, "A-det-session-succeeded");

     await page.reload();
     await expect(page.getByTestId("project-principal")).toBeVisible({
@@ -137,13 +138,25 @@
       timeout: 20_000,
     });
     await expect(page.getByTestId("durable-outcome-semantic")).toBeVisible();
-    await expect(page.getByTestId("durable-ephemeral-notice")).not.toContainText(
-      "REAL execution remains disabled",
+    await expect(page.getByTestId("durable-outcome-semantic")).toContainText(
+      "Lecture durable du résultat",
     );
+    await expect(page.getByTestId("durable-ephemeral-notice")).toContainText(
+      "Lecture durable du résultat",
+    );
+    await expect(page.getByTestId("durable-ephemeral-notice")).toContainText(
+      "résultat d'exécution borné",
+    );
+    await expect(page.getByText("Une exécution Cursor réelle")).toHaveCount(0);
+    await expect(page.getByText("Exécution Cursor réelle")).toHaveCount(0);
+    await expect(page.getByText("REAL BOUNDARY PROVEN")).toHaveCount(0);
+    await expect(page.getByText("REAL execution remains disabled")).toHaveCount(0);
     await expect(page.getByText("[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]")).toHaveCount(
       0,
     );
     await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
     await capture(page, "D-reload-durable-read");
+    await capture(page, "B-det-reload-neutral-durable");
   });
 });
```

### projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-uat-ux08-microfix-pre/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx	2026-08-17 23:38:36
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx	2026-08-17 23:39:00
@@ -1293,7 +1293,7 @@
         >
           Exécution déterministe de test
         </div>
-      ) : (
+      ) : executeKind === "cursor_real" ? (
         <div
           className={styles.srOnly}
           data-testid="project-assistant-f3-cursor-real-recorded"
@@ -1301,7 +1301,7 @@
         >
           Exécution Cursor réelle enregistrée
         </div>
-      )}
+      ) : null}
       {showFixtureNoRealStamp ? (
         <div
           className={styles.srOnly}
```
