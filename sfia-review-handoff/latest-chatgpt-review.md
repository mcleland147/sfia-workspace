# CORR-NAP-CI-01 — PLAYWRIGHT / VITEST BOUNDARY — REVIEW PACK FULL

MONO-CYCLE: CORR-NAP-CI-01
PROFILE: STANDARD
TYPOLOGY: CORR / QA / CI READINESS
MILESTONE: AKG-M5 / L3-S2

## 1. Timestamp UTC

2026-10-30T10:37:56Z

## 2. GO Morris consommé

CORR-NAP-CI-01 — CORRECTION APPROVED.
Passage: CORRECTION LOCALE → VALIDATIONS → REVIEW PACK FULL → REVIEW HANDOFF → CHATGPT REVIEW.
Aucun commit/push projet dans ce passage. Aucun merge. Aucun undraft.

## 3. Git Truth Check

| Check | Value |
|-------|-------|
| pwd -P | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| toplevel | same |
| remote | `https://github.com/mcleland147/sfia-workspace.git` |
| branch | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD local | `c6b5ae3a798070760587ac6605e6276458f375f6` |
| origin/feat tip | `c6b5ae3a798070760587ac6605e6276458f375f6` (identical) |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| ls-remote main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (unchanged) |
| Product WIP préexistant | none (only this cycle's test WIP + review pack) |
| staged | empty |
| PR #628 | OPEN / DRAFT / NOT MERGED |
| PR headRefOid | `c6b5ae3a798070760587ac6605e6276458f375f6` |
| PR baseRefOid | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Correctif commit déjà présent | NON — correction uncommitted only |

**C01 Git Truth PASS.**

## 4. Sources consultées

PROCESSUS (Git courant / méthode): cycle routing, rules/guardrails, validation checklist, repository execution engine guidance (as applicable to CORR QA CI).
CKC: Cycle 8 CORR-NAP-CI-01 (synthetic 15-cycle map as non-authoritative guidance).
STUDIO: convergence doctrine/roadmap, product-completion cadrage, doctrine v3 applicable.
PRR: production-runtime-reference README + conformance checker (RO).
CODE:
- `projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts` (MODIFIED)
- `projects/sfia-studio/app/e2e/support/authenticatedStudioSession.ts` (RO)
- `projects/sfia-studio/app/e2e/studio-nora-adaptive-qa-nap01.spec.ts` (RO)
- `.github/workflows/sfia-studio-ci.yml` (RO)
- `projects/sfia-studio/app/package.json` (RO)
Preuves: QA-NAP-03 / C13-NAP-02 / GI-NAP-01 / PR-NAP-01 handoff chain.
Git/code/preuves primaires priment.

## 5. Convergence Pre-check

Capacité v3: Nora Adaptive Presentation A3/A4 Option C.
Milestone: AKG-M5 / L3-S2.
État: Product feature published on PR #628 OPEN/DRAFT; Required Gate FAILURE (CI run 41033681362). Merge BLOCKED.
Actifs réutilisés: `parseCookieHeaderToPlaywrightCookies`; Vitest existing; Playwright helper; E2E authenticated Studio; workflow CI existing.
Classification: **ADAPT — test uniquement. KEEP — Product, E2E, CI.**
Gap: Vitest used `chromium.launch` while CI does not install Chromium.
Exit proof this passage: test corrected; no binary browser dependency in Vitest; deterministic assertions; E2E boundary preserved; validations PASS; mono-file diff.
Aucune architecture parallèle.
Aucune promotion: L3 GLOBAL OPEN; EP-S2-08 PARTIAL; EP-S2-05 NOT PROVEN; G-REAL NOT GRANTED; L4 NOT AUTHORIZED; Runtime v3 NON ADOPTED.

## 6. PR #628 et CI initiale

- PR: https://github.com/mcleland147/sfia-workspace/pull/628
- State: DRAFT / OPEN / NOT MERGED
- Head: `c6b5ae3a798070760587ac6605e6276458f375f6`
- CI failed: https://github.com/mcleland147/sfia-workspace/actions/runs/41033681362
- Failure locus: Vitest `authenticatedStudioSession.d0.test.ts` — `browserType.launch` / Chromium missing on runner.
- Product Nora behavior: not implicated by this CI failure.

## 7. Cause racine

Fichier: `projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts`
Test: « parses Better Auth session cookie header with url-only Playwright shape »
Après assertions structurelles, le test appelait:

```ts
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
await expect(context.addCookies(cookies)).resolves.toBeUndefined();
await browser.close();
```

Dans GitHub Actions: `npm ci` PASS; aucun navigateur Playwright installé; Chromium launch FAIL → Vitest FAIL → Required Gate FAIL.
Défaut de frontière Vitest/E2E — pas une régression Nora.

## 8. Classification R23

| Item | Classification |
|------|----------------|
| Cause racine | dépendance `chromium.launch` dans Vitest |
| Réutilisation | helper parsing existant + harness E2E Playwright existant |
| Composants inchangés | Studio Auth, Nora, Product, Memory B, renderer, CI workflow |
| Classification | **TEST HARNESS ADAPT** / **PRODUCT KEEP** |

## 9. Impact R24

| Impact | Verdict |
|--------|---------|
| Product | **NO SEMANTIC PRODUCT IMPACT** |
| Tests | Correction du niveau d'oracle Vitest vs E2E |
| PRR volume 08 | Pas d'écart sémantique nouveau — preuves QA historiques conservées avec plafond exact |
| Manifest digests | Fichier de test hors topologie digests Product — **pas de refresh** |
| Sync PRR | **NON REQUISE** |

## 10. Fichier modifié

**SEUL fichier projet modifié:**

`projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts`

Fichiers créés: AUCUN.
Workflow / package / E2E / Product: NON MODIFIÉS.

## 11. DIFF COMPLET de la correction

```diff
diff --git a/projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts b/projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts
index a166413e..2d10252a 100644
--- a/projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts
@@ -1,9 +1,10 @@
 /**
- * GAP-14 / QA-NAP-02 — cookie header parse / Playwright shape without leaking values.
+ * GAP-14 / QA-NAP-02 — cookie header parse / Playwright cookie-shape without leaking values.
+ * Deterministic Vitest oracle only — no Chromium launch (CI does not install browsers).
+ * BrowserContext.addCookies acceptance remains covered by E2E harness / QA-NAP-03.
  * @vitest-environment node
  */
 import { afterEach, describe, expect, it } from "vitest";
-import { chromium } from "@playwright/test";
 import {
   assertBetterAuthUrlAlignedWithVisualBase,
   AUTH_VISUAL_BASE_URL_DEFAULT,
@@ -23,7 +24,7 @@ afterEach(() => {
 });

 describe("GAP-14 authenticatedStudioSession helper", () => {
-  it("parses Better Auth session cookie header with url-only Playwright shape", async () => {
+  it("parses Better Auth session cookie header into url-only Playwright cookie shape", () => {
     const header =
       "better-auth.session_token=fake-test-token; other=1; Path=/";
     const cookies = parseCookieHeaderToPlaywrightCookies(
@@ -34,6 +35,8 @@ describe("GAP-14 authenticatedStudioSession helper", () => {
       true,
     );
     expect(cookies.every((c) => typeof c.value === "string")).toBe(true);
+    expect(cookies.every((c) => (c.value ?? "").length > 0)).toBe(true);
+    expect(cookies.every((c) => typeof c.url === "string")).toBe(true);
     expect(cookies.every((c) => c.url?.startsWith("http://localhost"))).toBe(
       true,
     );
@@ -41,11 +44,8 @@ describe("GAP-14 authenticatedStudioSession helper", () => {
     expect(cookies.every((c) => c.path === undefined)).toBe(true);
     expect(cookies.every((c) => c.domain === undefined)).toBe(true);
     expect(cookies.length).toBeGreaterThanOrEqual(1);
-
-    const browser = await chromium.launch({ headless: true });
-    const context = await browser.newContext();
-    await expect(context.addCookies(cookies)).resolves.toBeUndefined();
-    await browser.close();
+    // Structural contract only — ≠ BrowserContext.addCookies acceptance
+    // (E2E: applyAuthenticatedStudioCookies / studio-nora-adaptive-qa-nap01).
   });

   it("rejects headers without Better Auth session marker", () => {
```

Stat: `1 file changed, 8 insertions(+), 8 deletions(-)`
name-status: `M projects/sfia-studio/app/__tests__/e2e-support/authenticatedStudioSession.d0.test.ts`

## 12. Assertions conservées

Conservées / renforcées:
- parsing Better Auth session marker;
- valeurs string non vides;
- `url` défini (localhost);
- `path` undefined;
- `domain` undefined;
- length ≥ 1;
- rejet header sans Better Auth;
- filtrage third-party / empty header;
- visual base URL default localhost;
- fail-closed BETTER_AUTH_URL mismatch;
- inspectAuthCookieFileStatus MISSING;
- restauration env `PLAYWRIGHT_BASE_URL` / `BETTER_AUTH_URL` via `afterEach`.

Retiré:
- import runtime `chromium`;
- `chromium.launch` / `newContext` / `addCookies` / `browser.close`.

Nom du test ajusté pour exprimer le niveau de preuve réel (cookie **shape**, pas BrowserContext acceptance).

## 13. Contrat E2E conservé (lecture seule)

`e2e/support/authenticatedStudioSession.ts`:
- `applyAuthenticatedStudioCookies` → `context.addCookies(cookies)` inchangé;
- `parseCookieHeaderToPlaywrightCookies` inchangé.

`e2e/studio-nora-adaptive-qa-nap01.spec.ts`:
- utilise `applyAuthenticatedStudioCookies` et/ou `context.addCookies` sous session Auth réelle lorsque disponible.

**Distinction des niveaux de preuve:**
| Niveau | Couverture | Statut |
|--------|------------|--------|
| Structural cookie shape | Vitest (ce correctif) | DET VERIFIED local |
| BrowserContext.addCookies acceptance | E2E harness | Conservé dans code E2E |
| Authenticated Studio /studio | E2E sous session | QA-NAP-03 historique (plafond exact) |
| OpenAI LIVE | — | NOT PROVEN ici |

Gap déclaré: le Vitest n'affirme plus l'acceptation Chromium (correct). La couverture navigateur réelle reste dans E2E / QA-NAP-03 — **non rejouée** dans ce passage (Auth env non requis ici). Pas de second harness. Pas de mock artificiel de `addCookies`.

## 14. Tests et exit codes (ciblés)

A. Targeted:
```
npx vitest run __tests__/e2e-support/authenticatedStudioSession.d0.test.ts
```
- Test Files: 1 passed
- Tests: **6 passed (6)**
- Duration: ~281ms (tests 2ms)
- EXIT: **0**
- Aucun navigateur lancé (pas d'import chromium; durée incompatible avec launch).

B. Typecheck: `npm run typecheck` → EXIT **0**
C. Lint: `npm run lint` → EXIT **0** (warnings préexistants OA non liés)
E. Build: Product bytes inchangés — preuve build précédente réutilisable; typecheck OK sans doute Product.

## 15. Full Vitest totals

Commande: `npm test` (depuis `projects/sfia-studio/app`)
EXIT: **0**

| Metric | Value |
|--------|-------|
| files passed | **565** |
| files skipped | **22** |
| files failed | **0** |
| tests passed | **6183** |
| tests skipped | **142** |
| tests failed | **0** |
| total files | 587 |
| total tests | 6325 |
| Duration | **74.58s** |
| Start | 2026-10-30T11:36:35 local / suite logged |

Réserve: une re-run intermédiaire sous charge a produit 4 timeouts flaky (5s) sur fichiers **non touchés** (`candidateTrajectoryCycleStart`, `gcecGitCommitObserve`); re-run propre EXIT 0 ci-dessus — **pas de masquage d'assertions**.

## 16. Checker PRR

```
node scripts/check-production-runtime-reference.mjs
```
(depuis `projects/sfia-studio/app`)

```
OK: canonical README exists
RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK
EXIT: 0
```

Aucun `--write-digests`.

## 17. Sécurité

- aucun secret;
- aucun cookie réel (valeur fictive `fake-test-token` / `abc`);
- aucun token OAuth;
- aucun fixture sensible;
- aucune modification Auth / CI / packages;
- `git diff --check` PASS (CHECK:0).

## 18. Fake/Real Qualification

Applicable: OUI.

| Frontière | Niveau |
|-----------|--------|
| Vitest cookie shape | **DETERMINISTIC COOKIE SHAPE VERIFIED** |
| Fixture | cookie fictif Better Auth |
| BrowserContext acceptance | E2E (code conservé) — non rejoué ici |
| AUTHENTICATED FAKE BROWSER OBSERVED | QA-NAP-03 historique, plafond exact |
| OpenAI LIVE / G-REAL / L4 / v3 ADOPTED | HORS SCOPE / NOT PROVEN |

Ne transforme pas l'oracle structurel en preuve REAL Chromium.

## 19. Gates C01–C16

| Gate | Result |
|------|--------|
| C01 Git Truth PASS | PASS |
| C02 Fichier unique modifié (projet) | PASS |
| C03 Aucun Product runtime change | PASS |
| C04 Aucun workflow CI change | PASS |
| C05 Aucun nouveau package | PASS |
| C06 Pas de chromium.launch Vitest | PASS |
| C07 Assertions cookies conservées | PASS |
| C08 Couverture E2E identifiée | PASS |
| C09 Test ciblé PASS | PASS |
| C10 Typecheck PASS | PASS |
| C11 Lint PASS | PASS |
| C12 Vitest global PASS | PASS |
| C13 PRR conformance PASS | PASS |
| C14 Diff check PASS | PASS |
| C15 Aucun secret | PASS |
| C16 Réserves précédentes préservées | PASS |

## 20. Réserves ouvertes

- L3 GLOBAL OPEN
- EP-S2-08 PARTIAL
- EP-S2-05 NOT PROVEN
- G-REAL NOT GRANTED
- L4 NOT AUTHORIZED
- Runtime v3 NON ADOPTED
- OpenAI LIVE NOT PROVEN
- Browser E2E authenticated non rejoué dans CORR-NAP-CI-01 (dépend Auth env)
- Local Vitest PASS ≠ nouvelle GitHub CI Required Gate sur futur SHA
- PR #628 reste DRAFT; merge blocked jusqu'à CI verte post-intégration
- Digest MATCH ≠ semantic validity (PRR doctrine)
- Fake NAP dual-gate / withGuidance LR réserves produit inchangées

## 21. Prochain gate Git

Après revue ChatGPT indépendante:
1. Intégration contrôlée du **même** diff mono-fichier dans PR #628 (commit/push feature).
2. Nouvelle CI GitHub sur nouveau SHA.
3. Réévaluation Required Gate / merge — **ne pas autoriser merge sur ancienne CI** (run 41033681362).
Ce passage: **aucun** commit/push projet.

## 22. Verdict unique

**CORRECTION LOCAL READY FOR CHATGPT REVIEW**

---

## INSTRUCTION CHATGPT

À réception:
1. Vérifier handoff Git (tip + blob distant).
2. Examiner diff complet (§11).
3. Vérifier couverture déterministe (shape only).
4. Vérifier maintien couverture E2E (helper + nap01 RO).
5. Contrôler tests et PRR.
6. Qualifier correction.
7. Préparer l'intégration contrôlée dans la PR #628 existante.
8. Ne pas autoriser merge sur ancienne CI.
9. Préserver les réserves produit.

FIN CORR-NAP-CI-01.
