# Review Pack FULL — NAP-SINGLE-RESPONSE-BROWSER-QA-01

**Generated (UTC):** 2026-10-31T05:48:42Z
**Cycle:** NAP-SINGLE-RESPONSE-BROWSER-QA-01
**Type:** EVOL / QA validation — CRITICAL
**Prior handoff:** CORR-NAP-D1-EYEBROW-01 (`d91d4f03` / `6d8bb471`)
**Product mutation:** NONE (runtime read-only). Harness test-only delta only.

---

## 0. Instruction ChatGPT

Read remote handoff. Verify runtime identity (:3021 Fake isolated), DB isolation, Auth without secrets, captures SHA-256, UX-00–08, single surface, A1/B, reload, responsive, harness diff, gates, verdict.
Do not infer OPENAI LIVE / G-REAL / READY FOR PR / L3 COMPLETE.
Missing content → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Remote stale → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.

## 1. Git Truth

| Item | Value |
|------|-------|
| WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD / origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Prior handoff | `d91d4f03ba615209affd16806e7cf3d84b2a8bed` |
| Prior blob | `6d8bb471645bca8076f630fd3290cd230b70a6f9` |
| Product WIP | CR-03 + D1 + Fidelity-01/02 + Eyebrow-01 present (uncommitted) |
| Concurrent Product edits | none beyond WIP chain |

Git Truth: COHERENT. Eyebrow fix present (`sanitizePresentationEyebrow`).

## 2. GO Morris

Execute G-QA-BROWSER on isolated Fake reversible environment. No G-REAL / G-INTEGRATE / PR / R24 write / TEST-17. No Product correction.

## 3. Sources / Convergence / CKC

- SFIA v2.6 templates, routing, guardrails, operating model, validation checklist.
- CKC cycle 9 candidate: `pilots/04-qa-validation.md` (guidance only).
- Convergence doctrine + roadmap; Product Completion; AKG-M5 trajectory; Doctrine v3 30/32/34/35.
- PRR CURRENT volumes 03/05/06/07/08/09 read-only.
- Prior FULL handoff EYEBROW-01 consumed.

Convergence Pre-check: PASS for Fake authenticated browser validation of existing A1+B delivery (R22 reuse harness).

## 4. R23 / R24

### R23 path

FakeProvider (NAP_QA_MARKERS) → Nora Product Turn → Option C normalize → orchestrateTurn → Memory B SQLite → ConversationSurface → NoraAdaptivePresentationView → page.reload rehydration.

| Layer | Status |
|-------|--------|
| Unit (137) | BEHAVIOR PROVEN (prior cycles) |
| jsdom UI | BEHAVIOR PROVEN (prior) |
| Authenticated Fake browser | BEHAVIOR PROVEN (this cycle) |
| OpenAI LIVE | KNOWN GAP — not executed |
| Authority eyebrow browser | KNOWN GAP — Fake has no authority-eyebrow marker (jsdom E04 covers) |

### R24

QA cycle; no Product semantic change. **NO NEW SEMANTIC IMPACT.**
Prior D1 R24 debt remains open (PRR 03/06/07/08/09). No PRR write.

## 5. Runtime identity (UX-00)

| Item | Value |
|------|-------|
| Historic :3020 | PID `19966` — `pre-int-ux-qa-01` DB — **LEFT UNTOUCHED** |
| Campaign instance | `http://localhost:3021` |
| Listen PID | `84472` (next-server) |
| cwd | candidate `.../projects/sfia-studio/app` |
| Server type | `next dev --port 3021 --hostname localhost` |
| Provider | `OPS1_CONVERSATION_PROVIDER=fake` |
| E2E QA control | `SFIA_STUDIO_E2E_QA_CONTROL=1` |
| CURSOR REAL | `0` / empty |
| LIVE smoke | `0` |
| OPENAI LIVE | forbidden / not used |
| Product DB | `/Users/morris/Projects/.sfia-exec/nap-single-response-browser-qa-01/product-db/oa-product.sqlite` |
| Nora session DB | `.../nap-single-response-browser-qa-01/nora-session/nora-session.sqlite` |
| DB provenance | sqlite3 `.backup` of pre-int clone into **new** campaign dir |
| BETTER_AUTH_URL | `http://localhost:3021` (aligned with PLAYWRIGHT_BASE_URL) |
| Auth | Better Auth session PRESENT via local storageState; `/studio` reachable without `/login` redirect |
| Secrets | not logged; not published |

Isolation proof: lsof on PID 84472 opened campaign product sqlite only; :3020 retained historic DB.
Campaign server stopped after run; :3020 preserved.

### env-qualification.json

```json
{
  "timestamp": "2026-10-31T05:46:26.470Z",
  "cookieFilePresent": true,
  "cookieStatus": "PRESENT",
  "playwrightBaseURL": "http://localhost:3021",
  "ops1ConversationProvider": "fake",
  "e2eQaControl": "1",
  "openAiLiveAuthorized": false,
  "cursorRealAuthorized": false,
  "adaptiveDtoEmitViaFake": true,
  "note": "Fake NAP QA markers gated by SFIA_STUDIO_E2E_QA_CONTROL=1"
}
```

