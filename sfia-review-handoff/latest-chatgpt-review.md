# SFIA Review Pack FULL — P6 REAL OBSERVABILITY Option B
# PR #580 FINAL SCHEMA VALIDATION CORRECTION

**Horodatage (Europe/Paris):** 2026-10-13 20:46:28 CEST
**GO Morris:** PR #580 FINAL SCHEMA VALIDATION CORRECTION + PUSH — 2026-10-13
**Cycle:** 13 — PR readiness / intégration Git (correction validation strictement bornée)
**Profil:** CRITICAL
**CKC:** routing v2.6 + méthode (pas de CKC inventé)
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Chantier:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION
**Finding d'entrée:** P6-LEDGER-SCHEMA-VALIDATION-P1
**Entry handoff:** 5e055a0d / blob f9887320
**Verdict:** PR #580 SCHEMA VALIDATION CORRECTED / CORRECTIVE COMMIT PUSHED / CI REQUIRED GATE PASS / READY FOR CHATGPT MERGE REVIEW

---

## 1. Git Truth

### Initial (avant correction schéma)
- Worktree: `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b`
- Branch: `fix/p6-real-observability-option-b`
- HEAD attendu/observé: `bfef30db0828b066b3f414499ef0fab0419b5cf6`
- origin/main: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4`
- PR #580: OPEN / DRAFT / base main / head bfef30db
- Dirty local: Review Pack only (`.tmp-sfia-review/chatgpt-review.md`)
- Runtime :3020: INTOUCHABLE (non touché)
- Aucun reset / stash / rebase / clean / changement de worktree

### Final
- Branch: `fix/p6-real-observability-option-b`
- Local HEAD: `62692972c04db3b3a2466a7a952ba37735901eab`
- Remote SHA: `62692972c04db3b3a2466a7a952ba37735901eab`
- origin/main: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` (inchangé — **aucun merge**)
- PR #580: OPEN / DRAFT / base main / head `62692972`
- Dirty restant: `.tmp-sfia-review/chatgpt-review.md` uniquement (hors commit projet)
- Force push: **NO**
- Nouvelle PR: **NO**
- Draft → Ready: **NO**

### status --short (final projet)
```
 M .tmp-sfia-review/chatgpt-review.md
```

---

## 2. Sources / Convergence

Sources lues / appliquées: Build Doctrine, Roadmap, C1, epistemology 33, artifact 35, Nora 08, P6 §T, template cycle, routing v2.6, PRR 04/08/09+manifest, entry handoff 5e055a0d.

**État convergence (post-correction):**
- Option B: GIT CANDIDATE — DRAFT PR #580 (corrective SHA)
- Receipt Product: DETERMINISTICALLY PROVEN
- Ledger externe: DETERMINISTICALLY PROVEN
- Read/write integrity: DETERMINISTICALLY PROVEN **WITH SCHEMA SEMANTIC VALIDATION CLOSED (DET)**
- QA Collection Seam: DETERMINISTICALLY PROVEN
- Operational Campaign Wiring: PENDING
- REAL: NOT PROVEN / OPEN
- P6 GLOBAL: NOT PASSED
- Runtime v3: NON ADOPTED

**Gap fermé (DET):** SCHEMA SEMANTIC VALIDATION (P6-LEDGER-SCHEMA-VALIDATION-P1)
**Exit proof:** aucun reçu v2 aux identités invalides ou statuts inconnus n'est accepté comme preuve valide (write reject + read DEGRADED / integrityPass=false)
**Dette chantier:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION (DET candidate clôture après merge+intégration validée; REAL OPEN)

---

## 3. Finding d'entrée — P6-LEDGER-SCHEMA-VALIDATION-P1

La validation du reçu cognitif v2 contrôlait la **présence** de champs sans qualifier toutes les **valeurs** obligatoires et les **statuts autorisés**.

Conséquence: un JSON avec `logicalTurnId: null`, `projectId: null`, ou `productTerminalStatus: "UNKNOWN_STATUS"` pouvait être considéré valide.

---

## 4. Correction du validateur v2

**Fichier:** `projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts`
**Fonction:** `validateCognitiveReceiptRow()` — validateur **commun** lecture/écriture
(`validateLedgerRowForAppend` + `classifyLedgerRowForRead` → même gate)

