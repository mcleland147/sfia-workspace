# SFIA Studio — W4-BR-CORR-01 Review Pack FULL — Business-First Copy & EC Status Presentation

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-26 14:04:33 CEST |
| **Cycle** | W4-BR-CORR-01 — Business-First Copy & EC Status Presentation |
| **Type** | 8 — Delivery / implementation |
| **Profil** | CRITICAL |
| **Typologie** | INC — correctif borné d'une candidate Delivery existante |
| **GO Morris** | CONSUMED — PRESENTATION-ONLY — REMOVE INTERNAL / METHOD JARGON — REPLACE PRIMARY RAW EC STATUS WITH BUSINESS LABEL — KEEP RAW STATUS FOR AUDIT/TESTING — NO FUNCTIONAL SEMANTICS CHANGE — NO H-01 REOPEN — H-02/03/04 CARRY — W4-C NOT STARTED — NO DOMAIN/PERSISTENCE/C6 — NO PROJECT COMMIT/PUSH/PR/MERGE — REAL OUT — RUNTIME V3 NON ADOPTED |
| **Prior handoff** | `7bed03de41b3116360c50ee441aedfd220cad812` (complete consolidated diff pack) |
| **Nature** | Presentation-only correction on W4-B + W4-BR consolidated dirty tree |
| **Project commit/push/PR/merge** | **NONE** |

---

## 0. Local Git Truth (start) — PASS

- repo: `mcleland147/sfia-workspace`
- workspace: `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- branch: `delivery/sfia-studio-w4-b-single-authority-path`
- HEAD: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- `origin/main`: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- staged: **NONE**
- tracked modified: **21**
- untracked product: `projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts`
- initial consolidated `git diff --binary` SHA-256: `a8d1408777e53f3619475ad69ca45453d9f8a3526dcd5d6f20f39b827cc66d02`
- initial untracked E2E SHA-256: `342845bbd43549b1239720f52ed39e3590310999bf5917ecabc1c3928c5875ac`

Verdict: **LOCAL GIT TRUTH PASS**

---

## 1. Sources read / Convergence / CKC

### Sources
- Process: cycle-execution-template, routing-guide, chatgpt-cursor operating model, rules-and-guardrails
- Convergence: build-doctrine, roadmap
- Product Completion: cadrage, conception fonctionnelle
- UX PE: experience-architecture, product-screens-visual-state-contract
- Doctrine: living-project-state / dynamic-trajectory; agent capabilities / execution governance
- Handoff source: `sfia/review-handoff` @ `7bed03de…` (full prior consolidated diffs)

### CKC Delivery
**ABSENT** at current Git — no invented CKC. Fallback: routing + template v2.6 + Build Doctrine + C1/C2 + Product Experience + W4-BR handoff.

### Convergence Pre-check
- Capability: Product Experience Closure — Milestone W4 — Slice W4-BR-CORR-01
- Upstream: W1/W2/W3 CLOSED; W4-A/A2 validated; W4-UXR Morris-validated; H-01 Option A adopted
- W4-B + W4-BR: FUNCTIONAL/ARCHITECTURAL REVIEW PASS; PRESENTATION MICRO-CORRECTION REQUIRED; NOT INTEGRATED
- Gaps closed: (A) internal/method language primary Pilote-facing; (B) raw EC enum primary Pilote-facing
- KEEP: W4-B single authority; H-01; S2 behavior; ProjectWorkspace composition; EC semantics
- ADAPT: Copy; EC status presentation
- KEEP/MOVE: raw status technical/audit secondary
- CARRY: H-02, H-03, H-04
- NOT STARTED: W4-C; REAL OUT; C6 DO NOT REOPEN

### Penpot (READ ONLY)
- File `63bdc57a-636a-81ba-8008-82d2a50d5233`
- Page 06 `2feb04ff-8811-8084-8008-8ab3837c737e` — 12 boards
- Coherence targets located: UXR-01, UXR-04, UXR-H01
- **No Penpot mutation**; no layout redesign in CORR-01

---

## 2. Files modified by CORR-01

### Product (authorized)
1. `NewProjectIntentionPage.tsx` — S2 context placeholder + help (business-first)
2. `ProjectWorkspacePage.tsx` — H-01 region note (Pilote-facing)
3. `TrajectorySurface.tsx` — EC primary business status label + technical raw status

### Tests (assertion adaptation for visible text)
4. `trajectorySurface.ui.test.tsx` — business label + `data-status` + tech audit
5. `studio-w4b-single-authority-path.spec.ts` — banned copy, business status, captures → `w4-br-corr-01`
6. `studio-w3a-governed-execute-runtime.spec.ts` — status assertion text only
7. `studio-w3b-terminal-evidence-runtime.spec.ts` — status assertion text only
8. `studio-w3c-post-evidence-replan-runtime.spec.ts` — status assertion text only

### Explicitly NOT modified by CORR-01
- CSS (W4-BR CSS remains dirty from prior cycle; CORR-01 patch has no CSS file delta)
- domain / repositories / persistence / W2-W3 actions / authority / Evidence / C6 / Penpot / package.json
- `uatUxSemanticReserves.ui.test.tsx` (authorized but not needed)
- ConversationSurface / LpsSurface / Option A e2e (pre-existing W4-B dirty only)

**Note on W3 e2e:** not in the primary authorized product list, but required by exit X-W4BR-CORR-14 and “adapt assertions where visible text changes”. Changes are assertion-only (business label strings + audit attributes), no flow/semantics change.

---

## 3. Correction 1 — Pilote-facing copy (before → after)

| Location | Before (banned / method) | After |
| --- | --- | --- |
| S2 placeholder | `Notes libres utiles au pilotage — pas un questionnaire méthode.` | `Ajoutez uniquement le contexte utile au projet.` |
| S2 help | `…cela ne qualifie pas automatiquement le cycle et ne crée pas de décision humaine.` | `Sans contexte, votre intention suffit pour créer le projet. Vous pourrez préciser la suite avec Nora ensuite.` |
| Workspace note | `…sans second chemin d'autorité.` | `L'état actuel et la trajectoire sont regroupés ici pour faciliter le pilotage.` |

Proof: banned phrases absent from primary UX product files (grep PASS).

---

## 4. Correction 2 — EC primary status

### Union observed (`ExecutionContractStatus` from domain types — read-only)
`draft | proposed | validated | confirmation_required | confirmed | executing | completed | failed | cancelled | superseded`

### Presentation-only mapping (local helper in TrajectorySurface.tsx)
| Raw status | Business label |
| --- | --- |
| draft | Brouillon |
| proposed | Proposé |
| validated | Validé |
| confirmation_required | Confirmation requise |
| confirmed | Confirmation enregistrée |
| executing | Exécution en cours |
| completed | Exécution terminée |
| failed | Échec d'exécution |
| cancelled | Annulé |
| superseded | Remplacé |
| unknown (runtime string) | État du contrat indisponible *(never raw enum)* |

### Markup
- Primary: `data-testid="w2-contract-status"` + `data-status={raw}` → **business label text**
- Technical details: `data-testid="w2-contract-status-tech"` → **raw enum**
- Domain/runtime type & transitions: **unchanged**

---

## 5. CORRECTION-ONLY PATCH (complete)

```diff
--- .tmp-sfia-review/w4-br-corr-01/before/NewProjectIntentionPage.tsx	2026-08-26 13:59:53
+++ .tmp-sfia-review/w4-br-corr-01/after/NewProjectIntentionPage.tsx	2026-08-26 14:03:21
@@ -272,14 +272,13 @@
             className={styles.textarea}
             rows={3}
             value={precisions}
-            placeholder="Notes libres utiles au pilotage — pas un questionnaire méthode."
+            placeholder="Ajoutez uniquement le contexte utile au projet."
             aria-describedby="project-context-help"
             onChange={(event) => setPrecisions(event.target.value)}
           />
           <p className={styles.help} id="project-context-help">
-            Sans contexte, votre intention sert aussi de contexte. Créer ouvre le
-            projet : cela ne qualifie pas automatiquement le cycle et ne crée
-            pas de décision humaine.
+            Sans contexte, votre intention suffit pour créer le projet. Vous
+            pourrez préciser la suite avec Nora ensuite.
           </p>
         </div>

--- .tmp-sfia-review/w4-br-corr-01/before/ProjectWorkspacePage.tsx	2026-08-26 13:59:53
+++ .tmp-sfia-review/w4-br-corr-01/after/ProjectWorkspacePage.tsx	2026-08-26 14:03:21
@@ -184,9 +184,8 @@
                   État actuel et trajectoire
                 </h2>
                 <p className={styles.stateTrajectoryNote}>
-                  L&apos;état enregistré et la trajectoire restent distincts :
-                  une même région de lecture pour décider, sans second chemin
-                  d&apos;autorité.
+                  L&apos;état actuel et la trajectoire sont regroupés ici pour
+                  faciliter le pilotage.
                 </p>
               </header>
               <div
--- .tmp-sfia-review/w4-br-corr-01/before/TrajectorySurface.tsx	2026-08-26 13:59:53
+++ .tmp-sfia-review/w4-br-corr-01/after/TrajectorySurface.tsx	2026-08-26 14:03:21
@@ -39,7 +39,33 @@
   W3cPostEvidenceLoopDto,
 } from "@/features/project-assistant/w2/types";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