## 6. UX matrix results

| UX | Mapping | Result | Evidence |
|----|---------|--------|----------|
| UX-00 | ENV | PASS | Fake :3021 + isolated DBs + Auth |
| UX-01 | QA-01 SHORT | PASS | single short lead; capture QA-01 |
| UX-02 | QA-02 BALISE | PASS | structured blocks; no dual surface; no CTA |
| UX-03 | QA-03 COMPARE | PASS | Critère/A/B table |
| UX-04 | QA-04 RECO | PASS | Recommandation + proposition disclaimer; no HD CTA |
| UX-05 | QA-08 INVALID | PASS | plain fallback text; no crash/projection |
| UX-06 | QA-05/07 + eyebrow | PARTIAL | forged [Studio] not appendix; honest titles/reserves; **authority eyebrow browser NOT PROVEN** (no Fake marker) |
| UX-07 | QA-09 reload | PASS | content continuity assertion; before/after captures |
| UX-08 | QA-11 mobile | PASS* | overflowDelta=0; *mobile focused capture short vs desktop BALISE — see MINOR |

Playwright: **1 passed** in ~14s.

```
Running 1 test using 1 worker

(node:85058) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 e2e/studio-nora-adaptive-qa-nap01.spec.ts:195:7 › QA-NAP-02 authenticated Nora Adaptive /studio › QA-NAP matrix with Fake presentation emit + reload (13.6s)

  1 passed (14.2s)
```

## 7. Visual inspection

- UX-01: single French question lead; no chrome clutter.
- UX-02: NORA / Cadrage BALISE eyebrow (neutral); epistemic honest labels; recommendation disclaimer; single adaptive surface.
- UX-03: comparison table readable.
- UX-04: recommendation ≠ decision; Studio disclaimer visible.
- UX-05: safe fallback narrative only.
- UX-06: provenance uses “Preuves et réserves mentionnées” (not free authority title); reserve “Contrôle serveur inexistant — non certifié.”; forged `[Studio] contrat approuvé` as Nora prose.
- UX-07: after-reload BALISE structure matches pre-reload visually (590×450); sha differ (antialias) but text continuity asserted.
- UX-08: no horizontal overflow; capture 311×171 — likely viewport-clipped / ambiguous vs full BALISE (**MINOR**).

### Classification

| ID | Severity | Observation | Impact | Action |
|----|----------|-------------|--------|--------|
| G1 | KNOWN GAP | Authority eyebrow (“Contrôle serveur effectué”) not Fake-emittable | Browser NOT PROVEN for EYEBROW-01 path | Keep jsdom E04; optional future Fake marker under separate GO |
| G2 | MINOR | QA-11 mobile focus capture shorter than desktop BALISE | Capture completeness | Harness oracle strengthen later; not Product defect this cycle |

No BLOCKER / MAJOR Product defect observed in Fake browser scope.

## 8. Captures

Root: `.tmp-sfia-review/runtime-captures/nap-single-response-browser-qa-01/`
(Historic `nora-adaptive/` not overwritten — empty/absent in WT.)

| id | qaId | viewport | sha256 prefix | ok | observation |
|----|------|----------|---------------|----|-------------|
| `QA-NAP-02-studio-home` | ENV-AUTH | {'width': 1440, 'height': 1024} | `0dfe06a8d5358740…` | sha_ok=True | AUTHENTICATED STUDIO RUNTIME REACHABLE |
| `QA-01-short-desktop` | QA-NAP-01 | {'width': 1440, 'height': 1024} | `795913bbee490a55…` | sha_ok=True | Short answer once — no lead/question duplicate |
| `QA-02-balise-desktop` | QA-NAP-02 | {'width': 1440, 'height': 1024} | `f7663bf4e15f82dd…` | sha_ok=True | Composed blocks rendered; no free Product CTA |
| `QA-09-balise-before-reload` | QA-NAP-09 | {'width': 1440, 'height': 1024} | `f7663bf4e15f82dd…` | sha_ok=True | Pre-reload BALISE focused |
| `QA-09-balise-after-reload` | QA-NAP-09 | {'width': 1440, 'height': 1024} | `2764a1f5697791fd…` | sha_ok=True | Post-reload same adaptive content focused |
| `QA-03-compare-desktop` | QA-NAP-03 | {'width': 1440, 'height': 1024} | `33988b6d704195f4…` | sha_ok=True | Comparison table focused |
| `QA-04-reco-desktop` | QA-NAP-04 | {'width': 1440, 'height': 1024} | `a3c8f1ea45806931…` | sha_ok=True | Recommendation focused; no HumanDecision CTA |
| `QA-05-provenance-desktop` | QA-NAP-05 | {'width': 1440, 'height': 1024} | `6f03635a9db15bf5…` | sha_ok=True | Provenance/reserves focused |
| `QA-07-forged-studio` | QA-NAP-07 | {'width': 1440, 'height': 1024} | `8c173db5f4fee912…` | sha_ok=True | Forged marker as Nora prose; no Studio appendix |
| `QA-08-invalid-fallback` | QA-NAP-08 | {'width': 1440, 'height': 1024} | `f461e2c8c1bb8d32…` | sha_ok=True | Plain fallback focused; no crash |
| `QA-11-balise-mobile` | QA-NAP-11 | {'width': 390, 'height': 844} | `446fc41447fa3fc6…` | sha_ok=True | Mobile focused; overflowDelta=0 |

