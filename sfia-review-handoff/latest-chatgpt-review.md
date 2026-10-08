# P5-S08-4 — CI CORRECTION PASS — DURABLE VISUAL PAIRING CONTRACT

**Timestamp:** 2026-10-08 02:24:23 +0200
**Cycle:** P5-S08-4 / Cycle 8 — Delivery / CI correction
**Profile:** STANDARD · Review Pack = FULL
**Typologie:** RUN / CI CORRECTION
**Branch:** `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
**PR:** #567
**Entry HEAD:** `70a4d36b7f4fba87e729c267a6295f263267b8ee`
**Correction commit / Final HEAD:** `31d9cf8900f505d74ade2c1d1a83917ea8a7b48e`
**origin/main:** `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e`

**Morris GO consumed:** CI correction + project push NORMAL + CI observe + L3 handoff
**NOT consumed:** merge / Ready-for-review / force push / S08-5

**Verdict:**

```
CI CORRECTION = PASS
PAIRING CONTRACT = CI-DURABLE
HUMAN VISUAL RE-PROOF = NOT REQUIRED
GLOBAL P3 VISUAL PARITY = PRESERVED
CI = GREEN
PR #567 = DRAFT / READY FOR MORRIS MERGE REVIEW
MERGE = NOT AUTHORIZED
```

---

## Local Git Truth (entry)

| Item | Value |
| --- | --- |
| Branch | matches expected |
| Entry HEAD | `70a4d36b7f4fba87e729c267a6295f263267b8ee` |
| Remote project SHA | `70a4d36b7f4fba87e729c267a6295f263267b8ee` (pre-push) |
| origin/main | `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` — unchanged |
| Staged | none |
| Untracked | `projects/.tmp-sfia-review/` — not staged |

≠ STOP — LOCAL GIT TRUTH DIVERGENCE

---

## CI failure confirmed (prior)

| Field | Value |
| --- | --- |
| Workflow | SFIA Studio CI #702 |
| Run | `37703336972` |
| Attempt | 2 |
| Failed job | Build and validate SFIA Studio |
| Failed step | Unit tests (Vitest) |
| Result | 5401 passed / 143 skipped / **1 failed** |
| Failed test | `s08-4.visualPairingContract.d0.test.ts` → `loads canonical state-manifest with representative pairs` |
| Assertion | `fs.existsSync(STATE_MANIFEST) === true` (line 84) |
| Path | `.tmp-sfia-review/visual/s08-4/final-fidelity/state-manifest.json` |
| Root cause | **DURABLE TEST → LOCAL SCRATCH DEPENDENCY** after PR hygiene gitignore/untrack |

Not a Product visual regression / Figma mismatch / pairing logic failure.

---

## Correction

### Durable pairing manifest path

`projects/sfia-studio/app/e2e/fixtures/s08-4/visual-pairing-state-manifest.json`

### Provenance

Migrated from local scratch source still present:

`.tmp-sfia-review/visual/s08-4/final-fidelity/state-manifest.json`

15 pairs preserved; representative IDs identical to Vitest expectations; Decision node `190:495` retained.

### Scratch / local fields excluded

- absolute `/Users/...` paths
- PNG / diff / SQLite paths
- scratch `seedManifest` / `snapshotsIndex` relative scratch paths
- capture-runtime campaign execution details not required for unit contract
- no binary evidence

Kept: pair ids, representative, Figma nodeId/viewport, fixtureId, projectId, expectedProjectName, route/view, semanticState, expectedVisible/Absent, identityAligned, contentAligned, content facts, captureId, finalFidelity, globalForbidden, diffRule, figmaFileKey authority.

### Files modified

```
M	projects/sfia-studio/app/__tests__/project-assistant/s08-4.visualPairingContract.d0.test.ts
A	projects/sfia-studio/app/e2e/fixtures/s08-4/visual-pairing-state-manifest.json
M	projects/sfia-studio/app/e2e/p3-visual-parity.spec.ts
```

```
31d9cf89 test(sfia-studio): make S08-4 visual pairing contract CI-durable
 .../s08-4.visualPairingContract.d0.test.ts         |   3 +-
 .../s08-4/visual-pairing-state-manifest.json       | 719 +++++++++++++++++++++
 .../sfia-studio/app/e2e/p3-visual-parity.spec.ts   |  35 +-
 3 files changed, 738 insertions(+), 19 deletions(-)
