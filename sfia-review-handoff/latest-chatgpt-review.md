# SFIA Review Pack FULL — P6 REAL OBSERVABILITY Option B
# PR #580 FAKE PROVENANCE PARITY CORRECTION

**Horodatage (Europe/Paris):** 2026-10-13 21:13:41 CEST
**GO Morris:** PR #580 FAKE PROVENANCE PARITY CORRECTION + PUSH — 2026-10-13
**Cycle:** 13 — PR readiness / intégration Git (correction locale bornée)
**Profil:** CRITICAL
**CKC:** routing v2.6 + méthode (pas de CKC inventé)
**Campagne:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Chantier:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION
**Finding:** P6-FAKE-PROVENANCE-PARITY-P1
**Entry handoff:** c3d6725b / blob 17c9eae0
**Verdict:** PR #580 FAKE PROVENANCE PARITY CORRECTED / CORRECTIVE COMMIT PUSHED / CI REQUIRED GATE PASS / READY FOR CHATGPT MERGE REVIEW

---

## 1. Git Truth

### Initial
- Worktree: `/Users/morris/Projects/sfia-workspace-p6-real-observability-option-b`
- Branch: `fix/p6-real-observability-option-b`
- HEAD: `62692972c04db3b3a2466a7a952ba37735901eab`
- origin/main: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4`
- PR #580: OPEN / DRAFT / base main / head 62692972
- Dirty: Review Pack only
- Runtime :3020: INTOUCHABLE

### Final
- Local HEAD: `b6eb7862affa6a70e9d750135b067e2c0b15015b`
- Remote SHA: `b6eb7862affa6a70e9d750135b067e2c0b15015b`
- origin/main: `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` (inchangé — **aucun merge**)
- PR #580: OPEN / DRAFT / base main / head `b6eb7862`
- Dirty restant: `.tmp-sfia-review/chatgpt-review.md` uniquement
- Force push: **NO** / Nouvelle PR: **NO** / Draft→Ready: **NO**

### status --short (final)
```
 M .tmp-sfia-review/chatgpt-review.md
