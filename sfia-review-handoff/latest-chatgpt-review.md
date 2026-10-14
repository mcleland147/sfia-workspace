# SFIA STUDIO — P6 O2 — PR #581 TARGETED CRITICAL FINDINGS CLOSURE
## Review Pack FULL — ChatGPT Critical PR Re-Review

A. Horodatage Europe/Paris: **2026-10-14 11:12:54 CEST**

B. GO Morris consommé: **AUTHORIZED / CONSUMED** (2026-10-14) — targeted closure R-PR581-01 + R-PR581-02 on PR #581 only. MERGE NON AUTORISÉ.

C. Cycle / profil / CKC
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone: P6 — GLOBAL INTEGRATED PRODUCT QA
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Chantier: P6 O2 LINKED EVIDENCE OPERATIONAL WIRING
- Cycle: 13 — PR Readiness / Delivery correction ciblée
- Profil: CRITICAL
- CKC: ckc:studio:qa-validation (principal) + ckc:studio:delivery (guidance)
- Typologie: EVOL / PR CORRECTION

D. Git Truth initial
- Worktree: `/Users/morris/Projects/sfia-workspace-p6-evidence-o2`
- Remote: `https://github.com/mcleland147/sfia-workspace.git`
- Branch: `delivery/sfia-studio-p6-o2-linked-evidence-wiring`
- HEAD entry: `626de1d31de5601dfbbfb3853b5377a5b7ccf576` (= origin/branch)
- origin/main: `aee4878d00f76cbb444977bf7ca370fb9b43fc83` (inchangé)
- Dirty entry: `.tmp-sfia-review/chatgpt-review.md` only (exclu du commit projet) — puis corrections locales
- Entry handoff: commit `d53bb363` / blob `061a7b41`

E. Convergence
- Option B: INTEGRATED ON MAIN
- O2: COMMITTED ON PR BRANCH → corrected on same PR
- Runtime v3: NON ADOPTED
- P6 GLOBAL: NOT PASSED
- Evidence Ledger KEEP; writers KEEP / TARGETED CORRECTION; QA Collection Seam KEEP; O2 linkedQaRunId KEEP
- Archive historique READ-ONLY; REAL harnesses QUARANTINED
- Gaps closed this cycle: R-PR581-01, R-PR581-02

F. Sources lues (Git courant)
- Convergence build doctrine + roadmap
- Product completion cadrage
- Doctrine v3 epistemology / artifact-evidence
- Product simplification cadrage + P6 (J/K/S/T/AQ/AR)
- Cycle template + routing guide
- CKC 08-delivery / 09-qa-validation
- PRR surface (check script)
- Entry Review Handoff `latest-chatgpt-review.md` (d53bb363)
- Code: `p6-campaign-evidence/*` + tests DET

G. PR #581 état initial
- URL: https://github.com/mcleland147/sfia-workspace/pull/581
- OPEN / DRAFT / MERGEABLE
- base: main @ aee4878d
- head entry: 626de1d3

H. Findings initiaux (ChatGPT Critical PR Review)
1. **R-PR581-01** — Linked receipt idempotent retry blocked: `priorLinked.length > 0` cardinality ran before `onDuplicate===skip` for same runId.
2. **R-PR581-02** — Invalid `linkedQaRunId` silently omitted via `typeof === "string"` gate in `buildCompleteCognitiveReceiptLedgerEntry`.

I. Diagnostic R-PR581-01
Under MONO_WRITER lock, O2 link/cardinality checks executed before existing-runId duplicate handling. An identical linked receipt retry with `onDuplicate=skip` hit cardinality ("QA already has linked receipt") instead of `duplicate_skipped`. False non-conservation / blocked honest retry. `onDuplicate=reject` and true new-write cardinality remain required.

J. Correction R-PR581-01
1. Integrity HEALTHY/INVALID/DEGRADED/UNREADABLE check unchanged (blocks before any write).
2. Reordered under lock: **existing runId → skip/reject/conflict FIRST**.
3. O2 target eligibility + campaign/scenario match + QA→0..1 cardinality apply only to **NEW append**.
4. `identityCompatible` now also requires same `linkedQaRunId` (absent≡absent) so same runId + different link → `duplicate_conflict` (R01-G).
5. No new append on skip; MONO_WRITER model unchanged.