### 4.1 Identités
Validées non-null, non-vides, type string:
- `campaignId` (= P6-GLOBAL-INTEGRATED-PRODUCT-QA-01)
- `runId`, `scenarioId`, `logicalTurnId`, `projectId`
- `runId !== logicalTurnId`

### 4.2 Statuts (dérivés des contrats Product existants — pas d'enum inventé)
- `productTerminalStatus` ← AssistantTurnStatus (ok, cognitive_stop, incomplete, stopped, provider_unavailable, provider_error, project_not_found, validation_error, stale, decision_error, prepare_error, execute_error)
- `providerResponseObservation` ← FAKE_DETERMINISTIC | NOT_OBSERVED | RUNNER_RESPONSE_ID_OBSERVED
- `captureStatus` ← CAPTURED
- `providerIdentity` ← fake | openai | unknown
- `presentation` ← test_provider | openai_live
- `proofClassification` ← DETERMINISTIC
- `productRealProofStatus` ← NOT_PROVEN
- `realBoundaryClaim` ← NOT_CLAIMED

Échecs Product légitimes (provider_error, etc.) **conservés** — jamais transformés en ok.
Aucune promotion RUNNER_RESPONSE_ID_OBSERVED → REAL PROVEN.

### 4.3 Invariants de provenance (contrats existants)
- NOT_OBSERVED ⇔ providerResponseId === null
- RUNNER_RESPONSE_ID_OBSERVED ⇔ providerResponseId non-vide
- FAKE_DETERMINISTIC ⇔ providerIdentity=fake ∧ presentation=test_provider
- providerResponseId === "" refusé (utiliser null)
- Fake ≠ REAL (realProofStatus/realBoundaryClaim figés NOT_*)

### 4.4 Numériques
- toolCalls: finite ≥ 0
- usage tokens: null **ou** finite ≥ 0 (null ≠ 0; jamais coercition)
- adaptiveObserve / continuationObserve compteurs: finite ≥ 0 quand présents
- null autorisé sur adaptive/continuation observe objects

### 4.5 Conservation Product
- processLocal ∈ {remembered, failed, skipped}
- durableLedger ∈ {not_authorized_candidate, disabled}
- ok: boolean; failureCode: string | null

### 4.6 Compatibilité historique
- Lignes campagne historiques (kind non-v2): contrat minimal inchangé — **pas de retrofit v2**
- Lecture historique: aucune réécriture / suppression / mutation FAILED
- Reçu v2 invalide sur disque: class `cognitive_receipt_incomplete`, integrityPass=false, DEGRADED
- Writer refuse les mêmes payloads invalides

---

## 5. Fichiers modifiés (correctif uniquement)

| Path | Change |
|---|---|
| `projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts` | M — validation sémantique v2 |
| `projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts` | M — tests V01–V20 (+ non-régression) |