+import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
 import styles from "./TrajectorySurface.module.css";
+
+/**
+ * Presentation-only labels for ExecutionContractStatus.
+ * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
+ */
+const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
+  {
+    draft: "Brouillon",
+    proposed: "Proposé",
+    validated: "Validé",
+    confirmation_required: "Confirmation requise",
+    confirmed: "Confirmation enregistrée",
+    executing: "Exécution en cours",
+    completed: "Exécution terminée",
+    failed: "Échec d'exécution",
+    cancelled: "Annulé",
+    superseded: "Remplacé",
+  };
+
+function executionContractStatusLabel(status: string): string {
+  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
+    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
+  }
+  return "État du contrat indisponible";
+}

 /** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
 type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";
@@ -807,7 +833,12 @@
             </div>
             <div>
               <dt>État du contrat</dt>
-              <dd data-testid="w2-contract-status">{contract.status}</dd>
+              <dd
+                data-testid="w2-contract-status"
+                data-status={contract.status}
+              >
+                {executionContractStatusLabel(contract.status)}
+              </dd>
             </div>
             <div>
               <dt>Prochaine action utile</dt>
@@ -869,6 +900,15 @@
             <summary>Détails techniques du contrat</summary>
             <dl className={styles.facts}>
               <div>
+                <dt>Statut technique</dt>
+                <dd
+                  className={styles.code}
+                  data-testid="w2-contract-status-tech"
+                >
+                  {contract.status}
+                </dd>
+              </div>
+              <div>
                 <dt>Empreinte sémantique</dt>
                 <dd className={styles.code} data-testid="w2-contract-fingerprint">
                   {contract.semanticFingerprint.slice(0, 12)}…
--- .tmp-sfia-review/w4-br-corr-01/before/trajectorySurface.ui.test.tsx	2026-08-26 13:59:53
+++ .tmp-sfia-review/w4-br-corr-01/after/trajectorySurface.ui.test.tsx	2026-08-26 14:03:21
@@ -250,7 +250,21 @@
     );
     expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
       "cap:product-temp-artifact",
+    );
+    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
+    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
+      "Confirmation requise",
+    );
+    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmation_required",
     );
+    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
+      "confirmation_required",
+    );
+    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
+      "confirmation_required",
+    );
     // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
     expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

--- .tmp-sfia-review/w4-br-corr-01/before/studio-w4b-single-authority-path.spec.ts	2026-08-26 13:59:53
+++ .tmp-sfia-review/w4-br-corr-01/after/studio-w4b-single-authority-path.spec.ts	2026-08-26 14:03:21
@@ -10,7 +10,7 @@

 const CAPTURE_ROOT = path.resolve(
   process.cwd(),
-  "../../../.tmp-sfia-review/runtime-captures/w4-br",
+  "../../../.tmp-sfia-review/runtime-captures/w4-br-corr-01",
 );
 const MANIFEST = path.join(CAPTURE_ROOT, "manifest.md");
 const MANIFEST_JSONL = path.join(CAPTURE_ROOT, "manifest.jsonl");
@@ -41,7 +41,7 @@
     route: page.url(),
     ...meta,
     provenance:
-      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-B + W4-BR RECONCILED PRESENTATION",
+      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-BR-CORR-01 BUSINESS-FIRST COPY + EC STATUS",
   };
   fs.appendFileSync(MANIFEST_JSONL, `${JSON.stringify(row)}\n`);
   fs.appendFileSync(
@@ -83,7 +83,7 @@
     fs.writeFileSync(
       MANIFEST,
       [
-        "# W4-BR runtime captures (extended W4-B single authority + H-01 composition)",
+        "# W4-BR-CORR-01 runtime captures (business-first copy + EC status)",
         "",
         "| file | timestamp | viewport | route | SC | state | observation |",
         "| --- | --- | --- | --- | --- | --- | --- |",
@@ -98,6 +98,23 @@
     await expect(page.getByLabel("Intention du projet")).toBeVisible();
     await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
     await expect(page.getByTestId("create-project-cancel")).toBeVisible();
+    // W4-BR-CORR-01 — banned internal/method copy absent from Pilote-facing S2.
+    await expect(page.locator("body")).not.toContainText(
+      "pas un questionnaire méthode",
+    );
+    await expect(page.locator("body")).not.toContainText(
+      "cela ne qualifie pas automatiquement le cycle et ne crée pas de décision humaine",
+    );
+    await expect(page.locator("#project-context")).toHaveAttribute(
+      "placeholder",
+      "Ajoutez uniquement le contexte utile au projet.",
+    );
+    await capture(page, "A-S2-create-form-1440", {
+      sc: "S2",
+      state: "create form after CORR-01 copy",
+      viewport: { width: 1440, height: 900 },
+      observation: "Business-first context copy; no method jargon",
+    });
     await page.locator("#project-name").fill(name);
     await page
       .locator("#project-objective")
@@ -121,7 +138,18 @@
     await expect(
       page.getByTestId("project-lps-column").getByTestId("w2-trajectory-panel"),
     ).toBeVisible();
-
+    await expect(page.locator("body")).not.toContainText(
+      "sans second chemin d'autorité",
+    );
+    await expect(page.getByTestId("project-state-trajectory-region")).toContainText(
+      "L'état actuel et la trajectoire sont regroupés ici pour faciliter le pilotage.",
+    );
+    await capture(page, "B-workspace-state-trajectory-note-1440", {
+      sc: "H-01",
+      state: "État/Trajectoire note after CORR-01",
+      viewport: { width: 1440, height: 900 },
+      observation: "Pilote-facing note; no authority-path jargon",
+    });
     const input = page.getByTestId("project-assistant-input");
     await expect(input).toBeEnabled({ timeout: 15_000 });
     await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
@@ -164,6 +192,32 @@
       .selectOption("generate-temporary-artifact");
     await page.getByTestId("w2-prepare-contract").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
+    await expect(page.getByTestId("w2-contract-status")).toHaveText(
+      "Confirmation requise",
+    );
+    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmation_required",
+    );
+    await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
+      "confirmation_required",
+    );
+    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
+      "confirmation_required",
+    );
+    await page.getByText("Détails techniques du contrat").click();
+    await capture(page, "C-EC-business-status-1440", {
+      sc: "SC-05",
+      state: "EC prepared; business status label primary",
+      viewport: { width: 1440, height: 900 },
+      observation: "w2-contract-status = Confirmation requise",
+    });
+    await capture(page, "D-EC-technical-status-audit-1440", {
+      sc: "SC-05",
+      state: "EC technical details; raw status auditable",
+      viewport: { width: 1440, height: 900 },
+      observation: "w2-contract-status-tech = confirmation_required",
+    });
     await capture(page, "SC-05-ec-summary-1440", {
       sc: "SC-05",
       state: "EC prepared",
@@ -187,9 +241,13 @@
       await expect(confirm).toBeEnabled();
       await confirm.click();
       await expect(page.getByTestId("w2-contract-status")).toHaveText(
-        /confirmed/i,
+        "Confirmation enregistrée",
         { timeout: 30_000 },
       );
+      await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+        "data-status",
+        "confirmed",
+      );
       await capture(page, "SC-06-confirmation-1440", {
         sc: "SC-06",
         state: "Confirmation separate from Execute",
--- .tmp-sfia-review/w4-br-corr-01/before/studio-w3a-governed-execute-runtime.spec.ts	2026-08-26 14:00:44
+++ .tmp-sfia-review/w4-br-corr-01/after/studio-w3a-governed-execute-runtime.spec.ts	2026-08-26 14:03:21
@@ -240,8 +240,15 @@
       "product:project-workspace",
     );
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
+      "Confirmation requise",
+    );
+    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
       "confirmation_required",
     );
+    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
+      "confirmation_required",
+    );
     await expect(page.getByTestId("w2-contract-reversibility")).toContainText(
       "reversible",
     );
@@ -263,9 +270,13 @@

     await page.getByTestId("w2-confirm-contract").click();
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
-      "confirmed",
+      "Confirmation enregistrée",
       { timeout: 30_000 },
     );
+    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmed",
+    );
     await capture(page, "05-confirmed", {
       screen: "TrajectorySurface",
       state: "effect_confirmation_n1_granted",
--- .tmp-sfia-review/w4-br-corr-01/before/studio-w3b-terminal-evidence-runtime.spec.ts	2026-08-26 14:00:44
+++ .tmp-sfia-review/w4-br-corr-01/after/studio-w3b-terminal-evidence-runtime.spec.ts	2026-08-26 14:03:21
@@ -157,9 +157,12 @@
     { timeout: 30_000 },
   );
   await page.getByTestId("w2-confirm-contract").click();
-  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
-    timeout: 30_000,
-  });
+  await expect(page.getByTestId("w2-contract-status")).toHaveText(
+    "Confirmation enregistrée",
+    {
+      timeout: 30_000,
+    },
+  );
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
     "Autorisation vérifiée",
--- .tmp-sfia-review/w4-br-corr-01/before/studio-w3c-post-evidence-replan-runtime.spec.ts	2026-08-26 14:00:44
+++ .tmp-sfia-review/w4-br-corr-01/after/studio-w3c-post-evidence-replan-runtime.spec.ts	2026-08-26 14:03:21
@@ -104,9 +104,12 @@
     { timeout: 30_000 },
   );
   await page.getByTestId("w2-confirm-contract").click();
-  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
-    timeout: 30_000,
-  });
+  await expect(page.getByTestId("w2-contract-status")).toHaveText(
+    "Confirmation enregistrée",
+    {
+      timeout: 30_000,
+    },
+  );
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
     "Autorisation vérifiée",
```

---

## 6. Tests executed

### Unit
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync/projects/sfia-studio/app

 ✓ __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx (2 tests) 112ms
 ✓ __tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx (6 tests) 35ms

 Test Files  2 passed (2)
      Tests  8 passed (8)
   Start at  14:02:26
   Duration  686ms (transform 180ms, setup 90ms, collect 358ms, tests 146ms, environment 440ms, prepare 71ms)

```

### E2E (REAL=0, temp SQLite, fake provider, QA controls)
```

Running 13 tests using 1 worker

(node:97067) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓   1 e2e/studio-w2-g3-correction-runtime.spec.ts:55:7 › W2 final-closure /studio product correction proof › walks Options → Phase-B Reco → HD → EC amend/reinspect → STOP BEFORE EXECUTE (4.7s)
  ✓   2 e2e/studio-w3a-governed-execute-runtime.spec.ts:204:7 › W3-A R09 /studio governed execute product proof › positive: accepted → running → terminal with actual work + N1 Confirmation (2.4s)
  ✓   3 e2e/studio-w3a-governed-execute-runtime.spec.ts:415:7 › W3-A R09 /studio governed execute product proof › blocked: missing actual work — no Prepare / no Execute / no Attempt (1.2s)
  ✓   4 e2e/studio-w3b-terminal-evidence-runtime.spec.ts:222:7 › W3-B /studio Terminal + Evidence (corrected) › A SUCCESS + evidence-pending + reload durability (2.9s)
  ✓   5 e2e/studio-w3b-terminal-evidence-runtime.spec.ts:326:7 › W3-B /studio Terminal + Evidence (corrected) › B GOVERNED STOP via EC stopCondition (armed external) (1.7s)
  ✓   6 e2e/studio-w3b-terminal-evidence-runtime.spec.ts:352:7 › W3-B /studio Terminal + Evidence (corrected) › C FAIL via TestExecutionAdapter (armed external) (1.7s)
  ✓   7 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:152:7 › W3-C /studio Post-Evidence replan › A SUCCESS → continue recommendation (1.7s)
  ✓   8 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:173:7 › W3-C /studio Post-Evidence replan › B STOP → recover + propose available (1.8s)
  ✓   9 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:199:7 › W3-C /studio Post-Evidence replan › C FAIL → recover distinct (1.7s)
  ✓  10 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:218:7 › W3-C /studio Post-Evidence replan › D propose without decide then decide (1.8s)
  ✓  11 e2e/studio-w3c-post-evidence-replan-runtime.spec.ts:245:7 › W3-C /studio Post-Evidence replan › E reload restart postEvidence rehydrate (2.0s)
  ✓  12 e2e/studio-w4b-single-authority-path.spec.ts:78:7 › W4-B single authority path /studio › qualify → single W2 HD → EC → confirm → authorize → execute; no F3 path (2.8s)
  ✓  13 e2e/studio-w4b-single-authority-path.spec.ts:311:7 › W4-B single authority path /studio › negative: blocked authorization shows business label and no Attempt (1.1s)

  13 passed (30.3s)
```

Results:
- trajectorySurface + uatUxSemanticReserves: **8/8 PASS**
- studio-w4b: **2/2 PASS**
- studio-w2-g3: **1/1 PASS**
- studio-w3a: **2/2 PASS**
- studio-w3b: **3/3 PASS**
- studio-w3c: **5/5 PASS**
- Total required e2e this pass: **13/13 PASS**

---

## 7. Runtime captures (targeted)

Path: `.tmp-sfia-review/runtime-captures/w4-br-corr-01/`
Count: **17** screenshots (includes A–D CORR proof + flow non-regression)

```
# W4-BR-CORR-01 runtime captures (business-first copy + EC status)

| file | timestamp | viewport | route | SC | state | observation |
| --- | --- | --- | --- | --- | --- | --- |
| A-S2-create-form-1440.png | 2026-08-26T12:02:59.862Z | 1440×900 | http://127.0.0.1:3020/studio/projects/new | S2 | create form after CORR-01 copy | Business-first context copy; no method jargon |
| B-workspace-state-trajectory-note-1440.png | 2026-08-26T12:03:00.258Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | H-01 | État/Trajectoire note after CORR-01 | Pilote-facing note; no authority-path jargon |
| SC-03-qualified-single-path-1440.png | 2026-08-26T12:03:00.417Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-03 | qualified; guidance to trajectory; no F2/F3 authority | Nora qualify kept; H-01 LPS+Trajectory region; second authority path absent |
| SC-04-options-recommendation-1440.png | 2026-08-26T12:03:00.571Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-04 | options + recommendation | Single W2 options path |
| SC-04-humandecision-1440.png | 2026-08-26T12:03:00.726Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-04 | W2 HumanDecision recorded | Single structural HumanDecision |
| C-EC-business-status-1440.png | 2026-08-26T12:03:00.925Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-05 | EC prepared; business status label primary | w2-contract-status = Confirmation requise |
| D-EC-technical-status-audit-1440.png | 2026-08-26T12:03:01.024Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-05 | EC technical details; raw status auditable | w2-contract-status-tech = confirmation_required |
| SC-05-ec-summary-1440.png | 2026-08-26T12:03:01.108Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-05 | EC prepared | EC summary on TrajectorySurface only |
| SC-06-ec-inspection-1440.png | 2026-08-26T12:03:01.259Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-06 | EC inspected | Inspection before Confirmation |
| SC-06-confirmation-1440.png | 2026-08-26T12:03:01.425Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-06 | Confirmation separate from Execute | A11Y-PC-05: confirm ≠ execute |
| SC-07-authorized-1440.png | 2026-08-26T12:03:01.574Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-07 | AUTHORIZED business label | Business-first authorization; Execute separate |
| SC-07-authorized-1024.png | 2026-08-26T12:03:01.704Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-07 / H-02 | authorized responsive 1024 | Responsive authority region |
| SC-07-authorized-390.png | 2026-08-26T12:03:01.803Z | 390×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-07 / H-02 | authorized responsive 390 | Responsive authority region |
| SC-08-09-attempt-terminal-1440.png | 2026-08-26T12:03:01.978Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-08/SC-09 | attempt / terminal after governed execute | Single execute path; no F3 confirm+execute |
| SC-04-or-05-responsive-1024.png | 2026-08-26T12:03:02.175Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-04/05 / H-02 | post-execute workspace 1024 | Responsive workspace after single path |
| SC-04-or-05-responsive-390.png | 2026-08-26T12:03:02.302Z | 390×900 | http://127.0.0.1:3020/studio/projects/prj%3A4f0c213c-e027-4bec-9003-c546212eb1b5 | SC-04/05 / H-02 | post-execute workspace 390 | Responsive workspace after single path |
| SC-07-blocked-1440.png | 2026-08-26T12:03:03.360Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A3d4e7892-de89-42aa-8c56-acddabcc2fc1 | SC-07 | authorization blocked; no attempt | Blocked is textual; Execute absent |
```

No pixel-perfect claim.

---

## 8. Single authority / H-01 / invariants

- Single authority path: **PASS** (F2/F3 product-path still absent)
- H-01 composition: **UNCHANGED** (still `project-state-trajectory-region` / `lps-embedded`)
- Inspect → Confirm: **PASS**
- Confirm ≠ Execute: **PASS**
- Authority → Execute: **PASS**
- Domain files modified: **NONE**
- Runtime/domain status semantics modified: **NO**
- CSS modified by CORR-01: **NO**
- H-02 / H-03 / H-04: **CARRY**
- W4-C: **NOT STARTED**
- REAL: **OUT**

---

## 9. Final Local Git Truth

### 9.1 `git status --short`

```
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
 M projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a.spec.ts
 M projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
?? .tmp-sfia-review/
?? projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
```

### 9.2 `git diff --stat`

```
 .../runningAttemptRefresh.ui.test.tsx              |   8 +-
 .../trajectorySurface.ui.test.tsx                  |  16 +-
 .../uatUxSemanticReserves.ui.test.tsx              |   6 +-
 .../studio-option-a-clean-slate-captures.spec.ts   |   5 +
 ...-option-a-deterministic-cursor-boundary.spec.ts |   5 +
 .../e2e/studio-option-a-negative-states.spec.ts    |   5 +
 .../studio-option-a-new-design-captures.spec.ts    |   5 +
 .../studio-option-a-uat-semantic-reserves.spec.ts  |   5 +
 .../sfia-studio/app/e2e/studio-option-a.spec.ts    |   5 +
 .../e2e/studio-w2-g3-correction-runtime.spec.ts    |  10 +-
 .../studio-w3a-governed-execute-runtime.spec.ts    |  21 +-
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |  17 +-
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |  17 +-
 .../pre-m6-product-ui/NewProjectIntentionPage.tsx  |  21 +-
 .../ProjectWorkspacePage.module.css                |  76 +++++--
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  50 ++++-
 .../features/pre-m6-product-ui/product-tokens.css  |   4 +-
 .../surfaces/ConversationSurface.tsx               |  54 ++++-
 .../pre-m6-product-ui/surfaces/LpsSurface.tsx      |  11 +-
 .../surfaces/TrajectorySurface.module.css          |  20 ++
 .../surfaces/TrajectorySurface.tsx                 | 220 +++++++++++++++------
 21 files changed, 453 insertions(+), 128 deletions(-)
```

### 9.3 `git diff --name-status`

```
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
M	projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a.spec.ts
M	projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```

### 9.4 Hashes

| Item | SHA-256 |
| --- | --- |
| Final consolidated `git diff --binary` | `965fdf1e623335ad4699c9f9954aacab68ef274ba1776b9870d29fc429546dac` |
| Final untracked E2E | `d0154023b4738b3da96f0702240a5844177d9095eea22ee0d90097595bfcdae9` |
| Initial (pre-CORR) binary diff | `a8d1408777e53f3619475ad69ca45453d9f8a3526dcd5d6f20f39b827cc66d02` |
| Initial (pre-CORR) E2E | `342845bbd43549b1239720f52ed39e3590310999bf5917ecabc1c3928c5875ac` |

### 9.5 Per-file SHA-256 (tracked dirty)

```
c699c0b68bc30f517d95e231f11e28c26474a74addc49a7f5f0fd5eee8122bf9  projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
3877de082182027065709d48d77e80b127b4b3dfcc11b398b50eb16e86694bd1  projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
c7ad038be782fc97704bac09f8084d050133675847bd26dd284ee052a007e3ed  projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
8819f32f6d5f828125b79967e27d75db048a5f93fe295c005d5f25ae1df0c680  projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
1ea713414ab98ea9cba1f2c56927e2313b4332cd1dad054b2c71494a833d1573  projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
62832ae05ce6707fb251909e469b2e32c3132b9fc68430bb5df665237e03233f  projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
5d83fd9895df40fa03657b74fd5cc5e5b638df69a08f2dbd7112d0bae8f41312  projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
08e32535ee9652a73d3edea8ed8a6e64e07471f702c4fc56db48e59e0cfe2b7e  projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
1150c277c489c9bbde1d3e99a8e5780c9d56275df3bc0ce202dac6ac8f7df57d  projects/sfia-studio/app/e2e/studio-option-a.spec.ts
762e5f568c627ce371cf683c0c204cbd3761ece5aa4b0e180b0c4207b0c49142  projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
a2730997eb2794209fea9fccb1f6de690ae3d95b133bb15e6532f9982d4d55ac  projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
399251bbf30e1ab8c0dc38e7c07c39963054cb4dc3c8443e778e10779d650cd1  projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
2415a76eb4da0352a362ca9672472ee3b6d5058418e71ee15c72cd76943186ae  projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
45151228f3c0297b6247f6d1ac93cbdeeccd5feae4daa49644b95a5ab0ea4fc8  projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
107958d9ab81263feac47e6e60415f77b91efb636e8a0f6dc34756ab5a411c80  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
aa1321b40b361e5eb01dc6a904dfcf85f5a08113088ed35d27fdeaa05a87373b  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
45926f42d92db838b0b6b967d5e93d6d26c6d304ddd0047488e92545169404b7  projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
9e3b33c679d076f48974b00544255e762065f0c7fb50b1babfa1c0d221fd0e8a  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
bc1f2b96df7bd3e0f43842c1032f7ce9c4aae43aa4d62e12e4f51d807ab03950  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
0559c731c147d4b751b228a95ae4f0508f2965d38d23fba59803da7d50fcf53c  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
b043ca31f1845df58e41bb8f51eb7f40adc433e62942c94b8f6272fafc39ea77  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```

HEAD still `1e17367d…`; origin/main still `1e17367d…`; staged empty; **no project commit**.

---

## 10. X-W4BR-CORR-01 → 20

| ID | Result |
| --- | --- |
| X-W4BR-CORR-01 Local truth at start | PASS |
| X-W4BR-CORR-02 questionnaire méthode absent | PASS |
| X-W4BR-CORR-03 auto-qualify / HD jargon absent | PASS |
| X-W4BR-CORR-04 second chemin d'autorité absent | PASS |
| X-W4BR-CORR-05 S2 functionally unchanged | PASS |
| X-W4BR-CORR-06 H-01 composition unchanged | PASS |
| X-W4BR-CORR-07 EC primary = business label | PASS |
| X-W4BR-CORR-08 raw status technically auditable | PASS |
| X-W4BR-CORR-09 no domain/runtime status semantics change | PASS |
| X-W4BR-CORR-10 inspection before Confirmation | PASS |
| X-W4BR-CORR-11 Confirmation ≠ Execute | PASS |
| X-W4BR-CORR-12 Authority before Execute | PASS |
| X-W4BR-CORR-13 single authority non-regressed | PASS |
| X-W4BR-CORR-14 W2/W3 non-regression | PASS |
| X-W4BR-CORR-15 H-02/03/04 CARRY | PASS |
| X-W4BR-CORR-16 W4-C NOT STARTED | PASS |
| X-W4BR-CORR-17 REAL OUT | PASS |
| X-W4BR-CORR-18 no project commit/push/PR/merge | PASS |
| X-W4BR-CORR-19 correction-only patch scoped | PASS |
| X-W4BR-CORR-20 full consolidated diff in remote handoff | PASS (this publication) |

---

## 11. Blockers / Reserves

### Blockers
NONE

### Reserves / CARRY
- H-02 CARRY
- H-03 CARRY
- H-04 CARRY
- Option A F2/F3 product-path suite skips remain RETIRE LATER (not CORR-01)

---

## 12. Claims / Anti-claims

### Claims
- Presentation micro-gaps A+B closed
- W4-B + W4-BR + CORR-01 consolidated candidate ready for ChatGPT final diff review
- Full tracked diff + full untracked E2E embedded below

### Anti-claims
- Not W4-B/W4-BR CLOSED BY MORRIS
- Not integrated / not W4 CLOSED
- Not H-02/03/04 closed
- Not W4-C started
- Not REAL / READY FOR REAL / runtime v3 ADOPTED
- Not pixel-perfect / WCAG claim

---

## 13. Verdict

**W4-BR CORRECTION PASS WITH NON-BLOCKING CARRIES — TARGETED PRESENTATION GAPS CLOSED — H-02/H-03/H-04 REMAIN CARRY — READY FOR CHATGPT FINAL REVIEW / MORRIS GIT INTEGRATION GATE**

---

## 14. FULL CONSOLIDATED TRACKED DIFF (`git diff` — all 21 dirty files)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
index 9b8af16b..5aa747b0 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
@@ -327,7 +327,7 @@ const RESOLVED_M3 = {

 function Harness() {
   const controller = useProductConversation({ projectId: PROJECT_ID });
-  return <ConversationSurface controller={controller} />;
+  return <ConversationSurface exposeLegacyAuthorityPath controller={controller} />;
 }

 /** findByTestId is presence-only; GO/confirm stay disabled while startTransition keeps busy. */