```

### Vitest path change (exploitable)

```diff
commit 31d9cf8900f505d74ade2c1d1a83917ea8a7b48e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Oct 8 02:15:34 2026 +0200

    test(sfia-studio): make S08-4 visual pairing contract CI-durable

    Move representative pairing semantics into a versioned e2e fixture so Vitest
    no longer depends on gitignored .tmp-sfia-review scratch evidence.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/s08-4.visualPairingContract.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/s08-4.visualPairingContract.d0.test.ts
index cc9941ac..b27d7d71 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/s08-4.visualPairingContract.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/s08-4.visualPairingContract.d0.test.ts
@@ -15,9 +15,10 @@ import {
   type VisualPairRecord,
 } from "../../e2e/support/visualPairingContract";

+/** Durable QA pairing contract (not generated scratch under `.tmp-sfia-review/**`). */
 const STATE_MANIFEST = path.resolve(
   __dirname,
-  "../../../../../.tmp-sfia-review/visual/s08-4/final-fidelity/state-manifest.json",
+  "../../e2e/fixtures/s08-4/visual-pairing-state-manifest.json",
 );

 function baseObs(
```

### E2E path change (exploitable)

```diff
commit 31d9cf8900f505d74ade2c1d1a83917ea8a7b48e
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Oct 8 02:15:34 2026 +0200

    test(sfia-studio): make S08-4 visual pairing contract CI-durable

    Move representative pairing semantics into a versioned e2e fixture so Vitest
    no longer depends on gitignored .tmp-sfia-review scratch evidence.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/e2e/p3-visual-parity.spec.ts b/projects/sfia-studio/app/e2e/p3-visual-parity.spec.ts
index d5a82824..5b8893dc 100644
--- a/projects/sfia-studio/app/e2e/p3-visual-parity.spec.ts
+++ b/projects/sfia-studio/app/e2e/p3-visual-parity.spec.ts
@@ -24,9 +24,10 @@ const CAPTURE_ROOT = path.resolve(
   process.cwd(),
   "../../../.tmp-sfia-review/visual/s08-4/final",
 );
+/** Same durable pairing contract as Vitest (captures remain under `.tmp-sfia-review/**`). */
 const STATE_MANIFEST_PATH = path.resolve(
   process.cwd(),
-  "../../../.tmp-sfia-review/visual/s08-4/final-fidelity/state-manifest.json",
+  "e2e/fixtures/s08-4/visual-pairing-state-manifest.json",
 );
 const GEO_ROOT = path.resolve(
   process.cwd(),
@@ -140,23 +141,21 @@ test.describe("P5-S08-4 P3 visual parity", () => {
       .waitFor({ state: "visible", timeout: 15_000 })
       .catch(() => null);

-    // Fail-closed pairing smoke: Projects desktop must match state-manifest.
-    if (fs.existsSync(STATE_MANIFEST_PATH)) {
-      const sm = JSON.parse(
-        fs.readFileSync(STATE_MANIFEST_PATH, "utf8"),
-      ) as { pairs: VisualPairRecord[] };
-      const projectsPair = sm.pairs.find(
-        (p) => (p as { captureId?: string }).captureId === "projects-1440",
-      );
-      if (projectsPair) {
-        const obs = await observeVisualPairing(page, {
-          width: 1440,
-          height: 1024,
-        });
-        const pairing = evaluateVisualPair(projectsPair, obs);
-        expect(pairing.ok, pairing.ok ? "" : pairing.reason).toBe(true);
-      }
-    }
+    // Fail-closed pairing smoke: Projects desktop must match durable contract.
+    expect(fs.existsSync(STATE_MANIFEST_PATH)).toBe(true);
+    const sm = JSON.parse(
+      fs.readFileSync(STATE_MANIFEST_PATH, "utf8"),
+    ) as { pairs: VisualPairRecord[] };
+    const projectsPair = sm.pairs.find(
+      (p) => (p as { captureId?: string }).captureId === "projects-1440",
+    );
+    expect(projectsPair, "projects-1440 pair missing from durable manifest").toBeTruthy();
+    const obs = await observeVisualPairing(page, {
+      width: 1440,
+      height: 1024,
+    });
+    const pairing = evaluateVisualPair(projectsPair!, obs);
+    expect(pairing.ok, pairing.ok ? "" : pairing.reason).toBe(true);

     const projects = await capture(page, "projects-1440", {
       width: 1440,
```

E2E now consumes the **same** durable contract; captures remain under `.tmp-sfia-review/**`.

---

## Change classification

| Dimension | Result |
| --- | --- |
| Product/runtime | **NO** |
| CSS/layout | **NO** |
| Figma contract | **NO** |
| Pairing logic (`visualPairingContract.ts`) | **NO** |
| Pairing semantics | **NO** (same facts; storage relocated) |
| Test/harness storage source | **YES** |

HUMAN VISUAL RE-PROOF = **NOT REQUIRED**
GLOBAL P3 VISUAL PARITY = **PRESERVED**
P0/P1/P2 = **0 / 0 / 0**

---

## Validations

| Gate | Result |
| --- | --- |
| Targeted pairing Vitest | **12/12 PASS** |
| No-scratch proof (`.tmp-sfia-review/visual` temporarily renamed) | **PASS** |
| Full Vitest | **5402 passed / 143 skipped / 0 failed** |
| Typecheck | **PASS** |
| Lint | **PASS** |
| Build | **PASS** |
| Visual E2E `p3-visual-parity.spec.ts` | **PASS** (1 test, production `next start`) |
| git diff --check | **clean** |

---

## Push / PR

| Item | Value |
| --- | --- |
| Push | NORMAL to project branch — success |
| remote project SHA | `31d9cf8900f505d74ade2c1d1a83917ea8a7b48e` |
| PR #567 head SHA | `31d9cf8900f505d74ade2c1d1a83917ea8a7b48e` |
| PR state | OPEN |
| isDraft | **TRUE** |
| Ready-for-review | **NONE** |

---

## New CI

| Item | Value |
| --- | --- |
| Run | `37706819016` |
| Attempt | 1 |
| headSha | `31d9cf8900f505d74ade2c1d1a83917ea8a7b48e` |
| Detect SFIA Studio changes | **PASS** |
| Build and validate SFIA Studio | **PASS** (8m5s) |
| SFIA Studio Required Gate | **PASS** |
| CI final | **GREEN / success** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/37706819016 |

Unit tests / typecheck / lint / build / governance / secret / whitespace are covered inside the green Build job + Required Gate.

---

## Anti-claims

| Claim | Status |
| --- | --- |
| Merge | **NONE / NOT AUTHORIZED** |
| Ready-for-review | **NONE** |
| S08-4 INTEGRATED / POST-MERGE | **NO** |
| S08-5 | **NOT STARTED** |
| P5 COMPLETE | **NO** |
| P6 READY | **NO** |
| runtime v3 | **NON ADOPTED** |
| READY FOR REAL | **NO** |

---

## Reservations

None blocking. Local gitignored visual scratch may still exist on disk.

---

## Actions Morris

1. Review PR #567 with CI GREEN.
2. Distinct GO required for merge.
3. Post-merge validation after merge.
4. S08-5 only after integration truth.

**STOP** — no merge / no S08-5.