```

---

## 2. Sources / Convergence

Build Doctrine / Roadmap / C1 / epistemology 33 / artifact 35 / Nora 08 / P6 §T / template cycle / routing v2.6 / PRR / entry handoff c3d6725b.

**État:**
- Option B: GIT CANDIDATE — PR #580 DRAFT (corrective SHA b6eb7862)
- Product Receipt: DETERMINISTICALLY PROVEN
- Ledger v2: DETERMINISTICALLY PROVEN **WITH FAKE PROVENANCE PARITY CLOSED (DET)**
- QA Collection Seam: DETERMINISTICALLY PROVEN
- Operational Campaign Wiring: PENDING
- REAL: NOT PROVEN / OPEN
- P6 GLOBAL: NOT PASSED
- Runtime v3: NON ADOPTED

**Gap fermé (DET):** FAKE PROVENANCE PARITY (P6-FAKE-PROVENANCE-PARITY-P1)
**Exit proof:** reçu Product légitime Fake sur openai_live + marqueur `fake-`/`fake_` accepté et conservé sans promotion REAL; contradictions refusées.
**Dette:** P6-REAL-OBS-P0-RECEIPT-CONSERVATION (DET candidate clôture après merge; REAL OPEN)

---

## 3. Finding Product / ledger

Product `classifyProvider()` (cognitiveExecutionReceipt.ts) autorise intentionnellement:

- presentation = openai_live
- providerIdentity = fake
- providerResponseObservation = FAKE_DETERMINISTIC

lorsque `providerResponseId` commence par `fake-` ou `fake_`.

Le ledger exigeait `FAKE_DETERMINISTIC ⇒ presentation=test_provider` — trop restrictif → rejet d'un reçu Product légitime.

---

## 4. Contrat Product exact (référence — non modifié)

`classifyProvider` (lecture seule):

| presentation | providerResponseId | identity | observation | configured |
|---|---|---|---|---|
| test_provider | (any / null) | fake | FAKE_DETERMINISTIC | false |
| openai_live | null / empty | openai | NOT_OBSERVED | true |
| openai_live | startsWith fake- / fake_ | fake | FAKE_DETERMINISTIC | true |
| openai_live | other non-empty | openai | RUNNER_RESPONSE_ID_OBSERVED | true |

Toujours: proofClassification=DETERMINISTIC, realProofStatus=NOT_PROVEN. Jamais PROVIDER_CONFIRMED.

---

## 5. Correction du validateur

**Fichier:** `ledgerRowValidation.ts` — uniquement l'invariant FAKE_DETERMINISTIC.

A. `test_provider` + FAKE + identity=fake + providerConfigured=false → accepté (id peut être null).
B. `openai_live` + FAKE + identity=fake + id explicite fake-/fake_ + providerConfigured=true → accepté.
C. Contradictions refusées: identity≠fake; openai_live Fake sans marqueur; presentation invalide.
D. REAL inchangé: NOT_PROVEN / NOT_CLAIMED / DETERMINISTIC.
E. Pas de second moteur; Product `classifyProvider` non modifié.

Helper: `isExplicitFakeProviderResponseId` — motifs Product uniquement.

---

## 6. Matrice provenance (post-correction)

| Cas | Write | Read / claim |
|---|---|---|
| test_provider Fake | ACCEPT | DETERMINISTIC / NOT_PROVEN |
| openai_live + fake- / fake_ | ACCEPT | DETERMINISTIC / NOT_PROVEN |
| openai_live Fake unmarked | REJECT PROVENANCE_INVARIANT | integrityPass=false si on-disk |
| FAKE + identity=openai | REJECT | — |
| RUNNER_RESPONSE_ID_OBSERVED | ACCEPT | NOT_PROVEN (jamais REAL) |
| NOT_OBSERVED + null id | ACCEPT | — |
| Schéma v2 invalide | REJECT | integrityPass=false |

---

## 7. Fichiers modifiés

| Path | Change |
|---|---|
| `projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts` | M — Fake parity |
| `projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts` | M — FP01–FP16 |

Hors scope confirmé: Nora, Runner, orchestrateTurn, types.ts, SQLite, doctrine, PRR digests (inchangés).

---

## 8. Tests DET (ZERO OPENAI REAL)

```
Test Files  4 passed (4)
Tests  72 passed (72)
```

| ID | Oracle | Result |
|---|---|---|
| FP01 | Product receipt openai_live + fake-resp-det-01 → Fake/FAKE/NOT_PROVEN | PASS |
| FP02 | QA seam collectP6ProductTurnEvidence capture OK | PASS |
| FP03 | Readback HEALTHY + champs conservés + NOT_CLAIMED | PASS |
| FP04 | fake_ underscore id | PASS |
| FP05 | test_provider historique | PASS |
| FP06 | openai_live Fake unmarked refused | PASS |
| FP07 | FAKE + identity=openai refused | PASS |
| FP08 | RUNNER non promu REAL | PASS |
| FP09 | NOT_OBSERVED + null | PASS |
| FP10 | schéma v2 invalide refusé | PASS |
| FP11 | reader/writer alignés | PASS |
| FP12 | historique campagne | PASS |
| FP13 | FAILED historique | PASS |
| FP14 | unicité runId | PASS |
| FP15 | duplicate skip | PASS |
| FP16 | SQLite Product inchangé | PASS |

Non-régression V01–V25 + S*/R*/U* conservée (42 tests ledger + suites adjacentes).

npm test full: **NOT EXECUTED — REAL SAFETY BOUNDARY**
typecheck / lint / build: **PASS**
PRR: **OK** (digests non modifiés)
CI workflow: pas de RUN_REAL / OPENAI secrets injectés sur PR path.

---

## 9. Commit / Push / PR / CI

| Item | Value |
|---|---|
| Message | `fix(studio): align P6 fake provenance validation` |
| SHA | `b6eb7862affa6a70e9d750135b067e2c0b15015b` |
| Files | 2 (+439 / −3) |
| Push | normal → origin/fix/p6-real-observability-option-b |
| Force | **NO** |
| PR | #580 OPEN / DRAFT / base main / head b6eb7862 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/580 |

### Nouvelle CI (SHA b6eb7862)
Run: https://github.com/mcleland147/sfia-workspace/actions/runs/38451774116

| Check | Qualification |
|---|---|
| Detect SFIA Studio changes | **PASS** (53s) |
| Build and validate SFIA Studio | **PASS** (8m17s) |
| SFIA Studio Required Gate | **PASS** (3s) — observé sur nouveau SHA |

CI antérieure #738 / 62692972 **ne qualifie pas** ce commit.

---

## 10. Sécurité / Fake-Real

- Aucun secret; fixtures DET; Product/SQLite/:3020 intacts
- Fake explicite ≠ REAL; RUNNER ≠ REAL; DETERMINISTIC ≠ END-TO-END REAL
- Claims interdits non revendiqués: T1 REAL / P6 GLOBAL / PRODUCT READY / v3 ADOPTED / MERGED

Niveau atteint: **DETERMINISTICALLY PROVEN PRODUCT/LEDGER FAKE PROVENANCE PARITY**

---

## 11. Réserves / Dette / Gates

Wiring PENDING · REAL OPEN · Merge non autorisé sans GO Morris Merge distinct.

Dette: P6-REAL-OBS-P0-RECEIPT-CONSERVATION.

Prochain gate: **ChatGPT Merge Readiness** → GO Morris Merge distinct → post-merge proof → QA wiring → futur REAL sous GO distinct.

---

## 12. Diffs exploitables complets


### Diff A — ledgerRowValidation.ts
```diff
commit b6eb7862affa6a70e9d750135b067e2c0b15015b
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Oct 13 21:03:11 2026 +0200

    fix(studio): align P6 fake provenance validation

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts b/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
index 38657b08..acaed52a 100644
--- a/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
+++ b/projects/sfia-studio/app/lib/p6-campaign-evidence/ledgerRowValidation.ts
@@ -76,6 +76,18 @@ function isNullOrString(v: unknown): boolean {
   return v === null || typeof v === "string";
 }