**Hors scope confirmé (non touchés):** Nora, Agents Runner, orchestrateTurn.ts, Product SQLite, QA REAL harnesses, doctrine/roadmap/C1, FinOps, runtime :3020, PRR digests (inchangés — pas d'impact sync requis).

Staging: **explicite** (2 fichiers). Pas de `git add .` / `-A`. Pas de `.tmp-sfia-review`.

---

## 6. Tests déterministes (ZERO OPENAI REAL)

Reconfirm local post-CI:

```
Test Files  4 passed (4)
Tests  65 passed (65)
```

Suites:
- p6.externalEvidenceLedger.d0.test.ts — 35 tests (incl. V01–V20)
- p6.receiptCompleteness.d0.test.ts — 14
- p6.qaCollectionSeam.d0.test.ts — 1
- p6.realObs.optionB.receiptConservation.d0.test.ts — 15

### Couverture V01–V25 (oracles write + read)

| ID | Oracle | Résultat |
|---|---|---|
| V01 | logicalTurnId null refusé (write) | PASS |
| V02 | projectId null refusé (write) | PASS |
| V03 | Identifiants vides refusés | PASS |
| V04 | Identifiants type incorrect refusés | PASS |
| V05 | productTerminalStatus inconnu refusé | PASS |
| V06 | Statuts Product légitimes acceptés | PASS |
| V07 | providerResponseObservation inconnu refusé | PASS |
| V08 | captureStatus inconnu refusé | PASS |
| V09 | Fake accepté sans promotion REAL | PASS |
| V10 | providerResponseId null + NOT_OBSERVED OK | PASS |
| V11 | Contradiction provenance détectée | PASS |
| V12 | Compteurs invalides refusés | PASS |
| V13 | Null tokens légitimes conservés | PASS |
| V14 | Conservation Product invalide refusée | PASS |
| V15 | Reçu v2 correct accepté écriture | PASS |
| V16 | Reçu v2 correct relu HEALTHY | PASS |
| V17 | JSON valide + statut invalide → integrityPass=false | PASS |
| V18 | JSON valide + identité invalide → integrityPass=false | PASS |
| V19 | Historique campagne préservé | PASS |
| V20 | Historique FAILED préservé | PASS |
| V21 | Read/write run uniqueness non régressée | PASS (U*/R*) |
| V22 | Duplicate skip non régressé | PASS (S10/S11) |
| V23 | QA Collection Seam non régressé | PASS |
| V24 | Product status / SQLite inchangés | PASS (S15) |
| V25 | Aucun claim REAL | PASS (S19/S20/V09) |

npm test full local: **NOT EXECUTED — REAL SAFETY BOUNDARY**
typecheck / lint / build (pré-commit local): **PASS**
PRR check: **OK** (digests non modifiés)

---

## 7. Commit correctif / Push

| Item | Value |
|---|---|
| Message | `fix(studio): validate P6 receipt v2 semantics` |
| SHA | `62692972c04db3b3a2466a7a952ba37735901eab` |
| Files | 2 (+440 / −11) |
| Push | normal → `origin/fix/p6-real-observability-option-b` |
| Force | **NO** |

```
62692972 fix(studio): validate P6 receipt v2 semantics
 .../p6.externalEvidenceLedger.d0.test.ts           | 253 +++++++++++++++++++++
 .../p6-campaign-evidence/ledgerRowValidation.ts    | 198 +++++++++++++++-
 2 files changed, 440 insertions(+), 11 deletions(-)
```

---

## 8. PR #580 Draft

| Item | Value |
|---|---|
| URL | https://github.com/mcleland147/sfia-workspace/pull/580 |
| State | OPEN |
| Draft | **True** (préservé) |
| Base | main |
| Head | fix/p6-real-observability-option-b @ `62692972c04db3b3a2466a7a952ba37735901eab` |
| Commits | bfef30db (Option B) + 62692972 (schema semantics) |

---

## 9. Nouvelle CI (SHA 62692972)

Run: https://github.com/mcleland147/sfia-workspace/actions/runs/38448183797
headSha: `62692972c04db3b3a2466a7a952ba37735901eab`
conclusion: **success**

| Check | Qualification |
|---|---|
| Detect SFIA Studio changes | **PASS** (8s) |
| Build and validate SFIA Studio | **PASS** (7m48s) |
| SFIA Studio Required Gate | **PASS** (2s) — observé sur nouveau SHA |

CI REAL: opt-in `describe.skipIf` — workflows applicables n'activent pas RUN_REAL. **ZERO REAL** observé.

---

## 10. Sécurité

- Secrets: aucun secret réel introduit; fixtures DET refusent patterns authorization/secret-like
- Forbidden key fragments + secret-like strings inchangés
- Runtime Product / :3020 non touchés
- Ledger externe QA only — pas de persistence Product SQLite

---

## 11. Fake / Real

| Claim | Status |
|---|---|
| DETERMINISTICALLY VALIDATED RECEIPT V2 SCHEMA | **YES** (DET + CI) |
| CORRECTIVE PR CI QUALIFIED | **YES** (Required Gate PASS @ 62692972) |
| REAL BOUNDARY PROVEN | **NO** — OPEN |
| END-TO-END REAL PROVEN | **NO** |
| Operational Campaign Wiring | **PENDING** |
| T1 REAL PASS / P6 GLOBAL PASS / PRODUCT READY / Runtime v3 ADOPTED / MERGED | **INTERDIT / NON CLAIMÉ** |

---

## 12. Réserves / Dette / Exit

**Réserves:**
- Wiring campagne opérationnelle PENDING
- REAL OPEN
- Merge NON autorisé tant que ChatGPT Merge Readiness + GO Morris Merge distinct

**Dette:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION — DET candidate à clôture après intégration validée post-merge

**Exit proof (DET):** satisfait — null identities / unknown statuses rejetés write+read

**Prochain gate Morris:** ChatGPT Merge Readiness → (si GO) Merge PR #580 → post-merge proof → QA wiring → futur REAL sous GO distinct

---

## 13. Diffs exploitables complets


### Diff A — ledgerRowValidation.ts
```diff
commit 62692972c04db3b3a2466a7a952ba37735901eab
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Oct 13 20:36:51 2026 +0200

    fix(studio): validate P6 receipt v2 semantics

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
index 51f6114a..38657b08 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
@@ -65,14 +65,60 @@ function isNonEmptyString(v: unknown): v is string {
   return typeof v === "string" && v.trim().length > 0;
 }

-function isNullOrNumber(v: unknown): boolean {
-  return v === null || (typeof v === "number" && Number.isFinite(v));
+function isNullOrNonNegNumber(v: unknown): boolean {
+  return (
+    v === null ||
+    (typeof v === "number" && Number.isFinite(v) && (v as number) >= 0)
+  );
 }

 function isNullOrString(v: unknown): boolean {
   return v === null || typeof v === "string";
 }

+/** Product AssistantTurnStatus — from features/project-assistant/types.ts */
+const PRODUCT_TERMINAL_STATUSES = new Set([
+  "ok",
+  "cognitive_stop",
+  "incomplete",
+  "stopped",
+  "provider_unavailable",
+  "provider_error",
+  "project_not_found",
+  "validation_error",
+  "stale",
+  "decision_error",
+  "prepare_error",
+  "execute_error",
+]);
+
+/** ProviderResponseObservation — from cognitiveExecutionReceipt.ts */
+const PROVIDER_RESPONSE_OBSERVATIONS = new Set([
+  "FAKE_DETERMINISTIC",
+  "NOT_OBSERVED",
+  "RUNNER_RESPONSE_ID_OBSERVED",
+]);
+
+const CAPTURE_STATUSES = new Set(["CAPTURED"]);
+
+const CONSERVATION_PROCESS_LOCAL = new Set([
+  "remembered",
+  "failed",
+  "skipped",
+]);
+
+const CONSERVATION_DURABLE_LEDGER = new Set([
+  "not_authorized_candidate",
+  "disabled",
+]);
+
+function oneOf(value: unknown, allowed: Set<string>, label: string): string | null {
+  if (typeof value !== "string" || !allowed.has(value)) {
+    return `${label} invalid`;
+  }
+  return null;
+}
+
 function validateHistoricalCampaignRow(
   row: Record<string, unknown>,
 ): LedgerRowValidationResult {
@@ -156,9 +202,13 @@ function validateProductConservation(value: unknown): string | null {
   }
   const o = value as Record<string, unknown>;
   if (typeof o.ok !== "boolean") return "productConservation.ok";
-  if (typeof o.processLocal !== "string") return "productConservation.processLocal";
-  if (typeof o.durableLedger !== "string") {
-    return "productConservation.durableLedger";
+  if (oneOf(o.processLocal, CONSERVATION_PROCESS_LOCAL, "productConservation.processLocal")) {
+    return "productConservation.processLocal invalid";
+  }
+  if (
+    oneOf(o.durableLedger, CONSERVATION_DURABLE_LEDGER, "productConservation.durableLedger")
+  ) {
+    return "productConservation.durableLedger invalid";
   }
   if (!(o.failureCode === null || typeof o.failureCode === "string")) {
     return "productConservation.failureCode";
@@ -166,9 +216,46 @@ function validateProductConservation(value: unknown): string | null {
   return null;
 }

+function validateNonNegCountFields(adaptive: unknown, continuation: unknown): string | null {
+  if (adaptive != null && typeof adaptive === "object" && !Array.isArray(adaptive)) {
+    const o = adaptive as Record<string, unknown>;
+    for (const key of [
+      "requestedMaxTurns",
+      "effectiveMaxTurns",
+      "floor",
+      "ceiling",
+    ] as const) {
+      const n = o[key];
+      if (typeof n !== "number" || !Number.isFinite(n) || n < 0) {
+        return `adaptiveObserve.${key} must be non-negative finite number`;
+      }
+    }
+  }
+  if (
+    continuation != null &&
+    typeof continuation === "object" &&
+    !Array.isArray(continuation)
+  ) {
+    const o = continuation as Record<string, unknown>;
+    for (const key of [
+      "segmentsExecuted",
+      "missionMaxTurns",
+      "segmentMaxTurns",
+      "allottedTurns",
+    ] as const) {
+      const n = o[key];
+      if (typeof n !== "number" || !Number.isFinite(n) || n < 0) {
+        return `continuationObserve.${key} must be non-negative finite number`;
+      }
+    }
+  }
+  return null;
+}
+
 /**
  * Cognitive receipt rows — schema v2 complete projection required for new writes
  * and for read-integrity of rows that declare ledgerSchemaVersion=2.
+ * Presence alone is insufficient: identities and enums must hold valid values.
  */
 export function validateCognitiveReceiptRow(
   row: Record<string, unknown>,
@@ -211,6 +298,23 @@ export function validateCognitiveReceiptRow(
       };
     }
   }
+
+  // Identities — non-null, non-empty strings (null is NOT acceptable).
+  for (const key of [
+    "runId",
+    "scenarioId",
+    "logicalTurnId",
+    "projectId",
+  ] as const) {
+    if (!isNonEmptyString(row[key])) {
+      return {
+        ok: false,
+        code: "RECEIPT_IDENTITY",
+        message: `${key} must be a non-empty string`,
+      };
+    }
+  }
+
   if (row.campaignId !== P6_CAMPAIGN_ID) {
     return {
       ok: false,
@@ -288,6 +392,28 @@ export function validateCognitiveReceiptRow(
       message: "providerConfigured must be boolean",
     };
   }
+
+  const obsErr = oneOf(
+    row.providerResponseObservation,
+    PROVIDER_RESPONSE_OBSERVATIONS,
+    "providerResponseObservation",
+  );
+  if (obsErr) {
+    return { ok: false, code: "RECEIPT_STATUS", message: obsErr };
+  }
+  const termErr = oneOf(
+    row.productTerminalStatus,
+    PRODUCT_TERMINAL_STATUSES,
+    "productTerminalStatus",
+  );
+  if (termErr) {
+    return { ok: false, code: "RECEIPT_STATUS", message: termErr };
+  }
+  const capErr = oneOf(row.captureStatus, CAPTURE_STATUSES, "captureStatus");
+  if (capErr) {
+    return { ok: false, code: "RECEIPT_STATUS", message: capErr };
+  }
+
   if (!isNullOrString(row.providerResponseId)) {
     return {
       ok: false,
@@ -295,6 +421,45 @@ export function validateCognitiveReceiptRow(
       message: "providerResponseId must be string or null",
     };
   }
+  // Empty string id is not a real observation.
+  if (row.providerResponseId === "") {
+    return {
+      ok: false,
+      code: "RECEIPT_SCHEMA",
+      message: "providerResponseId empty string not allowed (use null)",
+    };
+  }
+
+  // Provenance invariants from Product CognitiveExecutionReceipt contract.
+  if (row.providerResponseObservation === "NOT_OBSERVED") {
+    if (row.providerResponseId !== null) {
+      return {
+        ok: false,
+        code: "PROVENANCE_INVARIANT",
+        message: "NOT_OBSERVED requires providerResponseId=null",
+      };
+    }
+  }
+  if (row.providerResponseObservation === "RUNNER_RESPONSE_ID_OBSERVED") {
+    if (!isNonEmptyString(row.providerResponseId)) {
+      return {
+        ok: false,
+        code: "PROVENANCE_INVARIANT",
+        message: "RUNNER_RESPONSE_ID_OBSERVED requires non-null providerResponseId",
+      };
+    }
+  }
+  if (row.providerResponseObservation === "FAKE_DETERMINISTIC") {
+    if (row.providerIdentity !== "fake" || row.presentation !== "test_provider") {
+      return {
+        ok: false,
+        code: "PROVENANCE_INVARIANT",
+        message:
+          "FAKE_DETERMINISTIC requires providerIdentity=fake and presentation=test_provider",
+      };
+    }
+  }
+
   if (!isNullOrString(row.selectedModelId) || !isNullOrString(row.observedModel)) {
     return {
       ok: false,
@@ -318,14 +483,14 @@ export function validateCognitiveReceiptRow(
   }
   const usage = row.usage as Record<string, unknown>;
   if (
-    !isNullOrNumber(usage.inputTokens) ||
-    !isNullOrNumber(usage.outputTokens) ||
-    !isNullOrNumber(usage.totalTokens)
+    !isNullOrNonNegNumber(usage.inputTokens) ||
+    !isNullOrNonNegNumber(usage.outputTokens) ||
+    !isNullOrNonNegNumber(usage.totalTokens)
   ) {
     return {
       ok: false,
       code: "RECEIPT_SCHEMA",
-      message: "usage tokens must be number or null (null ≠ 0)",
+      message: "usage tokens must be null or non-negative finite number (null ≠ 0)",
     };
   }
   const adaptiveErr = validateAdaptiveObserve(row.adaptiveObserve);
@@ -336,11 +501,22 @@ export function validateCognitiveReceiptRow(
   if (contErr) {
     return { ok: false, code: "RECEIPT_SCHEMA", message: contErr };
   }
-  if (typeof row.toolCalls !== "number" || !Number.isFinite(row.toolCalls)) {
+  const countErr = validateNonNegCountFields(
+    row.adaptiveObserve,
+    row.continuationObserve,
+  );
+  if (countErr) {
+    return { ok: false, code: "RECEIPT_SCHEMA", message: countErr };
+  }
+  if (
+    typeof row.toolCalls !== "number" ||
+    !Number.isFinite(row.toolCalls) ||
+    row.toolCalls < 0
+  ) {
     return {
       ok: false,
       code: "RECEIPT_SCHEMA",
-      message: "toolCalls must be finite number",
+      message: "toolCalls must be non-negative finite number",
     };
   }
   if (typeof row.limitReached !== "boolean") {
```

### Diff B — p6.externalEvidenceLedger.d0.test.ts
```diff
commit 62692972c04db3b3a2466a7a952ba37735901eab
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Oct 13 20:36:51 2026 +0200

    fix(studio): validate P6 receipt v2 semantics

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
index 8d4b64a2..22d19be0 100644
--- a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
@@ -805,4 +805,257 @@ describe("P6 EXTERNAL EVIDENCE LEDGER (DETERMINISTIC)", () => {
     expect(read.rows[0]?.error).toBe("FAILED HISTORICAL");
     expect(fs.readFileSync(ledgerPath, "utf8")).toBe(before);
   });
+
+  function validV2Row(overrides: Record<string, unknown> = {}) {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:v2-valid",
+      projectId: "prj:p6-ledger",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: baseTurn() as never,
+    });
+    const built = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-V-BUILD-TMP",
+      scenarioId: "P6-MIN-09",
+      absolutePath: path.join(workspaceRoot, "scratch-ledger.jsonl"),
+    });
+    // Prefer constructing from capture entry shape without depending on scratch success.
+    const base: Record<string, unknown> = {
+      kind: "cognitive_execution_receipt",
+      ledgerSchemaVersion: 2,
+      campaignId: P6_CAMPAIGN_ID,
+      runId: "P6-V-VALID",
+      scenarioId: "P6-MIN-09",
+      logicalTurnId: receipt.logicalTurnId,
+      projectId: receipt.projectId,
+      runtimeIdentity: receipt.runtimeIdentity,
+      providerIdentity: receipt.providerIdentity,
+      presentation: receipt.presentation,
+      providerConfigured: receipt.providerConfigured,
+      providerResponseId: receipt.providerResponseId,
+      providerResponseObservation: receipt.providerResponseObservation,
+      proofClassification: receipt.proofClassification,
+      productRealProofStatus: receipt.realProofStatus,
+      selectedModelId: receipt.selectedModelId,
+      observedModel: receipt.observedModel,
+      selectedReasoningEffort: receipt.selectedReasoningEffort,
+      usage: { ...receipt.usage },
+      adaptiveObserve: receipt.adaptiveObserve,
+      continuationObserve: receipt.continuationObserve,
+      toolCalls: receipt.toolCalls,
+      limitReached: receipt.limitReached,
+      productTerminalStatus: receipt.productTerminalStatus,
+      productConservation: { ...receipt.conservation },
+      productCapturedAt: receipt.capturedAt,
+      capturedAt: new Date().toISOString(),
+      captureStatus: "CAPTURED",
+      realBoundaryClaim: "NOT_CLAIMED",
+      campaignProofClassification: "DETERMINISTIC",
+    };
+    void built;
+    return { ...base, ...overrides };
+  }
+
+  it("V01/V02/V03/V04 — null/empty/wrong-type identities rejected on write", () => {
+    for (const [key, value] of [
+      ["logicalTurnId", null],
+      ["projectId", null],
+      ["runId", ""],
+      ["scenarioId", ""],
+      ["logicalTurnId", 42],
+      ["projectId", {}],
+    ] as const) {
+      const row = validV2Row({ [key]: value, runId: `P6-V-ID-${key}` });
+      if (key === "runId") row.runId = value as never;
+      const result = appendP6EvidenceLedgerRow(row, { absolutePath: ledgerPath });
+      expect(result.ok).toBe(false);
+      if (!result.ok) {
+        expect(["RECEIPT_IDENTITY", "RECEIPT_SCHEMA", "CAMPAIGN_ROW_REQUIRED_FIELDS"]).toContain(
+          result.code,
+        );
+      }
+    }
+  });
+
+  it("V05/V06 — unknown terminal rejected; legitimate Product statuses accepted", () => {
+    const bad = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-V05-BAD",
+        productTerminalStatus: "UNKNOWN_STATUS",
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(bad.ok).toBe(false);
+    if (!bad.ok) expect(bad.code).toBe("RECEIPT_STATUS");
+
+    for (const status of ["ok", "provider_error", "incomplete", "cognitive_stop"] as const) {
+      const receipt = buildCognitiveExecutionReceipt({
+        logicalTurnId: `ltu:v06-${status}`,
+        projectId: "prj:p6-ledger",
+        presentation: "test_provider",
+        productTerminalStatus: status,
+        turn: status === "provider_error" ? null : (baseTurn() as never),
+      });
+      const captured = captureCognitiveExecutionReceiptToP6Ledger({
+        receipt,
+        runId: `P6-V06-${status}`,
+        scenarioId: "P6-MIN-09",
+        absolutePath: ledgerPath,
+      });
+      expect(captured.ok).toBe(true);
+    }
+  });
+
+  it("V07/V08 — unknown observation/captureStatus rejected", () => {
+    const obs = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-V07",
+        providerResponseObservation: "PROVIDER_CONFIRMED",
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(obs.ok).toBe(false);
+    if (!obs.ok) expect(obs.code).toBe("RECEIPT_STATUS");
+
+    const cap = appendP6EvidenceLedgerRow(
+      validV2Row({ runId: "P6-V08", captureStatus: "MAYBE" }),
+      { absolutePath: ledgerPath },
+    );
+    expect(cap.ok).toBe(false);
+    if (!cap.ok) expect(cap.code).toBe("RECEIPT_STATUS");
+  });
+
+  it("V09/V10/V11 — Fake accepted; null id with NOT_OBSERVED; provenance contradictions rejected", () => {
+    const fake = capture(ledgerPath, { runId: "P6-V09-FAKE" });
+    expect(fake.ok).toBe(true);
+    if (fake.ok) {
+      expect(fake.entry.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
+      expect(fake.entry.productRealProofStatus).toBe("NOT_PROVEN");
+    }
+
+    const nullId = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-V10",
+        providerResponseId: null,
+        providerResponseObservation: "NOT_OBSERVED",
+        providerIdentity: "openai",
+        presentation: "openai_live",
+        providerConfigured: true,
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(nullId.ok).toBe(true);
+
+    const contradiction = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-V11",
+        providerResponseObservation: "NOT_OBSERVED",
+        providerResponseId: "resp_should_not_exist",
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(contradiction.ok).toBe(false);
+    if (!contradiction.ok) expect(contradiction.code).toBe("PROVENANCE_INVARIANT");
+  });
+
+  it("V12/V13/V14 — invalid counters refused; null tokens OK; bad conservation refused", () => {
+    const neg = appendP6EvidenceLedgerRow(
+      validV2Row({ runId: "P6-V12", toolCalls: -1 }),
+      { absolutePath: ledgerPath },
+    );
+    expect(neg.ok).toBe(false);
+
+    const nullTok = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-V13",
+        usage: { inputTokens: null, outputTokens: null, totalTokens: null },
+        providerResponseId: null,
+        providerResponseObservation: "NOT_OBSERVED",
+        providerIdentity: "openai",
+        presentation: "openai_live",
+        providerConfigured: true,
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(nullTok.ok).toBe(true);
+
+    const badCons = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-V14",
+        productConservation: {
+          ok: true,
+          processLocal: "invented",
+          durableLedger: "disabled",
+          failureCode: null,
+        },
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(badCons.ok).toBe(false);
+  });
+
+  it("V15/V16 — valid v2 write + HEALTHY reopen", () => {
+    const ok = appendP6EvidenceLedgerRow(validV2Row({ runId: "P6-V15" }), {
+      absolutePath: ledgerPath,
+    });
+    expect(ok.ok).toBe(true);
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(true);
+    expect(read.rows.some((r) => r.runId === "P6-V15")).toBe(true);
+  });
+
+  it("V17/V18 — invalid status/identity on disk → integrityPass=false", () => {
+    ensureP6EvidenceLedger({ absolutePath: ledgerPath });
+    fs.appendFileSync(
+      ledgerPath,
+      `${JSON.stringify(
+        validV2Row({
+          runId: "P6-V17",
+          productTerminalStatus: "UNKNOWN_STATUS",
+        }),
+      )}\n`,
+      "utf8",
+    );
+    const r1 = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(r1.integrityPass).toBe(false);
+    expect(r1.semanticErrors).toBeGreaterThan(0);
+
+    fs.writeFileSync(ledgerPath, "", "utf8");
+    fs.appendFileSync(
+      ledgerPath,
+      `${JSON.stringify(validV2Row({ runId: "P6-V18", logicalTurnId: null }))}\n`,
+      "utf8",
+    );
+    const r2 = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(r2.integrityPass).toBe(false);
+    expect(r2.semanticErrors).toBeGreaterThan(0);
+  });
+
+  it("V19/V20 — historical campaign + FAILED preserved beside invalidated v2", () => {
+    appendP6EvidenceLedgerRow(
+      {
+        campaignId: P6_CAMPAIGN_ID,
+        scenarioId: "P6-MIN-01",
+        runId: "P6-V19-HIST",
+        ok: false,
+        error: "FAILED HISTORICAL",
+      },
+      { absolutePath: ledgerPath },
+    );
+    const before = fs.readFileSync(ledgerPath, "utf8");
+    fs.appendFileSync(
+      ledgerPath,
+      `${JSON.stringify(validV2Row({ runId: "P6-V20-BAD", projectId: null }))}\n`,
+      "utf8",
+    );
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(false);
+    expect(read.rows.find((r) => r.runId === "P6-V19-HIST")?.error).toBe(
+      "FAILED HISTORICAL",
+    );
+    expect(fs.readFileSync(ledgerPath, "utf8").startsWith(before.trimEnd())).toBe(
+      true,
+    );
+  });
 });
```

---

## 14. Instruction ChatGPT

Lire ce Review Handoff distant.

Vérifier:
- exactitude des validateurs ;
- absence de champs requis acceptés à null ;
- statuts énumérés depuis contrats Product ;
- conservation des valeurs null légitimes (tokens, providerResponseId NOT_OBSERVED) ;
- reader/writer cohérents ;
- tests JSON invalides (write reject + read integrityPass=false) ;
- compatibilité historique ;
- SHA correctif 62692972 ;
- diff PR #580 ;
- nouvelle CI + Required Gate PASS ;
- exclusions hors scope ;
- absence de REAL ;
- absence de merge.

Rendre un verdict de **MERGE READINESS**.

Ne pas autoriser automatiquement: MERGE, REAL, promotion ou cleanup.

---

**FIN DU REVIEW PACK FULL — SCHEMA VALIDATION CORRECTION**