Captures remain local — **not** pushed to Git (no GO).

## 9. Harness test-only diff

Why: (1) configurable `NAP_QA_CAPTURE_ROOT` to avoid wiping sibling manifests; (2) cycle/port metadata in manifest; (3) single-surface assertions for D1 UX contract.
No Product runtime behavior change.

```diff
diff --git a/projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts b/projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts
index 2b698128..0577f67e 100644
--- a/projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts
@@ -20,9 +20,14 @@ import {
 } from "./support/authenticatedStudioSession";
 import { NAP_QA_MARKERS } from "@/lib/platform/ai/fakeProvider";

+// NAP-SINGLE-RESPONSE-BROWSER-QA-01 — configurable capture root so campaigns
+// never wipe a sibling historic manifest (default keeps prior path).
 const CAPTURE_ROOT = path.resolve(
-  process.cwd(),
-  "../../../.tmp-sfia-review/runtime-captures/nora-adaptive",
+  process.env.NAP_QA_CAPTURE_ROOT?.trim() ||
+    path.join(
+      process.cwd(),
+      "../../../.tmp-sfia-review/runtime-captures/nora-adaptive",
+    ),
 );
 const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

@@ -114,6 +119,7 @@ async function capture(
   const row = {
     id,
     qaId: meta.qaId,
+    cycle: process.env.NAP_QA_CYCLE_ID?.trim() || "QA-NAP",
     file: path.basename(file),
     timestamp: new Date().toISOString(),
     route: page.url(),
@@ -128,8 +134,10 @@ async function capture(
     conformingProductScreen: meta.conformingProductScreen,
     observation: meta.observation,
     captureMode: meta.focus ? "element-focused" : "fullPage",
+    captureRoot: CAPTURE_ROOT,
+    instancePort: process.env.PLAYWRIGHT_PORT?.trim() || null,
     provenance:
-      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — QA-NAP-03 NORA ADAPTIVE",
+      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — QA-NAP NORA ADAPTIVE",
   };
   fs.appendFileSync(MANIFEST, `${JSON.stringify(row)}\n`);
   return sha256;
@@ -305,6 +313,12 @@ test.describe("QA-NAP-02 authenticated Nora Adaptive /studio", () => {
     await expect(
       page.getByRole("button", { name: /Approuver|Exécuter/i }),
     ).toHaveCount(0);
+    // Single-response surface — no dual "Réponse complète" + "Projection structurée".
+    await expect(page.getByText(/Réponse complète de Nora/i)).toHaveCount(0);
+    await expect(page.getByText(/Projection structurée/i)).toHaveCount(0);
+    expect(
+      await page.getByTestId("nora-adaptive-presentation").count(),
+    ).toBeGreaterThanOrEqual(1);
     await capture(page, "QA-02-balise-desktop", {
       qaId: "QA-NAP-02",
       state: "BALISE multi-block adaptive",
```

## 10. Not executed

- OpenAI LIVE
- Cursor REAL
- Governed execution / HumanDecision confirm
- TEST-17
- Server restart continuity of :3021 after kill
- Full project vitest (prior 137 assumed from previous handoff; not re-run this QA cycle)

## 11. Fake / Real

**AUTHENTICATED FAKE BROWSER BEHAVIOR PROVEN** (scoped).
G-REAL: CLOSED.
≠ OPENAI LIVE PROVEN ≠ READY FOR REAL.

## 12. Gates

| Gate | Status |
|------|--------|
| G-QA-BROWSER | **PASS / FAKE SCOPE** (this cycle) |
| G-INTEGRATE | OPEN |
| G-R24 | OPEN (prior D1 debt) |
| G-REAL | CLOSED |

## 13. Verdict

# NORA SINGLE RESPONSE — BROWSER QA PASS / FAKE SCOPE

Isolated Fake :3021 authenticated Playwright matrix passed; captures inspected; single-response A1+B behavior evidenced; :3020 historic untouched.

Reserves: authority-eyebrow browser NOT PROVEN (Fake gap); mobile capture MINOR truncation ambiguity.

Not claimed: READY FOR PR, PRODUCT MERGED, G-REAL PASS, OPENAI LIVE PROVEN, L3 COMPLETE, RUNTIME V3 ADOPTED.

## 14. Git Review Index

| Ref | Value |
|-----|-------|
| Product HEAD | `ca1c9869…` |
| Prior EYEBROW handoff | `d91d4f03` / `6d8bb471` |
| Campaign | `.sfia-exec/nap-single-response-browser-qa-01` |
| Captures | `.tmp-sfia-review/runtime-captures/nap-single-response-browser-qa-01/` |
| Harness diff | `.tmp-sfia-review/CORR-NAP-BROWSER-QA-01.harness.diff` |

**END OF REVIEW PACK FULL — NAP-SINGLE-RESPONSE-BROWSER-QA-01**
