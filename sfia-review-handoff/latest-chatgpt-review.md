# PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 — PR #505 T6 CI CORRECTION — Review Pack FULL

**Timestamp (UTC):** 2026-09-18T17:44:50Z
**Timestamp (local):** 2026-09-18 19:44:50 CEST
**Pack revision:** PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 / T6 STALE ORACLE ALIGNMENT
**SAME MACRO / NO MICRO-CYCLE:** YES
**Morris GO consumed:** GO — ALIGN T6 STALE TEST ORACLE ONLY — SAME MACRO — EXISTING PR #505
**Prior CI FAIL handoff:** `720010f49402d8937bdb8047363b9767741e2e96` · blob `284db613a939b490da22b74d11ffd5c465d6a8ea`
**Prior CI fail run:** `35372491342`
**Verdict:** PR #505 — CORRECTION PUSHED — CI PENDING — MERGE NOT AUTHORIZED

---

## 1. Git Truth (initial)

| Item | Value |
|---|---|
| Workspace | `/workspace` |
| Branch | `qa/sfia-studio-product-journey-claim-evidence-completion-01` |
| HEAD before correction | `ce61740b873c0f580e1733ad53e32e57a2628cb5` |
| origin/main | `9c6ac90974113044330284dd110108287ba2319e` (= `9c6ac909…`) |
| Remote qa (before) | `ce61740b…` |
| PR #505 | OPEN · not merged · head was `ce61740b…` |

---

## 2. Diagnostic T6 (confirmed before edit)

PRODUCT_WHAT:

1. EO0 `Le fichier Markdown matérialisé au chemin cible`
2. EO1 `Vérification de l’existence et de la conformité minimale du fichier`

T6 setup: Artifact Evidence with `location == inputs.targetPath`; no conformity Evidence.

Intentional product semantic (`docsWriteContractResultSemantic`):

- EO0 → **PASS** (Artifact at bound targetPath)
- EO1 → **NOT_PROVEN** (conformity attestation required)

Stale assertion expected all NOT_PROVEN → CI fail. **No product change.**

---

## 3. File modified (exactly one)

`projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts`

### Diff (commit HEAD)

```diff
commit de954f80af4e7fff5f77c8350cae342156dd0e6e
Author: Cursor Agent <cursoragent@cursor.com>
Date:   Fri Sep 18 17:44:26 2026 +0000

    test(sfia-studio): align docs-write T6 oracle

    EO0 materialized-markdown PASSes with matching artifact location;
    EO1 min-conformity stays NOT_PROVEN without conformity attestation.

    Co-authored-by: mcleland147 <mcleland147@users.noreply.github.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts
index be580dbe..deea121c 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts
@@ -441,7 +441,9 @@ describe("CR-BLK-04 — preserve Contract WHAT on docs-write M3 resolution", ()
     expect(fail[0]?.result).toBe("NOT_PROVEN");
   });

-  it("T6 — free-form / conformity EO remains NOT_PROVEN with artifact alone", () => {
+  it("T6 — materialized EO PASSes with matching artifact; conformity EO remains NOT_PROVEN without attestation", () => {
+    // EO0: Artifact.location == bound targetPath → PASS.
+    // EO1: conformity attestation Evidence required → NOT_PROVEN with artifact alone.
     const c = docsWriteEc({
       executionContractId: "xct:cr-blk-04:free",
       expectedOutputs: [...PRODUCT_WHAT],
@@ -502,6 +504,6 @@ describe("CR-BLK-04 — preserve Contract WHAT on docs-write M3 resolution", ()
       evidences: [evidence],
       evaluatedAt: NOW,
     });
-    expect(eo.every((a) => a.result === "NOT_PROVEN")).toBe(true);
+    expect(eo.map((a) => a.result)).toEqual(["PASS", "NOT_PROVEN"]);
   });
 });
```

---

## 4. Validations

| Check | Result |
|---|---|
| T6 suite `contractResultCrBlk04PreserveWhat` | **4/4 PASS** |
| claimEvidenceCompletion | **18 PASS** |
| w3cPostEvidenceCorrection | **17 PASS** |
| Focused total | **39 PASS** |
| `tsc --noEmit` | **PASS** |
| `git diff --check` | **PASS** |

Product files unchanged. Roadmap unchanged.

---

## 5. Commit / push / PR

| Item | Value |
|---|---|
| Test-only commit | `de954f80af4e7fff5f77c8350cae342156dd0e6e` |
| Remote branch SHA | `de954f80af4e7fff5f77c8350cae342156dd0e6e` (parity) |
| PR | **#505** https://github.com/mcleland147/sfia-workspace/pull/505 |
| Base | `main` @ `9c6ac909…` |
| CI after push | **PENDING** (subscribed) |
| Merge | **NOT AUTHORIZED** |

---

## 6. Anti-claims

- ≠ product code change
- ≠ Roadmap / doctrine change
- ≠ new REAL / Attempt / HD / trajectory change
- ≠ new PR / new branch / merge
- ≠ Product Journey READY/COMPLETE
- ≠ runtime v3 ADOPTED

---

## 7. Invariants preserved

Attempts 3 · ZERO REAL · HD 5 · traj v4 · CE v1 immutable · CE v2 PASS · LPS v29 · Product SUCCESS · CR-CEC-01/02/03 closed

---

## 8. Next gate

Await CI Required Gate on PR #505 head `de954f80af4e7fff5f77c8350cae342156dd0e6e`. Merge remains DISTINCT Morris GO.