K. Diagnostic R-PR581-02
`buildCompleteCognitiveReceiptLedgerEntry` only spread `linkedQaRunId` when `typeof === "string"`, so null/number/boolean disappeared before validation → possible silent historical-unlinked write. `collectP6ProductTurnEvidence` always forwarded `linkedQaRunId: input.linkedQaRunId` (could be `undefined`).

L. Correction R-PR581-02
1. New public `resolveLinkedQaRunIdInput`:
   - absent OR `undefined` → legacy unlinked OK
   - valid non-empty string → linked O2
   - null / number / boolean / empty / whitespace → refuse (`o2_link_rejected`) before build/append
2. Capture fail-closed at public boundary; build throws defensively if invalid reaches it.
3. `collectP6ProductTurnEvidence` forwards link key only when `!== undefined` (R02-K).
4. No schema/structure change; ledgerRowValidation untouched.

M. Contrat D1/D2 préservé
- D1 archive SHA expected `70453185…` unchanged; archive READ-ONLY; no rewrite.
- D2 Option B ledger + mono-writer + durable equivalence preserved; historical unlinked v2 still accepted (R01-L / R02-A / R02-J).

N. Oracles nouveaux (DET in `p6.o2OperationalWiring.d0.test.ts`)
| Oracle | Résultat |
|--------|----------|
| R01-A first linked append | PASS |
| R01-B identical retry skip → duplicate_skipped | PASS |
| R01-C returned entry = persisted | PASS |
| R01-D ledger bytes identical | PASS |
| R01-E single cognitive row | PASS |
| R01-F QA→0..1 | PASS |
| R01-G same runId different link → duplicate_conflict | PASS |
| R01-H durable content mismatch → duplicate_conflict | PASS |
| R01-I second receipt same QA → cardinality refuse | PASS |
| R01-J onDuplicate=reject → duplicate_rejected | PASS |
| R01-K DEGRADED blocks retry | PASS |
| R01-L legacy unlinked non-regression | PASS |
| R02-A absent link → unlinked OK | PASS |
| R02-B valid link OK | PASS |
| R02-C null refuse | PASS |
| R02-D number refuse | PASS |
| R02-E boolean refuse | PASS |
| R02-F empty refuse | PASS |
| R02-G whitespace refuse | PASS |
| R02-H no append | PASS |
| R02-I no silent unlinked | PASS |
| R02-J legacy capture non-regression | PASS |
| R02-K undefined via collect = omit (unlinked) | PASS |
| R02-L no Fake→REAL promotion | PASS |

O. Régressions historiques
- O2-01…O2-36 + CP01 suites rejouées dans le même fichier (35 tests file).
- `p6.externalEvidenceLedger.d0.test.ts` (42), `p6.qaCollectionSeam.d0.test.ts` (1), `p6.receiptCompleteness.d0.test.ts` (14) — PASS.
- Baseline prior 81/81 → **92/92 PASS** (+11 oracles).

P. Résultats tests (local)
```
npx vitest run __tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts \
  __tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts \
  __tests__/p6-campaign-evidence/p6.qaCollectionSeam.d0.test.ts \
  __tests__/p6-campaign-evidence/p6.receiptCompleteness.d0.test.ts
→ Test Files 4 passed | Tests 92 passed (92)
ZERO *.real.test.ts executed. ZERO OpenAI. Runtime :3020 untouched.
```

Q. Typecheck / lint / build
- `npm run typecheck` → PASS
- `npm run lint` → PASS (0 warnings after `_omit` cleanup)
- `npm run build` → PASS (Next.js 15.5.20)

R. PRR
- `node scripts/check-production-runtime-reference.mjs` → `PRODUCTION RUNTIME REFERENCE CONFORMANCE OK`
- No PRR doc edit required for this correction.

S. Fake/Real
- Entry: DETERMINISTIC PROVEN AT TESTED SCOPE
- Exit: DETERMINISTIC CORRECTED AND CI VERIFIED
- FakeConversationProvider only; REAL provider not exercised
- R02-L: FAKE_DETERMINISTIC / NOT_PROVEN / NOT_CLAIMED retained
- Hors scope: REAL BOUNDARY PROVEN, E2E REAL, P6 GLOBAL PASS, RUNTIME V3