+/**
+ * Explicit Fake markers — mirrors Product classifyProvider()
+ * (cognitiveExecutionReceipt.ts). Do not invent additional patterns.
+ */
+function isExplicitFakeProviderResponseId(id: unknown): boolean {
+  return (
+    typeof id === "string" &&
+    id.length > 0 &&
+    (id.startsWith("fake-") || id.startsWith("fake_"))
+  );
+}
+
 /** Product AssistantTurnStatus — from features/project-assistant/types.ts */
 const PRODUCT_TERMINAL_STATUSES = new Set([
   "ok",
@@ -449,13 +461,48 @@ export function validateCognitiveReceiptRow(
       };
     }
   }
+  // FAKE_DETERMINISTIC — Product classifyProvider parity (never promote to REAL):
+  //   A. test_provider → fake (id may be null; providerConfigured=false)
+  //   B. openai_live + explicit fake-/fake_ id → fake (providerConfigured=true)
   if (row.providerResponseObservation === "FAKE_DETERMINISTIC") {
-    if (row.providerIdentity !== "fake" || row.presentation !== "test_provider") {
+    if (row.providerIdentity !== "fake") {
+      return {
+        ok: false,
+        code: "PROVENANCE_INVARIANT",
+        message: "FAKE_DETERMINISTIC requires providerIdentity=fake",
+      };
+    }
+    if (row.presentation === "test_provider") {
+      if (row.providerConfigured !== false) {
+        return {
+          ok: false,
+          code: "PROVENANCE_INVARIANT",
+          message:
+            "FAKE_DETERMINISTIC on test_provider requires providerConfigured=false",
+        };
+      }
+    } else if (row.presentation === "openai_live") {
+      if (!isExplicitFakeProviderResponseId(row.providerResponseId)) {
+        return {
+          ok: false,
+          code: "PROVENANCE_INVARIANT",
+          message:
+            "FAKE_DETERMINISTIC on openai_live requires explicit fake-/fake_ providerResponseId",
+        };
+      }
+      if (row.providerConfigured !== true) {
+        return {
+          ok: false,
+          code: "PROVENANCE_INVARIANT",
+          message:
+            "FAKE_DETERMINISTIC on openai_live requires providerConfigured=true",
+        };
+      }
+    } else {
       return {
         ok: false,
         code: "PROVENANCE_INVARIANT",
-        message:
-          "FAKE_DETERMINISTIC requires providerIdentity=fake and presentation=test_provider",
+        message: "FAKE_DETERMINISTIC presentation invalid",
       };
     }
   }
```

### Diff B — p6.externalEvidenceLedger.d0.test.ts
```diff
commit b6eb7862affa6a70e9d750135b067e2c0b15015b
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Oct 13 21:03:11 2026 +0200

    fix(studio): align P6 fake provenance validation

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
index 22d19be0..152b23aa 100644
--- a/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/p6-campaign-evidence/p6.externalEvidenceLedger.d0.test.ts
@@ -13,6 +13,7 @@ import {
   buildCognitiveExecutionReceipt,
   clearCognitiveExecutionReceiptRegistryForTests,
 } from "@/features/project-assistant/cognitiveExecutionReceipt";
+import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
 import {
   appendP6EvidenceLedgerRow,
   captureCognitiveExecutionReceiptToP6Ledger,
@@ -1058,4 +1059,392 @@ describe("P6 EXTERNAL EVIDENCE LEDGER (DETERMINISTIC)", () => {
       true,
     );
   });
+
+  function productDtoWithReceipt(
+    receipt: ReturnType<typeof buildCognitiveExecutionReceipt>,
+  ): ProjectAssistantSendResult {
+    return {
+      ok: true,
+      status: "ok",
+      text: "fake provenance parity",
+      mode: "fixture",
+      presentation: receipt.presentation,
+      toolRounds: 0,
+      toolCalls: receipt.toolCalls,
+      sources: [],
+      toolEvents: [],
+      project: {
+        projectId: receipt.projectId,
+        name: "Parity",
+        shortReference: "PAR",
+        objective: "Fake provenance parity",
+        contextSummary: "FP",
+        criticality: "STANDARD",
+        constraints: [],
+        lpsId: "lps:fp",
+        lpsVersion: 1,
+        lpsCreatedAt: "2026-10-13T00:00:00.000Z",
+        doctrineId: "pkg:studio-v3-oa",
+        doctrineVersion: "1.0.0",
+        doctrineDigest: "digest:fp",
+        doctrineStatus: "RESOLVED",
+        runtimeMode: "LOCAL_PROCESS",
+        persistence: "PARTIAL",
+        readiness: "NOT_READY",
+      },
+      ephemeralNotice: "",
+      logicalTurnId: receipt.logicalTurnId,
+      cognitiveExecutionReceipt: receipt,
+    };
+  }
+
+  it("FP01/FP02/FP03 — Product openai_live + fake- id → QA seam → HEALTHY readback (no REAL)", () => {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:fp01-live-fake",
+      projectId: "prj:p6-ledger",
+      presentation: "openai_live",
+      productTerminalStatus: "ok",
+      turn: baseTurn({
+        usage: {
+          inputTokens: 3,
+          outputTokens: 2,
+          totalTokens: 5,
+          model: "fake-test-model",
+          providerResponseId: "fake-resp-det-01",
+        },
+      }) as never,
+    });
+    expect(receipt.providerIdentity).toBe("fake");
+    expect(receipt.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
+    expect(receipt.presentation).toBe("openai_live");
+    expect(receipt.providerConfigured).toBe(true);
+    expect(receipt.realProofStatus).toBe("NOT_PROVEN");
+    expect(receipt.proofClassification).toBe("DETERMINISTIC");
+
+    const beforeDb = fs.existsSync(sessionDbPath)
+      ? fs.readFileSync(sessionDbPath)
+      : null;
+    const collected = collectP6ProductTurnEvidence({
+      productTurnResult: productDtoWithReceipt(receipt),
+      runId: "P6-FP01-LIVE-FAKE",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+    });
+    expect(collected.ok).toBe(true);
+    if (!collected.ok) return;
+    expect(collected.status).toBe("appended");
+    expect(collected.entry.providerIdentity).toBe("fake");
+    expect(collected.entry.providerResponseObservation).toBe(
+      "FAKE_DETERMINISTIC",
+    );
+    expect(collected.entry.presentation).toBe("openai_live");
+    expect(collected.entry.providerResponseId).toBe("fake-resp-det-01");
+    expect(collected.entry.productRealProofStatus).toBe("NOT_PROVEN");
+    expect(collected.entry.realBoundaryClaim).toBe("NOT_CLAIMED");
+    expect(collected.entry.proofClassification).toBe("DETERMINISTIC");
+
+    const reopened = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(reopened.integrityPass).toBe(true);
+    const row = reopened.rows.find((r) => r.runId === "P6-FP01-LIVE-FAKE");
+    expect(row?.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
+    expect(row?.presentation).toBe("openai_live");
+    expect(row?.providerIdentity).toBe("fake");
+    expect(row?.productRealProofStatus).toBe("NOT_PROVEN");
+    expect(row?.realBoundaryClaim).toBe("NOT_CLAIMED");
+    expect(row?.logicalTurnId).toBe("ltu:fp01-live-fake");
+    if (beforeDb) {
+      expect(Buffer.compare(fs.readFileSync(sessionDbPath), beforeDb)).toBe(0);
+    } else {
+      expect(fs.existsSync(sessionDbPath)).toBe(false);
+    }
+  });
+
+  it("FP04 — openai_live + fake_ id accepted via Product→QA→ledger", () => {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:fp04-underscore",
+      projectId: "prj:p6-ledger",
+      presentation: "openai_live",
+      productTerminalStatus: "ok",
+      turn: baseTurn({
+        usage: {
+          inputTokens: 1,
+          outputTokens: 1,
+          totalTokens: 2,
+          model: "fake-test-model",
+          providerResponseId: "fake_resp_det_underscore",
+        },
+      }) as never,
+    });
+    expect(receipt.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
+    expect(receipt.providerIdentity).toBe("fake");
+
+    const collected = collectP6ProductTurnEvidence({
+      productTurnResult: productDtoWithReceipt(receipt),
+      runId: "P6-FP04-FAKE-UNDERSCORE",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+    });
+    expect(collected.ok).toBe(true);
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(true);
+    expect(
+      read.rows.find((r) => r.runId === "P6-FP04-FAKE-UNDERSCORE")
+        ?.providerResponseId,
+    ).toBe("fake_resp_det_underscore");
+  });
+
+  it("FP05 — test_provider Fake historique toujours accepté", () => {
+    const ok = capture(ledgerPath, { runId: "P6-FP05-TEST-PROVIDER" });
+    expect(ok.ok).toBe(true);
+    if (!ok.ok) return;
+    expect(ok.entry.presentation).toBe("test_provider");
+    expect(ok.entry.providerResponseObservation).toBe("FAKE_DETERMINISTIC");
+    expect(ok.entry.providerConfigured).toBe(false);
+    expect(ok.entry.productRealProofStatus).toBe("NOT_PROVEN");
+  });
+
+  it("FP06/FP07 — openai_live Fake unmarked + FAKE/openai identity refused", () => {
+    const unmarked = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-FP06-UNMARKED",
+        presentation: "openai_live",
+        providerIdentity: "fake",
+        providerResponseObservation: "FAKE_DETERMINISTIC",
+        providerConfigured: true,
+        providerResponseId: "resp_not_an_explicit_fake_marker",
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(unmarked.ok).toBe(false);
+    if (!unmarked.ok) expect(unmarked.code).toBe("PROVENANCE_INVARIANT");
+
+    const wrongIdentity = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-FP07-OPENAI-ID",
+        presentation: "openai_live",
+        providerIdentity: "openai",
+        providerResponseObservation: "FAKE_DETERMINISTIC",
+        providerConfigured: true,
+        providerResponseId: "fake-resp-should-be-fake-identity",
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(wrongIdentity.ok).toBe(false);
+    if (!wrongIdentity.ok) expect(wrongIdentity.code).toBe("PROVENANCE_INVARIANT");
+  });
+
+  it("FP08/FP09/FP10 — RUNNER not REAL; NOT_OBSERVED+null OK; invalid v2 refused", () => {
+    const runner = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:fp08-runner",
+      projectId: "prj:p6-ledger",
+      presentation: "openai_live",
+      productTerminalStatus: "ok",
+      turn: baseTurn({
+        usage: {
+          inputTokens: 1,
+          outputTokens: 1,
+          totalTokens: 2,
+          model: "gpt-6-luna",
+          providerResponseId: "resp_runner_observed_not_real",
+        },
+      }) as never,
+    });
+    expect(runner.providerResponseObservation).toBe(
+      "RUNNER_RESPONSE_ID_OBSERVED",
+    );
+    const runnerCap = captureCognitiveExecutionReceiptToP6Ledger({
+      receipt: runner,
+      runId: "P6-FP08-RUNNER",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+    });
+    expect(runnerCap.ok).toBe(true);
+    if (runnerCap.ok) {
+      expect(runnerCap.entry.productRealProofStatus).toBe("NOT_PROVEN");
+      expect(runnerCap.entry.realBoundaryClaim).toBe("NOT_CLAIMED");
+      expect(runnerCap.entry.proofClassification).toBe("DETERMINISTIC");
+    }
+
+    const notObs = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-FP09-NOT-OBS",
+        providerResponseId: null,
+        providerResponseObservation: "NOT_OBSERVED",
+        providerIdentity: "openai",
+        presentation: "openai_live",
+        providerConfigured: true,
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(notObs.ok).toBe(true);
+
+    const bad = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-FP10-BAD",
+        productTerminalStatus: "NOT_A_STATUS",
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(bad.ok).toBe(false);
+  });
+
+  it("FP11/FP12/FP13 — reader/writer align; historique + FAILED préservés", () => {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:fp11",
+      projectId: "prj:p6-ledger",
+      presentation: "openai_live",
+      productTerminalStatus: "ok",
+      turn: baseTurn({
+        usage: {
+          inputTokens: 1,
+          outputTokens: 1,
+          totalTokens: 2,
+          model: "fake-test-model",
+          providerResponseId: "fake-fp11-rw",
+        },
+      }) as never,
+    });
+    const write = collectP6ProductTurnEvidence({
+      productTurnResult: productDtoWithReceipt(receipt),
+      runId: "P6-FP11-RW",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+    });
+    expect(write.ok).toBe(true);
+
+    appendP6EvidenceLedgerRow(
+      {
+        campaignId: P6_CAMPAIGN_ID,
+        scenarioId: "P6-MIN-01",
+        runId: "P6-FP12-HIST",
+        ok: true,
+      },
+      { absolutePath: ledgerPath },
+    );
+    appendP6EvidenceLedgerRow(
+      {
+        campaignId: P6_CAMPAIGN_ID,
+        scenarioId: "P6-MIN-01",
+        runId: "P6-FP13-FAIL",
+        ok: false,
+        error: "FAILED FP HISTORICAL",
+      },
+      { absolutePath: ledgerPath },
+    );
+
+    // Writer refuses unmarked openai_live Fake; reader detects same on disk.
+    const refuse = appendP6EvidenceLedgerRow(
+      validV2Row({
+        runId: "P6-FP11-REFUSE",
+        presentation: "openai_live",
+        providerIdentity: "fake",
+        providerResponseObservation: "FAKE_DETERMINISTIC",
+        providerConfigured: true,
+        providerResponseId: "resp_unmarked",
+      }),
+      { absolutePath: ledgerPath },
+    );
+    expect(refuse.ok).toBe(false);
+
+    const beforeCorrupt = fs.readFileSync(ledgerPath, "utf8");
+    fs.appendFileSync(
+      ledgerPath,
+      `${JSON.stringify(
+        validV2Row({
+          runId: "P6-FP11-DISK-BAD",
+          presentation: "openai_live",
+          providerIdentity: "fake",
+          providerResponseObservation: "FAKE_DETERMINISTIC",
+          providerConfigured: true,
+          providerResponseId: "resp_unmarked_on_disk",
+        }),
+      )}\n`,
+      "utf8",
+    );
+    const read = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(read.integrityPass).toBe(false);
+    expect(read.rows.find((r) => r.runId === "P6-FP11-RW")).toBeTruthy();
+    expect(read.rows.find((r) => r.runId === "P6-FP12-HIST")).toBeTruthy();
+    expect(read.rows.find((r) => r.runId === "P6-FP13-FAIL")?.error).toBe(
+      "FAILED FP HISTORICAL",
+    );
+    expect(fs.readFileSync(ledgerPath, "utf8").startsWith(beforeCorrupt.trimEnd())).toBe(
+      true,
+    );
+  });
+
+  it("FP14/FP15/FP16 — unicité + duplicate skip + SQLite inchangé", () => {
+    const receipt = buildCognitiveExecutionReceipt({
+      logicalTurnId: "ltu:fp14",
+      projectId: "prj:p6-ledger",
+      presentation: "openai_live",
+      productTerminalStatus: "ok",
+      turn: baseTurn({
+        usage: {
+          inputTokens: 1,
+          outputTokens: 1,
+          totalTokens: 2,
+          model: "fake-test-model",
+          providerResponseId: "fake-fp14-uniq",
+        },
+      }) as never,
+    });
+    const first = collectP6ProductTurnEvidence({
+      productTurnResult: productDtoWithReceipt(receipt),
+      runId: "P6-FP14-UNIQ",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+    });
+    expect(first.ok).toBe(true);
+
+    const dupReject = collectP6ProductTurnEvidence({
+      productTurnResult: productDtoWithReceipt(receipt),
+      runId: "P6-FP14-UNIQ",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+      onDuplicate: "reject",
+    });
+    expect(dupReject.ok).toBe(false);
+
+    const beforeDb = Buffer.from("sqlite-fp16-sentinel");
+    fs.writeFileSync(sessionDbPath, beforeDb);
+    const skip = collectP6ProductTurnEvidence({
+      productTurnResult: productDtoWithReceipt(receipt),
+      runId: "P6-FP14-UNIQ",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+      onDuplicate: "skip",
+    });
+    expect(skip.ok).toBe(true);
+    if (skip.ok) expect(skip.status).toBe("duplicate_skipped");
+
+    const other = collectP6ProductTurnEvidence({
+      productTurnResult: productDtoWithReceipt(
+        buildCognitiveExecutionReceipt({
+          logicalTurnId: "ltu:fp14-b",
+          projectId: "prj:p6-ledger",
+          presentation: "openai_live",
+          productTerminalStatus: "ok",
+          turn: baseTurn({
+            usage: {
+              inputTokens: 1,
+              outputTokens: 1,
+              totalTokens: 2,
+              model: "fake-test-model",
+              providerResponseId: "fake-fp14-other",
+            },
+          }) as never,
+        }),
+      ),
+      runId: "P6-FP14-OTHER",
+      scenarioId: "P6-MIN-09",
+      absolutePath: ledgerPath,
+    });
+    expect(other.ok).toBe(true);
+    expect(Buffer.compare(fs.readFileSync(sessionDbPath), beforeDb)).toBe(0);
+
+    const healthy = readP6EvidenceLedger({ absolutePath: ledgerPath });
+    expect(healthy.integrityPass).toBe(true);
+    expect(healthy.duplicateRunIds).toEqual([]);
+  });
 });
```

---

## 13. Instruction ChatGPT

Lire le dernier handoff distant.

Comparer:
- classifyProvider Product ;
- validateCognitiveReceiptRow ledger ;
- nouveau test de parité (FP01–FP16) ;
- capture QA ;
- lecture du ledger ;
- sécurité ;
- preuves historiques ;
- diff du commit correctif b6eb7862 ;
- SHA PR #580 ;
- CI sur le nouveau SHA ;
- Required Gate.

Rendre un verdict de **MERGE READINESS**.

Ne pas autoriser automatiquement: MERGE, REAL, promotion runtime v3, cleanup, suppression branche.

---

**FIN DU REVIEW PACK FULL — FAKE PROVENANCE PARITY CORRECTION**