@@ -368,6 +368,7 @@ describe("Option A running Attempt refresh UI", () => {
     const onRefresh = vi.fn();
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute(),
@@ -399,6 +400,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("keeps the refresh control when continuation stays running", () => {
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute({ reusedExistingAttempt: true }),
@@ -414,6 +416,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("shows Evidence/ReviewBundle and hides refresh after a terminal payload", () => {
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: succeededExecute(),
@@ -433,6 +436,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("does not offer refresh on fixture terminal or before Confirmation", () => {
     const { rerender } = render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3Execute: fixtureExecute(),
         })}
@@ -443,6 +447,7 @@ describe("Option A running Attempt refresh UI", () => {

     rerender(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           canConfirmResolvedM3: true,
@@ -457,6 +462,7 @@ describe("Option A running Attempt refresh UI", () => {
     const onRefresh = vi.fn();
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute(),
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 77fac3c7..186481db 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -251,6 +251,20 @@ describe("W2 TrajectorySurface", () => {
     expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
       "cap:product-temp-artifact",
     );
+    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
+    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
+      "Confirmation requise",
+    );
+    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmation_required",
+    );
+    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
+      "confirmation_required",
+    );
+    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
+      "confirmation_required",
+    );
     // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
     expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

@@ -476,7 +490,7 @@ describe("W2 TrajectorySurface", () => {
     fireEvent.click(screen.getByTestId("w2-authorize-contract"));
     expect(await screen.findByTestId("w2-authorization")).toBeVisible();
     expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
-      "BLOQUÉ — ACTION REQUISE",
+      "Exécution bloquée",
     );
     expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
       "arrêt avant exécution",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
index 7856093b..5bb947a6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
@@ -244,6 +244,7 @@ describe("UAT-UX-03 confirmation surface", () => {
   it("shows authoritative user summary and keeps IDs under technical details", () => {
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED,
           canConfirmResolvedM3: true,
@@ -285,6 +286,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
   it("T3/T10/T11/T12 — REAL success is not fixture and recommendation stays non-authority", () => {
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({ f3Execute: succeededReal() })}
       />,
     );
@@ -312,7 +314,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
     const failed = succeededReal();
     failed.attempt.status = "failed";
     render(
-      <ConversationSurface controller={baseController({ f3Execute: failed })} />,
+      <ConversationSurface exposeLegacyAuthorityPath controller={baseController({ f3Execute: failed })} />,
     );
     expect(screen.getByTestId("f3-result-user-summary")).toHaveTextContent(/échec/);
     expect(screen.getByTestId("f3-result-user-summary")).not.toHaveTextContent(
@@ -326,6 +328,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
     running.contract.status = "executing";
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           f3Execute: running,
           canRefreshResolvedM3Running: true,
@@ -344,6 +347,7 @@ describe("UAT-UX-08 durable rehydrate", () => {
     const confirm = vi.fn();
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           durableEvidenceOutcome: DURABLE_REAL,
           confirmAndExecuteResolvedM3: confirm,
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
index fa0e23c4..7c2cb33e 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
@@ -94,6 +94,11 @@ async function toContract(page: Page) {
 }

 test.describe("Pre-M6 clean-slate captures", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 360_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
index 6ac44381..22f1d132 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
@@ -88,6 +88,11 @@ async function sendGatedStandard(page: Page) {
 }

 test.describe("deterministic Cursor boundary browser tooling", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("B1–B4 running → pending refresh → terminal → reload", async ({
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
index 7eab4563..333361d8 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
@@ -73,6 +73,11 @@ async function goToResolvedContract(page: Page, suffix: string) {
 }

 test.describe("QA-PRE-M6-TEST-01 negative-state harness", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
index 8229f574..86fc2fbc 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
@@ -79,6 +79,11 @@ async function toContract(page: Page) {
 }

 test.describe("Pre-M6 new-design captures", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 300_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
index b94d4aaa..b379f1a3 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
@@ -46,6 +46,11 @@ async function capture(page: Page, id: string): Promise<string> {
 }

 test.describe("PRE-M6 UAT semantic reserves — deterministic browser", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("A–D confirmation → running → succeeded → reload", async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
index ea63a1a2..7cce2e7d 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
@@ -104,6 +104,11 @@ async function sendGatedStandard(page: Page) {
 }

 test.describe("Cycle 9 — F1→F11 durable post-GO happy path", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("F1→F11 happy path + History/Recovery + responsive captures", async ({
diff --git a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
index 378de28d..4b4a524b 100644
--- a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
@@ -94,12 +94,14 @@ test.describe("W2 final-closure /studio product correction proof", () => {
     await expect(input).toBeEnabled({ timeout: 15_000 });
     await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
     await page.getByTestId("project-assistant-send").click();
-    await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
       timeout: 60_000,
     });
+    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+    await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
     await capture(page, "02b-qualified-gate", {
       screen: "ConversationSurface",
-      state: "f2_gate_qualified",
+      state: "qualified_no_f2_decision_gate",
     });

     const trajectory = page.getByTestId("w2-trajectory-panel");
@@ -232,7 +234,7 @@ test.describe("W2 final-closure /studio product correction proof", () => {
       timeout: 30_000,
     });
     await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-      "BLOQUÉ",
+      "Exécution bloquée",
     );
     const blockedReason =
       (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
@@ -272,7 +274,7 @@ test.describe("W2 final-closure /studio product correction proof", () => {
     const outcome = page.getByTestId("w2-authorization-outcome");
     await expect(outcome).toBeVisible();
     const outcomeText = (await outcome.textContent()) ?? "";
-    expect(outcomeText.includes("AUTORISÉ")).toBe(true);
+    expect(outcomeText.includes("Autorisation vérifiée")).toBe(true);
     await expect(page.getByTestId("w2-authorization-reason")).not.toBeEmpty();
     await expect(page.getByTestId("w2-authorization-next")).not.toBeEmpty();

diff --git a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
index 679c6b8e..96b59738 100644
--- a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
@@ -168,9 +168,13 @@ async function openQualifiedStudioProject(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -236,6 +240,13 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
       "product:project-workspace",
     );
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
+      "Confirmation requise",
+    );
+    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmation_required",
+    );
+    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
       "confirmation_required",
     );
     await expect(page.getByTestId("w2-contract-reversibility")).toContainText(
@@ -259,9 +270,13 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {

     await page.getByTestId("w2-confirm-contract").click();
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
-      "confirmed",
+      "Confirmation enregistrée",
       { timeout: 30_000 },
     );
+    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
+      "data-status",
+      "confirmed",
+    );
     await capture(page, "05-confirmed", {
       screen: "TrajectorySurface",
       state: "effect_confirmation_n1_granted",
@@ -272,7 +287,7 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
       timeout: 30_000,
     });
     await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-      "AUTORISÉ",
+      "Autorisation vérifiée",
     );
     await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
     await capture(page, "06-authorized", {
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index 16adf051..d7fed5e5 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -125,9 +125,13 @@ async function openThroughAuthorized(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -153,12 +157,15 @@ async function openThroughAuthorized(page: Page, name: string) {
     { timeout: 30_000 },
   );
   await page.getByTestId("w2-confirm-contract").click();
-  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
-    timeout: 30_000,
-  });
+  await expect(page.getByTestId("w2-contract-status")).toHaveText(
+    "Confirmation enregistrée",
+    {
+      timeout: 30_000,
+    },
+  );
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-    "AUTORISÉ",
+    "Autorisation vérifiée",
     { timeout: 30_000 },
   );

diff --git a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
index b4b8bc47..7e4f54e7 100644
--- a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
@@ -72,9 +72,13 @@ async function openThroughAuthorized(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -100,12 +104,15 @@ async function openThroughAuthorized(page: Page, name: string) {
     { timeout: 30_000 },
   );
   await page.getByTestId("w2-confirm-contract").click();
-  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
-    timeout: 30_000,
-  });
+  await expect(page.getByTestId("w2-contract-status")).toHaveText(
+    "Confirmation enregistrée",
+    {
+      timeout: 30_000,
+    },
+  );
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-    "AUTORISÉ",
+    "Autorisation vérifiée",
     { timeout: 30_000 },
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
index 1a065d28..31321218 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
@@ -19,9 +19,8 @@ function createIdempotencyKey(): string {
 }

 /**
- * PROVISIONAL intention sheet — no dedicated Figma frame exists for creation.
- * See README.md in this folder. Two product fields drive the runtime input:
- * intention becomes the objective, precisions the bounded context.
+ * PROVISIONAL intention sheet — W4-BR aligns labels to UXR-01 (Nom / Intention /
+ * contexte optionnel / Créer + Annuler). Behavior Create/Resume unchanged.
  */
 export function NewProjectIntentionPage() {
   const [name, setName] = useState("");
@@ -231,7 +230,7 @@ export function NewProjectIntentionPage() {

         <div className={styles.field}>
           <label className={styles.label} htmlFor="project-objective">
-            Votre intention
+            Intention du projet
           </label>
           <textarea
             ref={intentionRef}
@@ -265,7 +264,7 @@ export function NewProjectIntentionPage() {

         <div className={styles.field}>
           <label className={styles.label} htmlFor="project-context">
-            Précisions utiles <span className={styles.optional}>(optionnel)</span>
+            Contexte optionnel
           </label>
           <textarea
             id="project-context"
@@ -273,12 +272,13 @@ export function NewProjectIntentionPage() {
             className={styles.textarea}
             rows={3}
             value={precisions}
-            placeholder="Contexte, contraintes connues, ce qu'il faut éviter…"
+            placeholder="Ajoutez uniquement le contexte utile au projet."
             aria-describedby="project-context-help"
             onChange={(event) => setPrecisions(event.target.value)}
           />
           <p className={styles.help} id="project-context-help">
-            Sans précision, votre intention sert aussi de contexte.
+            Sans contexte, votre intention suffit pour créer le projet. Vous
+            pourrez préciser la suite avec Nora ensuite.
           </p>
         </div>

@@ -299,6 +299,13 @@ export function NewProjectIntentionPage() {
           >
             {pending ? "Création…" : "Créer le projet"}
           </button>
+          <Link
+            href="/studio"
+            className={styles.quietButton}
+            data-testid="create-project-cancel"
+          >
+            Annuler
+          </Link>
           <span className={styles.status} role="status" aria-live="polite">
             {pending ? "Création en cours…" : ""}
           </span>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 1f184474..0b74af4b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -109,6 +109,51 @@
   overflow-y: auto;
 }

+/* H-01 Option A — unified piloting region (LPS + Trajectory presentation) */
+.stateTrajectoryRegion {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-width: 0;
+}
+
+.stateTrajectoryHead {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-1);
+  padding: 0 var(--pm6-space-1);
+}
+
+.stateTrajectoryEyebrow {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.1em;
+  text-transform: uppercase;
+  color: var(--pm6-forest);
+}
+
+.stateTrajectoryTitle {
+  margin: 0;
+  font-size: 1.05rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+}
+
+.stateTrajectoryNote {
+  margin: 0;
+  font-size: 0.8rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.stateTrajectoryStack {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-width: 0;
+}
+
 .lpsClose {
   display: none;
   align-self: flex-end;
@@ -128,7 +173,7 @@
   }
 }

-/* ---------- <=1024: project state becomes a drawer ---------- */
+/* ---------- <=1024: stack conversation then État/Trajectoire (H-01) ---------- */

 @media (max-width: 1024px) {
   .layout {
@@ -136,29 +181,28 @@
   }

   .lpsToggle {
-    display: inline-flex;
+    display: none;
   }

   .lpsClose {
-    display: inline-flex;
+    display: none;
   }

   .lpsColumn {
-    position: fixed;
-    top: 0;
-    right: 0;
-    bottom: 0;
-    width: min(420px, 92vw);
-    z-index: 60;
-    background: var(--pm6-canvas-raised);
-    border-left: 1px solid var(--pm6-border);
-    box-shadow: var(--pm6-shadow-raised);
-    padding: var(--pm6-space-4);
-    overflow-y: auto;
+    position: static;
+    top: auto;
+    width: auto;
+    z-index: auto;
+    background: transparent;
+    border-left: none;
+    box-shadow: none;
+    padding: 0;
+    overflow: visible;
   }

-  .lpsClosed {
-    display: none;
+  .lpsClosed,
+  .lpsOpen {
+    display: block;
   }

   .lpsSheet {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 86565b47..4836a276 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -14,7 +14,11 @@ import { TrajectorySurface } from "./surfaces/TrajectorySurface";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

-/** F2/F3 product workspace: conversation dominant, project state alongside. */
+/**
+ * Product workspace: conversation-first, not conversation-only.
+ * H-01 Option A — LPS + ProjectTrajectory share one visual piloting region
+ * (presentation composition only; domain objects remain distinct).
+ */
 export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [result, setResult] = useState<GetProjectResult | null>(null);
   const [durableOutcome, setDurableOutcome] =
@@ -122,7 +126,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           aria-expanded={lpsOpen}
           onClick={() => setLpsOpen((open) => !open)}
         >
-          {lpsOpen ? "Masquer l'état du projet" : "État du projet"}
+          {lpsOpen
+            ? "Masquer l'état et la trajectoire"
+            : "État du projet / Trajectoire"}
         </button>
       </header>

@@ -147,13 +153,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />
           </div>
-          <TrajectorySurface
-            projectId={projectId}
-            recoveryProposeSignal={recoveryProposeSignal}
-            onDurableFactsChanged={() => {
-              void loadProject();
-            }}
-          />
           <HistorySurface result={success} durableOutcome={durableOutcome} />
         </div>

@@ -172,7 +171,38 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             >
               Fermer
             </button>
-            <LpsSurface result={success} />
+            <section
+              className={styles.stateTrajectoryRegion}
+              data-testid="project-state-trajectory-region"
+              aria-label="État du projet et trajectoire"
+            >
+              <header className={styles.stateTrajectoryHead}>
+                <p className={styles.stateTrajectoryEyebrow}>
+                  Pilotage du projet
+                </p>
+                <h2 className={styles.stateTrajectoryTitle}>
+                  État actuel et trajectoire
+                </h2>
+                <p className={styles.stateTrajectoryNote}>
+                  L&apos;état actuel et la trajectoire sont regroupés ici pour
+                  faciliter le pilotage.
+                </p>
+              </header>
+              <div
+                className={styles.stateTrajectoryStack}
+                data-testid="h01-lps-trajectory-composition"
+              >
+                <LpsSurface result={success} />
+                <TrajectorySurface
+                  projectId={projectId}
+                  composition="lps-embedded"
+                  recoveryProposeSignal={recoveryProposeSignal}
+                  onDurableFactsChanged={() => {
+                    void loadProject();
+                  }}
+                />
+              </div>
+            </section>
           </div>
         </div>
       </div>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 0242e1c0..c7983040 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -56,7 +56,7 @@
   --pm6-space-6: 32px;
   --pm6-space-7: 48px;

-  --pm6-lps-width: 320px;
-  --pm6-lps-width-wide: 380px;
+  --pm6-lps-width: 420px;
+  --pm6-lps-width-wide: 480px;
   --pm6-content-max: 1180px;
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 2907fbf2..b382c576 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -48,14 +48,24 @@ function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {

 export type ConversationSurfaceProps = {
   controller: ProductConversationController;
+  /**
+   * TEST / HARVEST harness only. When true, restores historical F2 gate + F3
+   * prepare/confirm-execute affordances. Product `/studio` path must leave this
+   * unset/false so TrajectorySurface remains the sole authority/execute chain.
+   */
+  exposeLegacyAuthorityPath?: boolean;
 };

 /**
- * F2–F8 product conversation surface.
- * Recommendation, HumanDecision and Confirmation stay visually distinct;
- * nothing here grants execution authority or claims durability.
+ * Nora conversation + qualification surface.
+ * Product authority path (HumanDecision / EC / Confirmation / Execute) lives on
+ * TrajectorySurface (W2/W3). Legacy F2/F3 affordances stay behind
+ * `exposeLegacyAuthorityPath` for harvest / RETIRE LATER proofs only.
  */
-export function ConversationSurface({ controller }: ConversationSurfaceProps) {
+export function ConversationSurface({
+  controller,
+  exposeLegacyAuthorityPath = false,
+}: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
   const {
@@ -426,7 +436,30 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {gateOpen ? (
+      {gateOpen && !exposeLegacyAuthorityPath ? (
+        <section
+          className={styles.card}
+          data-testid="product-authority-path-guidance"
+          aria-labelledby={`${fieldId}-authority-guidance`}
+        >
+          <header className={styles.cardHead}>
+            <p className={styles.cardEyebrow}>Suite du parcours</p>
+            <h3
+              id={`${fieldId}-authority-guidance`}
+              className={styles.cardTitle}
+            >
+              Décidez la trajectoire ci-dessous
+            </h3>
+            <p className={styles.cardNote}>
+              La qualification est enregistrée. La décision de trajectoire, le
+              contrat, la confirmation et l&apos;exécution se font dans la
+              section « Trajectoire et décision » — un seul chemin d&apos;autorité.
+            </p>
+          </header>
+        </section>
+      ) : null}
+
+      {gateOpen && exposeLegacyAuthorityPath ? (
         <section
           className={styles.decisionCard}
           data-testid="project-assistant-gate"
@@ -475,7 +508,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f2?.decision ? (
+      {exposeLegacyAuthorityPath && f2?.decision ? (
         <section
           className={styles.cardOk}
           data-testid="project-assistant-decision"
@@ -525,7 +558,8 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {canPrepareResolvedM3 || canPrepareLegacyFixture ? (
+      {exposeLegacyAuthorityPath &&
+      (canPrepareResolvedM3 || canPrepareLegacyFixture) ? (
         <section className={styles.card} data-testid="project-assistant-f3-prepare">
           <header className={styles.cardHead}>
             <p className={styles.cardEyebrow}>Étape suivante</p>
@@ -569,7 +603,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3M3Resolved && !f3Execute ? (
+      {exposeLegacyAuthorityPath && f3M3Resolved && !f3Execute ? (
         <section
           className={styles.contractCard}
           data-testid="project-assistant-f3-contract"
@@ -726,7 +760,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3Prepare && !f3Execute ? (
+      {exposeLegacyAuthorityPath && f3Prepare && !f3Execute ? (
         <section
           className={styles.card}
           data-testid="project-assistant-f3-legacy-contract"
@@ -784,7 +818,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3Execute && attemptLabel ? (
+      {exposeLegacyAuthorityPath && f3Execute && attemptLabel ? (
         <section
           className={styles.card}
           data-testid="project-assistant-f3-execute"
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
index 0e12f557..a931ef3c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
@@ -20,7 +20,7 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
   const nextAction =
     readiness.status === "NOT_READY"
       ? "Poursuivre la qualification avec Nora, puis décider."
-      : `Préparation ${readiness.status} — poursuivre avec Nora.`;
+      : "Poursuivre avec Nora — la préparation enregistrée reste à décider.";

   return (
     <aside
@@ -62,7 +62,6 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
         <section className={styles.block}>
           <h3 className={styles.blockTitle}>Cycle</h3>
           <p className={styles.blockBody}>Cycle rattaché au projet</p>
-          <p className={styles.blockCode}>{livingState.activeCycleInstanceId}</p>
         </section>
       ) : null}

@@ -80,6 +79,14 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
       <details className={styles.diagnostics} data-testid="lps-diagnostics">
         <summary>Détails techniques</summary>
         <dl className={styles.facts}>
+          {livingState.activeCycleInstanceId ? (
+            <div>
+              <dt>Identifiant de cycle</dt>
+              <dd className={styles.blockCode}>
+                {livingState.activeCycleInstanceId}
+              </dd>
+            </div>
+          ) : null}
           <div>
             <dt>Criticité perçue</dt>
             <dd>{project.criticality}</dd>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 99fbcb4c..cf8a4615 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -9,6 +9,11 @@
   padding: var(--pm6-space-5);
 }

+.embedded {
+  box-shadow: none;
+  border-color: var(--pm6-border);
+}
+
 .head {
   display: flex;
   flex-direction: column;
@@ -326,6 +331,21 @@
   font-weight: 600;
 }

+.contractLevel2 {
+  margin: 0;
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-canvas-raised);
+  padding: var(--pm6-space-3);
+  font-size: 0.82rem;
+  color: var(--pm6-muted-strong);
+}
+
+.contractLevel2 summary {
+  cursor: pointer;
+  font-weight: 600;
+}
+
 @media (max-width: 767px) {
   .root {
     padding: var(--pm6-space-4);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 96c54184..30050c95 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -39,8 +39,34 @@ import type {
   W3cPostEvidenceLoopDto,
 } from "@/features/project-assistant/w2/types";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
+import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
 import styles from "./TrajectorySurface.module.css";

+/**
+ * Presentation-only labels for ExecutionContractStatus.
+ * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
+ */
+const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
+  {
+    draft: "Brouillon",
+    proposed: "Proposé",
+    validated: "Validé",
+    confirmation_required: "Confirmation requise",
+    confirmed: "Confirmation enregistrée",
+    executing: "Exécution en cours",
+    completed: "Exécution terminée",
+    failed: "Échec d'exécution",
+    cancelled: "Annulé",
+    superseded: "Remplacé",
+  };
+
+function executionContractStatusLabel(status: string): string {
+  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
+    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
+  }
+  return "État du contrat indisponible";
+}
+
 /** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
 type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

@@ -98,11 +124,17 @@ export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
   recoveryProposeSignal = 0,
+  composition = "standalone",
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
   /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
   recoveryProposeSignal?: number;
+  /**
+   * H-01 Option A: embed visually in the LPS piloting region.
+   * Presentation-only — does not change ProjectTrajectory domain identity.
+   */
+  composition?: "standalone" | "lps-embedded";
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
@@ -555,20 +587,26 @@ export function TrajectorySurface({

   return (
     <section
-      className={styles.root}
+      className={[
+        styles.root,
+        composition === "lps-embedded" ? styles.embedded : "",
+      ]
+        .filter(Boolean)
+        .join(" ")}
       data-testid="w2-trajectory-panel"
+      data-composition={composition}
       aria-labelledby="w2-trajectory-title"
     >
       <header className={styles.head}>
-        <p className={styles.eyebrow}>Trajectoire et décision</p>
+        <p className={styles.eyebrow}>Trajectoire du projet</p>
         <h2 id="w2-trajectory-title" className={styles.title}>
           Options, recommandation, puis votre décision
         </h2>
         <p className={styles.note}>
           Nora instruit des options et recommande. La décision vous appartient :
           une recommandation ne décide jamais et ne rend jamais une trajectoire
-          courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
-          verdict AUTHORIZED, via une action Exécuter explicite (fixture).
+          courante. L&apos;exécution n&apos;est possible qu&apos;après une
+          autorisation vérifiée, via une action Exécuter explicite et distincte.
         </p>
       </header>

@@ -711,7 +749,7 @@ export function TrajectorySurface({
           >
             <p className={styles.blockNote}>
               Qualifier le travail d&apos;exécution réel (indépendant de
-              l&apos;option de trajectoire W2).
+              l&apos;option de trajectoire déjà décidée).
             </p>
             <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
               Opération d&apos;exécution
@@ -774,23 +812,19 @@ export function TrajectorySurface({
           data-testid="w2-contract"
         >
           <h3 id="w2-contract-title" className={styles.blockTitle}>
-            Contrat d&apos;exécution préparé
+            Contrat d&apos;exécution — résumé
           </h3>
+          <p className={styles.blockNote}>
+            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
+            toute confirmation. Confirmer n&apos;exécute pas.
+          </p>
           <dl className={styles.facts} data-testid="w2-contract-facts">
             <div>
-              <dt>Version</dt>
-              <dd data-testid="w2-contract-version">v{contract.version}</dd>
-            </div>
-            <div>
-              <dt>Statut</dt>
-              <dd data-testid="w2-contract-status">{contract.status}</dd>
-            </div>
-            <div>
-              <dt>Action</dt>
+              <dt>Ce qui sera fait</dt>
               <dd data-testid="w2-contract-action">{contract.action}</dd>
             </div>
             <div>
-              <dt>Cible</dt>
+              <dt>Résultat / cible</dt>
               <dd data-testid="w2-contract-target">{contract.target}</dd>
             </div>
             <div>
@@ -798,48 +832,96 @@ export function TrajectorySurface({
               <dd data-testid="w2-contract-scope">{contract.scope}</dd>
             </div>
             <div>
-              <dt>Autorité requise</dt>
-              <dd data-testid="w2-contract-authority">
-                {contract.requiredAuthority}
-              </dd>
-            </div>
-            <div>
-              <dt>Capacités</dt>
-              <dd data-testid="w2-contract-capabilities">
-                {contract.requiredCapabilities.length
-                  ? contract.requiredCapabilities.join(", ")
-                  : "Aucune"}
-              </dd>
-            </div>
-            <div>
-              <dt>Réversibilité</dt>
-              <dd data-testid="w2-contract-reversibility">
-                {contract.reversibility}
-              </dd>
-            </div>
-            <div>
-              <dt>Contraintes</dt>
-              <dd data-testid="w2-contract-constraints">
-                {contract.constraints.length
-                  ? contract.constraints.join(" · ")
-                  : "Aucune"}
-              </dd>
-            </div>
-            <div>
-              <dt>Conditions d&apos;arrêt</dt>
-              <dd data-testid="w2-contract-stops">
-                {contract.stopConditions.length
-                  ? contract.stopConditions.join(" · ")
-                  : "Aucune"}
+              <dt>État du contrat</dt>
+              <dd
+                data-testid="w2-contract-status"
+                data-status={contract.status}
+              >
+                {executionContractStatusLabel(contract.status)}
               </dd>
             </div>
             <div>
-              <dt>Empreinte sémantique</dt>
-              <dd className={styles.code}>
-                {contract.semanticFingerprint.slice(0, 12)}…
+              <dt>Prochaine action utile</dt>
+              <dd>
+                {inspection?.inspectionSufficient
+                  ? contract.status === "confirmation_required"
+                    ? "Confirmer si requis, puis statuer sur l'autorisation"
+                    : "Statuer sur l'autorisation"
+                  : "Inspecter le détail du contrat"}
               </dd>
             </div>
           </dl>
+          <details className={styles.contractLevel2}>
+            <summary>Détails métier du contrat</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Version</dt>
+                <dd data-testid="w2-contract-version">v{contract.version}</dd>
+              </div>
+              <div>
+                <dt>Autorité requise</dt>
+                <dd data-testid="w2-contract-authority">
+                  {contract.requiredAuthority}
+                </dd>
+              </div>
+              <div>
+                <dt>Capacités</dt>
+                <dd data-testid="w2-contract-capabilities">
+                  {contract.requiredCapabilities.length
+                    ? contract.requiredCapabilities.join(", ")
+                    : "Aucune"}
+                </dd>
+              </div>
+              <div>
+                <dt>Réversibilité</dt>
+                <dd data-testid="w2-contract-reversibility">
+                  {contract.reversibility}
+                </dd>
+              </div>
+              <div>
+                <dt>Contraintes</dt>
+                <dd data-testid="w2-contract-constraints">
+                  {contract.constraints.length
+                    ? contract.constraints.join(" · ")
+                    : "Aucune"}
+                </dd>
+              </div>
+              <div>
+                <dt>Conditions d&apos;arrêt</dt>
+                <dd data-testid="w2-contract-stops">
+                  {contract.stopConditions.length
+                    ? contract.stopConditions.join(" · ")
+                    : "Aucune"}
+                </dd>
+              </div>
+            </dl>
+          </details>
+          <details className={styles.technicalDetails}>
+            <summary>Détails techniques du contrat</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Statut technique</dt>
+                <dd
+                  className={styles.code}
+                  data-testid="w2-contract-status-tech"
+                >
+                  {contract.status}
+                </dd>
+              </div>
+              <div>
+                <dt>Empreinte sémantique</dt>
+                <dd className={styles.code} data-testid="w2-contract-fingerprint">
+                  {contract.semanticFingerprint.slice(0, 12)}…
+                </dd>
+              </div>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd className={styles.code} data-testid="w2-contract-id-tech">
+                  {contract.executionContractId}
+                </dd>
+              </div>
+            </dl>
+          </details>

           {amendmentNotice ? (
             <div
@@ -919,7 +1001,7 @@ export function TrajectorySurface({
                     : undefined
                 }
               >
-                Confirmer (effets / autorité)
+                Confirmer mon consentement
               </button>
             ) : null}
             <button
@@ -961,8 +1043,13 @@ export function TrajectorySurface({
           role="status"
         >
           <h3 id="w2-authorization-title" className={styles.blockTitle}>
-            <span data-testid="w2-authorization-outcome">
-              {authorization.outcomeLabel}
+            <span
+              data-testid="w2-authorization-outcome"
+              data-outcome={authorization.outcome}
+            >
+              {authorization.outcome === "AUTHORIZED"
+                ? "Autorisation vérifiée — l'exécution peut être lancée"
+                : "Exécution bloquée"}
             </span>
           </h3>
           <p className={styles.blockBody} data-testid="w2-authorization-reason">
@@ -988,13 +1075,24 @@ export function TrajectorySurface({
               <dt>Inspection</dt>
               <dd>{authorization.inspection.statusLabel}</dd>
             </div>
-            <div>
-              <dt>Trace d&apos;autorité</dt>
-              <dd className={styles.code}>
-                {authorization.authorityReceiptRef}
-              </dd>
-            </div>
           </dl>
+          <details className={styles.technicalDetails}>
+            <summary>Détails techniques d&apos;autorité</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Verdict technique</dt>
+                <dd data-testid="w2-authorization-outcome-tech">
+                  {authorization.outcomeLabel}
+                </dd>
+              </div>
+              <div>
+                <dt>Trace d&apos;autorité</dt>
+                <dd className={styles.code} data-testid="w2-authority-receipt">
+                  {authorization.authorityReceiptRef}
+                </dd>
+              </div>
+            </dl>
+          </details>
           {authorization.outcome === "AUTHORIZED" && !attempt ? (
             <>
               <p
```

---

## 15. FULL UNTRACKED E2E SOURCE

Path: `projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts`
SHA-256: `d0154023b4738b3da96f0702240a5844177d9095eea22ee0d90097595bfcdae9`

```typescript
/**
 * W4-B — Single authority path on canonical `/studio`.
 * Proves F2/F3 authority/execute affordances are not product-visible;
 * W2/W3 remains the sole decision → EC → confirm → authorize → execute chain.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w4-br-corr-01",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.md");
const MANIFEST_JSONL = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: {
    sc: string;
    state: string;
    viewport: { width: number; height: number };
    observation: string;
  },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const timestamp = new Date().toISOString();
  const row = {
    id,
    file: path.basename(file),
    timestamp,
    sha256,
    route: page.url(),
    ...meta,
    provenance:
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-BR-CORR-01 BUSINESS-FIRST COPY + EC STATUS",
  };
  fs.appendFileSync(MANIFEST_JSONL, `${JSON.stringify(row)}\n`);
  fs.appendFileSync(
    MANIFEST,
    `| ${row.file} | ${timestamp} | ${meta.viewport.width}×${meta.viewport.height} | ${page.url()} | ${meta.sc} | ${meta.state} | ${meta.observation} |\n`,
  );
}

async function assertNoSecondAuthorityPath(page: Page) {
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f2-decide-NO_GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("f3-legacy-fixture-prepare-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
}

test.describe("W4-B single authority path /studio", () => {
  test.describe.configure({ timeout: 360_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("qualify → single W2 HD → EC → confirm → authorize → execute; no F3 path", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST_JSONL, "");
    fs.writeFileSync(
      MANIFEST,
      [
        "# W4-BR-CORR-01 runtime captures (business-first copy + EC status)",
        "",
        "| file | timestamp | viewport | route | SC | state | observation |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "",
      ].join("\n"),
    );

    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B SPA ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await expect(page.getByLabel("Intention du projet")).toBeVisible();
    await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
    await expect(page.getByTestId("create-project-cancel")).toBeVisible();
    // W4-BR-CORR-01 — banned internal/method copy absent from Pilote-facing S2.
    await expect(page.locator("body")).not.toContainText(
      "pas un questionnaire méthode",
    );
    await expect(page.locator("body")).not.toContainText(
      "cela ne qualifie pas automatiquement le cycle et ne crée pas de décision humaine",
    );
    await expect(page.locator("#project-context")).toHaveAttribute(
      "placeholder",
      "Ajoutez uniquement le contexte utile au projet.",
    );
    await capture(page, "A-S2-create-form-1440", {
      sc: "S2",
      state: "create form after CORR-01 copy",
      viewport: { width: 1440, height: 900 },
      observation: "Business-first context copy; no method jargon",
    });
    await page.locator("#project-name").fill(name);
    await page
      .locator("#project-objective")
      .fill("W4-B single authority path deterministic");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
      timeout: 30_000,
    });
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-state-trajectory-region")).toBeVisible();
    await expect(page.getByTestId("h01-lps-trajectory-composition")).toBeVisible();
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await expect(page.getByTestId("w2-trajectory-panel")).toHaveAttribute(
      "data-composition",
      "lps-embedded",
    );
    await expect(
      page.getByTestId("project-lps-column").getByTestId("w2-trajectory-panel"),
    ).toBeVisible();
    await expect(page.locator("body")).not.toContainText(
      "sans second chemin d'autorité",
    );
    await expect(page.getByTestId("project-state-trajectory-region")).toContainText(
      "L'état actuel et la trajectoire sont regroupés ici pour faciliter le pilotage.",
    );
    await capture(page, "B-workspace-state-trajectory-note-1440", {
      sc: "H-01",
      state: "État/Trajectoire note after CORR-01",
      viewport: { width: 1440, height: 900 },
      observation: "Pilote-facing note; no authority-path jargon",
    });
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-03-qualified-single-path-1440", {
      sc: "SC-03",
      state: "qualified; guidance to trajectory; no F2/F3 authority",
      viewport: { width: 1440, height: 900 },
      observation: "Nora qualify kept; H-01 LPS+Trajectory region; second authority path absent",
    });

    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("w2-recommendation")).toBeVisible();
    await capture(page, "SC-04-options-recommendation-1440", {
      sc: "SC-04",
      state: "options + recommendation",
      viewport: { width: 1440, height: 900 },
      observation: "Single W2 options path",
    });

    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    // Only one structural decide family: w2-decide-*, no f2-decide-*
    await expect(page.locator("[data-testid^='f2-decide-']")).toHaveCount(0);
    await capture(page, "SC-04-humandecision-1440", {
      sc: "SC-04",
      state: "W2 HumanDecision recorded",
      viewport: { width: 1440, height: 900 },
      observation: "Single structural HumanDecision",
    });

    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    await expect(page.getByTestId("w2-contract-status")).toHaveText(
      "Confirmation requise",
    );
    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
      "confirmation_required",
    );
    await page.getByText("Détails techniques du contrat").click();
    await capture(page, "C-EC-business-status-1440", {
      sc: "SC-05",
      state: "EC prepared; business status label primary",
      viewport: { width: 1440, height: 900 },
      observation: "w2-contract-status = Confirmation requise",
    });
    await capture(page, "D-EC-technical-status-audit-1440", {
      sc: "SC-05",
      state: "EC technical details; raw status auditable",
      viewport: { width: 1440, height: 900 },
      observation: "w2-contract-status-tech = confirmation_required",
    });
    await capture(page, "SC-05-ec-summary-1440", {
      sc: "SC-05",
      state: "EC prepared",
      viewport: { width: 1440, height: 900 },
      observation: "EC summary on TrajectorySurface only",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "SC-06-ec-inspection-1440", {
      sc: "SC-06",
      state: "EC inspected",
      viewport: { width: 1440, height: 900 },
      observation: "Inspection before Confirmation",
    });

    const confirm = page.getByTestId("w2-confirm-contract");
    if (await confirm.isVisible()) {
      await expect(confirm).toBeEnabled();
      await confirm.click();
      await expect(page.getByTestId("w2-contract-status")).toHaveText(
        "Confirmation enregistrée",
        { timeout: 30_000 },
      );
      await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
        "data-status",
        "confirmed",
      );
      await capture(page, "SC-06-confirmation-1440", {
        sc: "SC-06",
        state: "Confirmation separate from Execute",
        viewport: { width: 1440, height: 900 },
        observation: "A11Y-PC-05: confirm ≠ execute",
      });
    }

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Autorisation vérifiée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await capture(page, "SC-07-authorized-1440", {
      sc: "SC-07",
      state: "AUTHORIZED business label",
      viewport: { width: 1440, height: 900 },
      observation: "Business-first authorization; Execute separate",
    });

    for (const w of [1024, 390] as const) {
      await page.setViewportSize({ width: w, height: 900 });
      await capture(page, `SC-07-authorized-${w}`, {
        sc: "SC-07 / H-02",
        state: `authorized responsive ${w}`,
        viewport: { width: w, height: 900 },
        observation: "Responsive authority region",
      });
    }

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({ timeout: 90_000 });
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-08-09-attempt-terminal-1440", {
      sc: "SC-08/SC-09",
      state: "attempt / terminal after governed execute",
      viewport: { width: 1440, height: 900 },
      observation: "Single execute path; no F3 confirm+execute",
    });

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-04-or-05-responsive-1024", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 1024",
      viewport: { width: 1024, height: 900 },
      observation: "Responsive workspace after single path",
    });
    await page.setViewportSize({ width: 390, height: 900 });
    await capture(page, "SC-04-or-05-responsive-390", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 390",
      viewport: { width: 390, height: 900 },
      observation: "Responsive workspace after single path",
    });
  });

  test("negative: blocked authorization shows business label and no Attempt", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B BLOCK ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await page.locator("#project-name").fill(name);
    await page.locator("#project-objective").fill("W4-B blocked auth path");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    // Authorize WITHOUT inspect → blocked
    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Exécution bloquée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
    await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-07-blocked-1440", {
      sc: "SC-07",
      state: "authorization blocked; no attempt",
      viewport: { width: 1440, height: 900 },
      observation: "Blocked is textual; Execute absent",
    });
  });
});
```

---

## 16. Artifact index

| Artifact | Path |
| --- | --- |
| Correction-only patch | `.tmp-sfia-review/w4-br-corr-01/correction-only.patch` |
| Before/after snapshots | `.tmp-sfia-review/w4-br-corr-01/before/` / `after/` |
| Captures | `.tmp-sfia-review/runtime-captures/w4-br-corr-01/` |
| This Review Pack | `.tmp-sfia-review/chatgpt-review.md` |