T. Sécurité
- No secrets in diff/commit
- CI secret pattern scan PASS
- Writer still refuse DEGRADED; mono-writer lock preserved; no archive mutation

U. Diff complet des modifications (commit 22e699da)

### Manifest exact
```
M projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
M projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
M projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
M projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts
```
4 files, +502 / −45. ledgerRowValidation.ts NOT modified. No orchestrators / doctrine / REAL harness / archive.

### Diff — captureCognitiveExecutionReceipt.ts
```diff
commit 22e699dab2a7cf484af3c5ddfcb7b9e598420adb
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Oct 14 11:05:42 2026 +0200

    fix(studio): preserve O2 linked receipt idempotency

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
index fa701c51..bb335c68 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/captureCognitiveExecutionReceipt.ts
@@ -111,22 +111,63 @@ function cloneJson<T>(value: T): T {
   return value == null ? value : (JSON.parse(JSON.stringify(value)) as T);
 }

+/**
+ * Resolve linkedQaRunId at the public capture boundary (R-PR581-02).
+ *
+ * Contract:
+ * - property absent OR value `undefined` → legacy unlinked (compatible with
+ *   optional forwarding from collectP6ProductTurnEvidence);
+ * - valid non-empty string → linked O2 path;
+ * - null / number / boolean / empty / whitespace → refuse (never silently drop).
+ */
+export function resolveLinkedQaRunIdInput(
+  input: CaptureCognitiveExecutionReceiptInput,
+):
+  | { ok: true; linkedQaRunId: string | undefined }
+  | { ok: false; message: string } {
+  if (!("linkedQaRunId" in input) || input.linkedQaRunId === undefined) {
+    return { ok: true, linkedQaRunId: undefined };
+  }
+  const raw: unknown = input.linkedQaRunId;
+  if (typeof raw !== "string") {
+    return {
+      ok: false,
+      message:
+        "linkedQaRunId must be a non-empty string when provided (invalid runtime type)",
+    };
+  }
+  if (raw.trim().length === 0) {
+    return {
+      ok: false,
+      message: "linkedQaRunId must be a non-empty string when provided",
+    };
+  }
+  return { ok: true, linkedQaRunId: raw };
+}
+
 /**
  * Project Product CognitiveExecutionReceipt → ledger row (complete, redacted metadata).
  * Null stays null. No invented providerResponseId. No token 0-coercion.
+ * Caller must pass a pre-validated linkedQaRunId (or omit it).
  */
 export function buildCompleteCognitiveReceiptLedgerEntry(
   input: CaptureCognitiveExecutionReceiptInput,
   receipt: CognitiveExecutionReceipt,
 ): P6EvidenceLedgerRow {
+  const linkResolved = resolveLinkedQaRunIdInput(input);
+  // Defensive: never silently omit an invalid link field from the built row.
+  // Public capture rejects before append; unit callers must pass valid/absent only.
+  if (!linkResolved.ok) {
+    throw new Error(`buildCompleteCognitiveReceiptLedgerEntry: ${linkResolved.message}`);
+  }
   const entry: P6EvidenceLedgerRow = {
     kind: "cognitive_execution_receipt",
     ledgerSchemaVersion: P6_RECEIPT_LEDGER_SCHEMA_VERSION,
     campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
     runId: input.runId,
     scenarioId: input.scenarioId,
-    ...(typeof input.linkedQaRunId === "string"
-      ? { linkedQaRunId: input.linkedQaRunId }
+    ...(linkResolved.linkedQaRunId !== undefined
+      ? { linkedQaRunId: linkResolved.linkedQaRunId }
       : {}),
     logicalTurnId: receipt.logicalTurnId,
     projectId: receipt.projectId,
@@ -231,13 +272,20 @@ export function diffReceiptAgainstLedgerEntry(
 }

 /**
- * Duplicate skip requires durable content equivalence (tokens/budget/model/…).
+ * Duplicate skip requires durable content equivalence (tokens/budget/model/…)
+ * AND the same linkedQaRunId (absent ≡ absent; R-PR581-01).
  * QA `capturedAt` is excluded. Incomplete historical ≠ v2 complete.
  */
 function identityCompatible(
   existing: P6EvidenceLedgerRow,
   candidate: P6EvidenceLedgerRow,
 ): boolean {
+  if (
+    JSON.stringify(existing.linkedQaRunId) !==
+    JSON.stringify(candidate.linkedQaRunId)
+  ) {
+    return false;
+  }
   return durableLedgerContentEquivalent(existing, candidate);
 }

@@ -311,10 +359,18 @@ export function captureCognitiveExecutionReceiptToP6Ledger(
     };
   }

-  if (
-    typeof input.linkedQaRunId === "string" &&
-    input.linkedQaRunId === input.runId
-  ) {
+  // R-PR581-02 — fail-closed before build/append; never silently drop invalid link.
+  const linkResolved = resolveLinkedQaRunIdInput(input);
+  if (!linkResolved.ok) {
+    return {
+      ok: false,
+      status: "o2_link_rejected",
+      message: linkResolved.message,
+      absolutePath,
+    };
+  }
+  const linkedQaRunId = linkResolved.linkedQaRunId;
+  if (linkedQaRunId !== undefined && linkedQaRunId === input.runId) {
     return {
       ok: false,
       status: "o2_link_rejected",
@@ -323,7 +379,19 @@ export function captureCognitiveExecutionReceiptToP6Ledger(
     };
   }

-  const candidate = buildCompleteCognitiveReceiptLedgerEntry(input, receipt);
+  // Strip invalid/undefined link so build never sees a present-but-empty field.
+  const normalizedInput: CaptureCognitiveExecutionReceiptInput = {
+    ...input,
+    ...(linkedQaRunId !== undefined ? { linkedQaRunId } : {}),
+  };
+  if (linkedQaRunId === undefined) {
+    delete normalizedInput.linkedQaRunId;
+  }
+
+  const candidate = buildCompleteCognitiveReceiptLedgerEntry(
+    normalizedInput,
+    receipt,
+  );
   const validation = validateLedgerRowForAppend(candidate);
   if (!validation.ok) {
     return {
@@ -351,17 +419,39 @@ export function captureCognitiveExecutionReceiptToP6Ledger(
       };
     }

-    // O2 write-boundary link checks under lock (TOCTOU-safe vs concurrent mono-writer).
-    if (typeof input.linkedQaRunId === "string") {
-      const linked = input.linkedQaRunId;
-      if (linked.trim().length === 0) {
+    // R-PR581-01 — recognize identical runId retry BEFORE cardinality reject.
+    const existing = prior.rows.find((r) => r.runId === input.runId);
+    if (existing) {
+      if (onDuplicate === "skip") {
+        if (!identityCompatible(existing, candidate)) {
+          return {
+            ok: false as const,
+            status: "duplicate_conflict" as const,
+            message:
+              "runId already persisted with incompatible identity; refusing false conservation",
+            absolutePath,
+            existing,
+          };
+        }
         return {
-          ok: false as const,
-          status: "o2_link_rejected" as const,
-          message: "linkedQaRunId must be a non-empty string",
+          ok: true as const,
+          status: "duplicate_skipped" as const,
           absolutePath,
+          entry: existing,
         };
       }
+      return {
+        ok: false as const,
+        status: "duplicate_rejected" as const,
+        message: `runId already present: ${input.runId}`,
+        absolutePath,
+        existing,
+      };
+    }
+
+    // O2 write-boundary link checks for NEW append only (TOCTOU-safe under lock).
+    if (linkedQaRunId !== undefined) {
+      const linked = linkedQaRunId;
       const target = prior.rows.find((r) => r.runId === linked);
       if (!target) {
         return {
@@ -414,35 +504,6 @@ export function captureCognitiveExecutionReceiptToP6Ledger(
       }
     }

-    const existing = prior.rows.find((r) => r.runId === input.runId);
-    if (existing) {
-      if (onDuplicate === "skip") {
-        if (!identityCompatible(existing, candidate)) {
-          return {
-            ok: false as const,
-            status: "duplicate_conflict" as const,
-            message:
-              "runId already persisted with incompatible identity; refusing false conservation",
-            absolutePath,
-            existing,
-          };
-        }
-        return {
-          ok: true as const,
-          status: "duplicate_skipped" as const,
-          absolutePath,
-          entry: existing,
-        };
-      }
-      return {
-        ok: false as const,
-        status: "duplicate_rejected" as const,
-        message: `runId already present: ${input.runId}`,
-        absolutePath,
-        existing,
-      };
-    }
-
     const written = appendUnlocked(absolutePath, candidate);
     if (!written.ok) {
       return {

```

### Diff — qaCollectionSeam.ts
```diff
commit 22e699dab2a7cf484af3c5ddfcb7b9e598420adb
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Oct 14 11:05:42 2026 +0200

    fix(studio): preserve O2 linked receipt idempotency

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
index 174d7673..c9c8fc10 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/qaCollectionSeam.ts
@@ -60,14 +60,18 @@ export type P6QaCollectionInput = {
 export function collectP6ProductTurnEvidence(
   input: P6QaCollectionInput,
 ): CaptureCognitiveExecutionReceiptResult {
+  // Forward linkedQaRunId only when provided — omit key when undefined so capture
+  // treats legacy/unlinked calls as truly absent (R-PR581-02 / R02-K).
   return captureCognitiveExecutionReceiptToP6Ledger({
     dto: input.productTurnResult,
     runId: input.runId,
     scenarioId: input.scenarioId,
     campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
-    linkedQaRunId: input.linkedQaRunId,
     absolutePath: input.absolutePath,
     onDuplicate: input.onDuplicate,
+    ...(input.linkedQaRunId !== undefined
+      ? { linkedQaRunId: input.linkedQaRunId }
+      : {}),
   });
 }


```

### Diff — index.ts
```diff
commit 22e699dab2a7cf484af3c5ddfcb7b9e598420adb
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Oct 14 11:05:42 2026 +0200

    fix(studio): preserve O2 linked receipt idempotency

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
index 16fd9dbe..66803265 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/index.ts
@@ -28,6 +28,7 @@ export {
   captureCognitiveExecutionReceiptToP6Ledger,
   appendValidatedP6CampaignLedgerRow,
   buildCompleteCognitiveReceiptLedgerEntry,
+  resolveLinkedQaRunIdInput,
   diffReceiptAgainstLedgerEntry,
   P6_RECEIPT_LEDGER_SCHEMA_VERSION,
   P6_RECEIPT_COMPLETE_FIELD_PATHS,

```

### Diff — p6.o2OperationalWiring.d0.test.ts (tests ajoutés)
```diff
commit 22e699dab2a7cf484af3c5ddfcb7b9e598420adb
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Oct 14 11:05:42 2026 +0200

    fix(studio): preserve O2 linked receipt idempotency

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts
index 0b9e6283..8bf738c3 100644
--- a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.o2OperationalWiring.d0.test.ts
@@ -1229,4 +1229,395 @@ describe("P6 O2 operational wiring (DET)", () => {
     expect(byLink.matches).toHaveLength(1);
     expect(byLink.matches[0]?.runId).toBe("P6-O2-COG-SEAM");
   });
+
+  // ─── R-PR581-01 / R-PR581-02 Critical PR Review closure ───
+
+  it("R01-A…F — linked receipt identical retry → duplicate_skipped (no append)", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R01"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r01",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const input = {
+      receipt,
+      runId: "P6-O2-COG-R01",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-R01",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip" as const,
+    };
+    const first = captureCognitiveExecutionReceiptToP6Ledger(input);
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    expect(first.status).toBe("appended"); // R01-A
+    const bytesBefore = fs.readFileSync(ledgerPath);
+    const retry = captureCognitiveExecutionReceiptToP6Ledger(input);
+    expect(retry.ok).toBe(true);
+    if (!retry.ok) return;
+    expect(retry.status).toBe("duplicate_skipped"); // R01-B
+    expect(retry.entry).toEqual(first.entry); // R01-C
+    expect(Buffer.compare(bytesBefore, fs.readFileSync(ledgerPath))).toBe(0); // R01-D
+    const cog = findP6EvidenceLedgerRowsByRunId("P6-O2-COG-R01", {
+      absolutePath: ledgerPath,
+    });
+    expect(cog.matches).toHaveLength(1); // R01-E
+    const byLink = findP6EvidenceLedgerRowsByLinkedQaRunId("P6-O2-QA-R01", {
+      absolutePath: ledgerPath,
+    });
+    expect(byLink.matches).toHaveLength(1); // R01-F
+    const pair = resolveP6O2LinkedEvidencePair("P6-O2-QA-R01", {
+      absolutePath: ledgerPath,
+    });
+    expect(pair.ok).toBe(true);
+    if (pair.ok) expect(pair.cardinality).toBe("qa_plus_one_receipt");
+  });
+
+  it("R01-G — same runId + different linkedQaRunId → duplicate_conflict", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R01G-A"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R01G-B"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r01g",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    expect(
+      captureCognitiveExecutionReceiptToP6Ledger({
+        receipt,
+        runId: "P6-O2-COG-R01G",
+        scenarioId: "P6-O2-DET-01",
+        linkedQaRunId: "P6-O2-QA-R01G-A",
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const conflict = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-R01G",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-R01G-B",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip",
+    });
+    expect(conflict.ok).toBe(false);
+    if (conflict.ok) return;
+    expect(conflict.status).toBe("duplicate_conflict");
+  });
+
+  it("R01-H — same runId + different durable content → duplicate_conflict", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R01H"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receiptA = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r01h",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn({ usage: { inputTokens: 3, outputTokens: 2, totalTokens: 5, model: "fake-o2-model", providerResponseId: "fake-o2-resp-1" } }) as never,
+    });
+    expect(
+      captureCognitiveExecutionReceiptToP6Ledger({
+        receipt: receiptA,
+        runId: "P6-O2-COG-R01H",
+        scenarioId: "P6-O2-DET-01",
+        linkedQaRunId: "P6-O2-QA-R01H",
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receiptB = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r01h",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn({
+        usage: {
+          inputTokens: 99,
+          outputTokens: 88,
+          totalTokens: 187,
+          model: "fake-o2-model",
+          providerResponseId: "fake-o2-resp-OTHER",
+        },
+      }) as never,
+    });
+    const conflict = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt: receiptB,
+      runId: "P6-O2-COG-R01H",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-R01H",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip",
+    });
+    expect(conflict.ok).toBe(false);
+    if (conflict.ok) return;
+    expect(conflict.status).toBe("duplicate_conflict");
+  });
+
+  it("R01-I — second different receipt for same QA → cardinality refuse", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R01I"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const mk = (logicalTurnId: string, runId: string) =>
+      captureCognitiveExecutionReceiptToP6Ledger({
+        receipt: buildCognitiveExecutionReceipt({
+          logicalTurnId,
+          projectId: "prj:p6-o2",
+          presentation: "test_provider",
+          productTerminalStatus: "ok",
+          turn: fakeTurn() as never,
+        }),
+        runId,
+        scenarioId: "P6-O2-DET-01",
+        linkedQaRunId: "P6-O2-QA-R01I",
+        absolutePath: ledgerPath,
+      });
+    expect(mk("ltu:r01i-a", "P6-O2-COG-R01I-A").ok).toBe(true);
+    const second = mk("ltu:r01i-b", "P6-O2-COG-R01I-B");
+    expect(second.ok).toBe(false);
+    if (second.ok) return;
+    expect(second.status).toBe("o2_link_rejected");
+    expect(second.message).toMatch(/cardinality/i);
+  });
+
+  it("R01-J — onDuplicate=reject remains refuse on linked retry", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R01J"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r01j",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const input = {
+      receipt,
+      runId: "P6-O2-COG-R01J",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-R01J",
+      absolutePath: ledgerPath,
+      onDuplicate: "reject" as const,
+    };
+    expect(captureCognitiveExecutionReceiptToP6Ledger(input).ok).toBe(true);
+    const rejected = captureCognitiveExecutionReceiptToP6Ledger(input);
+    expect(rejected.ok).toBe(false);
+    if (rejected.ok) return;
+    expect(rejected.status).toBe("duplicate_rejected");
+  });
+
+  it("R01-K — DEGRADED ledger blocks linked retry", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R01K"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r01k",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    expect(
+      captureCognitiveExecutionReceiptToP6Ledger({
+        receipt,
+        runId: "P6-O2-COG-R01K",
+        scenarioId: "P6-O2-DET-01",
+        linkedQaRunId: "P6-O2-QA-R01K",
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    fs.appendFileSync(ledgerPath, "{not-json\n", "utf8");
+    const blocked = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-R01K",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-R01K",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip",
+    });
+    expect(blocked.ok).toBe(false);
+    if (blocked.ok) return;
+    expect(blocked.status).toBe("integrity_blocks_capture");
+  });
+
+  it("R01-L / R02-A / R02-J — legacy unlinked v2 non-regression + absent link", () => {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r01l",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const first = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-R01L",
+      scenarioId: "P6-O2-DET-01",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip",
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    expect(first.status).toBe("appended");
+    expect(first.entry.linkedQaRunId).toBeUndefined();
+    const bytesBefore = fs.readFileSync(ledgerPath);
+    const skip = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt,
+      runId: "P6-O2-COG-R01L",
+      scenarioId: "P6-O2-DET-01",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip",
+    });
+    expect(skip.ok).toBe(true);
+    if (!skip.ok) return;
+    expect(skip.status).toBe("duplicate_skipped");
+    expect(Buffer.compare(bytesBefore, fs.readFileSync(ledgerPath))).toBe(0);
+  });
+
+  it("R02-B — valid linkedQaRunId accepted under O2", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R02B"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const linked = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt: buildCognitiveExecutionReceipt({
+        logicalTurnId: "ltu:r02b",
+        projectId: "prj:p6-o2",
+        presentation: "test_provider",
+        productTerminalStatus: "ok",
+        turn: fakeTurn() as never,
+      }),
+      runId: "P6-O2-COG-R02B",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-R02B",
+      absolutePath: ledgerPath,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+    expect(linked.entry.linkedQaRunId).toBe("P6-O2-QA-R02B");
+  });
+
+  it("R02-C…I — invalid linkedQaRunId fail-closed (no silent unlinked append)", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R02INV"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:r02inv",
+      projectId: "prj:p6-o2",
+      presentation: "test_provider",
+      productTerminalStatus: "ok",
+      turn: fakeTurn() as never,
+    });
+    const base = {
+      receipt,
+      runId: "P6-O2-COG-R02INV",
+      scenarioId: "P6-O2-DET-01",
+      absolutePath: ledgerPath,
+    };
+    const cases: Array<{ label: string; linkedQaRunId: unknown }> = [
+      { label: "null", linkedQaRunId: null },
+      { label: "number", linkedQaRunId: 42 },
+      { label: "boolean", linkedQaRunId: true },
+      { label: "empty", linkedQaRunId: "" },
+      { label: "whitespace", linkedQaRunId: "   " },
+    ];
+    for (const c of cases) {
+      const before = fs.existsSync(ledgerPath)
+        ? fs.readFileSync(ledgerPath, "utf8")
+        : "";
+      const result = captureCognitiveExecutionReceiptToP6Ledger({
+        ...base,
+        // force invalid runtime values past the typed surface
+        linkedQaRunId: c.linkedQaRunId as never,
+      });
+      expect(result.ok, `R02 ${c.label} must refuse`).toBe(false);
+      if (result.ok) return;
+      expect(result.status, `R02 ${c.label} status`).toBe("o2_link_rejected");
+      const after = fs.readFileSync(ledgerPath, "utf8");
+      expect(after, `R02 ${c.label} no append`).toBe(before);
+      expect(after.includes("P6-O2-COG-R02INV"), `R02 ${c.label} no silent unlinked`).toBe(
+        false,
+      );
+    }
+  });
+
+  it("R02-K — undefined via collect omits link (legacy unlinked coherent)", async () => {
+    const product = await orchestrateProjectAssistantTurn({
+      projectId: "prj:p6-o2",
+      content: "r02k undefined forward",
+      sessionDbPath,
+    });
+    expect(product.ok).toBe(true);
+    if (!product.ok) return;
+    const collected = collectP6ProductTurnEvidence({
+      productTurnResult: product,
+      runId: "P6-O2-COG-R02K",
+      scenarioId: "P6-O2-DET-01",
+      // linkedQaRunId omitted — must remain truly unlinked
+      absolutePath: ledgerPath,
+    });
+    expect(collected.ok).toBe(true);
+    if (!collected.ok) return;
+    expect(collected.entry.linkedQaRunId).toBeUndefined();
+    // Explicit undefined on collect input also omits (same as absent).
+    const collectedUndef = collectP6ProductTurnEvidence({
+      productTurnResult: product,
+      runId: "P6-O2-COG-R02K-U",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: undefined,
+      absolutePath: ledgerPath,
+    });
+    expect(collectedUndef.ok).toBe(true);
+    if (!collectedUndef.ok) return;
+    expect(collectedUndef.entry.linkedQaRunId).toBeUndefined();
+  });
+
+  it("R02-L — no Fake→REAL promotion on linked capture", () => {
+    expect(
+      appendValidatedP6CampaignLedgerRow(qaRow("P6-O2-QA-R02L"), {
+        absolutePath: ledgerPath,
+      }).ok,
+    ).toBe(true);
+    const linked = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt: buildCognitiveExecutionReceipt({
+        logicalTurnId: "ltu:r02l",
+        projectId: "prj:p6-o2",
+        presentation: "test_provider",
+        productTerminalStatus: "ok",
+        turn: fakeTurn() as never,
+      }),
+      runId: "P6-O2-COG-R02L",
+      scenarioId: "P6-O2-DET-01",
+      linkedQaRunId: "P6-O2-QA-R02L",
+      absolutePath: ledgerPath,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+    expect(linked.entry.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
+    expect(linked.entry.productRealProofStatus).toBe("NOT_PROVEN");
+    expect(linked.entry.realBoundaryClaim).toBe("NOT_CLAIMED");
+  });
 });

```

V. Commit SHA
- Corrective: **`22e699dab2a7cf484af3c5ddfcb7b9e598420adb`**
- Message: `fix(studio): preserve O2 linked receipt idempotency`
- Parent: `626de1d31de5601dfbbfb3853b5377a5b7ccf576` (non amendé)

W. Push remote
- `git push origin HEAD` → `626de1d3..22e699da` on `delivery/sfia-studio-p6-o2-linked-evidence-wiring`
- Local HEAD = remote HEAD = `22e699da`
- main inchangé: `aee4878d`

X. PR #581 état final
- OPEN / DRAFT / MERGEABLE
- headRefOid: `22e699dab2a7cf484af3c5ddfcb7b9e598420adb`
- base: main
- URL: https://github.com/mcleland147/sfia-workspace/pull/581
- Not Ready-for-review conversion; no merge

Y. CI nouveau HEAD
- Run ID: **38539844521**
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/38539844521
- headSha: `22e699dab2a7cf484af3c5ddfcb7b9e598420adb`
- conclusion: **success**

Z. Required Gate
- Job ID 115773945711 — **pass** (4s)
- Detect: pass (10s)
- Build and validate: pass (5m38s) — typecheck/lint/build/vitest/secret scan/trailing whitespace

AA. Réserves
- P6 GLOBAL NOT PASSED
- REAL harnesses NOT migrated / NOT exercised
- Human QA incomplete
- Runtime v3 NON ADOPTED
- Draft PR — merge requires distinct Morris MERGE GO
- CI green ≠ READY FOR MERGE declaration without ChatGPT re-review + Morris GO

AB. Dette / exit
- Findings R-PR581-01 / R-PR581-02 CLOSED by DET on pushed commit
- No parallel architecture; no new ledger/schema
- Next proof path: ChatGPT Critical PR Re-Review → Morris MERGE GO → merge → post-merge → reprise P6

AC. Git Truth final
- Branch: `delivery/sfia-studio-p6-o2-linked-evidence-wiring`
- HEAD: `22e699da` (= origin)
- main: `aee4878d`
- Dirty: `.tmp-sfia-review/chatgpt-review.md` only (pack local; not project commit)
- Range vs main: 626de1d3 + 22e699da

AD. Verdict
**P6 O2 PR #581 TARGETED FINDINGS CLOSED / COMMIT PUSH COMPLETE / CI PASS / READY FOR CHATGPT CRITICAL PR RE-REVIEW.**

NOT declared: MERGED, POST-MERGE VERIFIED, P6 GLOBAL PASS, READY FOR REAL, RUNTIME V3 ADOPTED.

AE. Instruction ChatGPT
Lire ce Review Handoff distant. Vérifier PR #581 HEAD `22e699da`, base main `aee4878d`, diffs ci-dessus, oracles R01-A…L / R02-A…L, non-régressions 92/92, D1/D2, Fake/Real, PRR OK, CI run 38539844521 success + Required Gate pass, réserves. Rendre **CHATGPT CRITICAL PR RE-REVIEW**. Si PASS → recommander **MORRIS MERGE GO**. Ne pas merger automatiquement.

---
Cumulative O2 candidate on branch (for context): `626de1d3` (wiring) + `22e699da` (this fix).
